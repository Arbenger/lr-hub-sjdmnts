import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  TextField,
} from "@material-ui/core";
import { useAppDispatch, useAppSelector } from "redux/hooks";
import { selectAccount } from "redux/selectors";
import { triggerModal } from "redux/accountSlice";
import { ChangeEvent, useState } from "react";
import { firebaseClient } from "firebase/client";
import { useRouter } from "next/router";
import axios from "axios";
import useAuth from "firebase/useAuth";

export default function DeactivateAccountModal() {
  const [isConfirmationMatched, setIsConfirmationMatched] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [isPending, setIsPending] = useState(false);
  const state = useAppSelector(selectAccount);
  const dispatch = useAppDispatch();
  const auth = useAuth();
  const router = useRouter();

  const handleClose = () => {
    setInputValue("");
    dispatch(
      triggerModal({
        target: "deactivateAccount",
        isOpen: false,
      })
    );
  };

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
    setIsConfirmationMatched(event.target.value === "DEACTIVATE ACCOUNT");
  };

  const deactivateAccount = async () => {
    setIsPending(true);
    const userIdToken = await auth.user.getIdToken();
    const response = await axios({
      url: "/api/deactivate-account",
      method: "POST",
      params: {
        userIdToken,
        secretAPIAccessKey: process.env.secretAPIAccessKey,
      },
    });
    if (response.data.status === "success") {
      firebaseClient.auth().signOut();
      router.push("/login");
    } else setIsPending(false);
  };

  return (
    <Dialog open={state.modal.deactivateAccount} onClose={handleClose}>
      <DialogTitle>Account Deactivation Confirmation</DialogTitle>
      <DialogContent>
        <DialogContentText>
          Type <strong>DEACTIVATE ACCOUNT</strong> to proceed the deactivation
          of your account. Note that you will not be able to access your account
          again once you deactivate it.
        </DialogContentText>

        <TextField
          autoFocus
          margin="dense"
          label="Confirmation"
          type="email"
          fullWidth
          onChange={handleChange}
          value={inputValue}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose} color="primary">
          Cancel
        </Button>
        <Button
          color="primary"
          variant="contained"
          disabled={!isConfirmationMatched || isPending}
          onClick={deactivateAccount}
        >
          {isPending ? "..." : "Continue"}
        </Button>
      </DialogActions>
    </Dialog>
  );
}
