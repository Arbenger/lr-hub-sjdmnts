import { createAsyncThunk } from '@reduxjs/toolkit';
import { RootState } from 'redux/store';
import axios from 'axios';

export const fetchDeactivateAccount = createAsyncThunk(
   'account/deactivate',
   async (none, thunkAPI) => {
      const { account } = thunkAPI.getState() as RootState;

      const response = await axios({
         url: '/api/account/deactivater',
         method: 'POST',
         params: {
            accountUID: account.info.uid,
            secretAPIAccessKey: process.env.secretAPIAccessKey,
         },
      });

      return {
         status: response.data.status,
      };
   }
);
