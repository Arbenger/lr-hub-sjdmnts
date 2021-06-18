import {
   Box,
   Paper,
   Button,
   Grid,
   TextField,
   makeStyles,
   IconButton,
} from '@material-ui/core';
import { setData, triggerDialog } from 'services/redux/slices/bookInputer';
import { useAppDispatch, useAppSelector } from 'services/redux/hooks';
import { selectBookInputer } from 'services/redux/selectors';
import { AiOutlineFileAdd as FileAddIcon } from 'react-icons/ai';
import { ChangeEvent, FormEvent, RefObject, useMemo } from 'react';
import Image from 'next/image';

interface Props {
   fileRef: RefObject<HTMLInputElement>;
}

const useStyles = makeStyles(({ spacing, palette }) => ({
   root: {
      padding: spacing(2),
   },
   fileContainer: {
      display: 'flex',
      justifyContent: 'center',
      marginBottom: spacing(2),
   },
   fileWrapper: {
      padding: spacing(1),
      backgroundColor: palette.primary.main,
      display: 'flex',
      alignItems: 'flex-end',
      justifyContent: 'flex-end',
      '& img': {
         borderRadius: 4,
      },
   },
   fileAddButton: {
      color: palette.primary.main,
      position: 'absolute',
      transform: 'translate(-8px, -8px)',
      '& svg': {
         fontSize: 30,
      },
   },
}));

export default function Form({ fileRef }: Props) {
   const classes = useStyles();
   const dispatch = useAppDispatch();
   const { data, pendings } = useAppSelector(selectBookInputer);

   const isSomePending = useMemo(() => {
      return Object.values(pendings).some((pending) => pending);
   }, [pendings]);

   const isReadyToProceed = useMemo(() => {
      return data.title !== '';
   }, [data.title]);

   const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
      const tmpPath = URL.createObjectURL(event.target.files[0]);
      dispatch(setData({ tmpPath }));
   };

   const handleClick = () => {
      fileRef.current.click();
   };

   const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
      event.preventDefault();

      if (!isReadyToProceed) return alert('The form is invalid!');

      dispatch(
         triggerDialog({
            dialog: 'metaData',
            isOpen: true,
         })
      );
   };

   return (
      <Paper className={classes.root}>
         <form onSubmit={handleSubmit}>
            <Grid container spacing={2}>
               <Grid item xs={12}>
                  <Box className={classes.fileContainer}>
                     <Paper className={classes.fileWrapper}>
                        <Image
                           src={data.tmpPath}
                           alt="book-cover-image"
                           width={250}
                           height={300}
                           objectFit="cover"
                           unoptimized
                        />
                        <IconButton
                           color="inherit"
                           className={classes.fileAddButton}
                           onClick={handleClick}
                        >
                           <FileAddIcon />
                        </IconButton>
                     </Paper>

                     <input
                        type="file"
                        accept="image/*"
                        ref={fileRef}
                        onChange={handleChange}
                        hidden
                     />
                  </Box>
               </Grid>

               <Grid item xs={12} sm={6}>
                  <TextField
                     fullWidth
                     label="Book Title"
                     value={data.title}
                     inputProps={{ maxLength: 75 }}
                     onChange={(e) =>
                        dispatch(setData({ title: e.target.value }))
                     }
                  />
               </Grid>

               <Grid item xs={12} sm={6}>
                  <TextField
                     fullWidth
                     label="Book Copies"
                     value={data.copies}
                     InputProps={{ type: 'tel' }}
                     onChange={(e) => {
                        let copies = parseInt(e.target.value || '0');
                        copies = Math.min(Math.max(copies, 0), 500);
                        dispatch(setData({ copies }));
                     }}
                  />
               </Grid>

               <Grid item xs={12}>
                  <TextField
                     fullWidth
                     multiline
                     label="Book Description"
                     value={data.description}
                     onChange={(e) =>
                        dispatch(setData({ description: e.target.value }))
                     }
                  />
               </Grid>

               <Grid item xs={12}>
                  <Box display="flex" justifyContent="flex-end">
                     <Button
                        type="submit"
                        variant="contained"
                        color="primary"
                        disabled={isSomePending || !isReadyToProceed}
                     >
                        {isSomePending ? '...' : 'Submit'}
                     </Button>
                  </Box>
               </Grid>
            </Grid>
         </form>
      </Paper>
   );
}
