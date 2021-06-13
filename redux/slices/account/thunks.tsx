import { createAsyncThunk } from '@reduxjs/toolkit';
import { RootState } from 'redux/store';
import axios from 'axios';
import jwt from 'jsonwebtoken';

export const fetchDeactivateAccount = createAsyncThunk(
   'account/deactivateStatus',
   async (payload, thunkAPI) => {
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

export const fetchDeactivateAccountByUID = createAsyncThunk<any, string>(
   'account/deactivateStatus',
   async (accountUID) => {
      const token = jwt.sign({ accountUID }, process.env.secretAPIAccessKey, {
         expiresIn: '1h',
      });

      const response = await axios({
         url: '/api/account/deactivater',
         method: 'POST',
         params: { token },
      });

      return response.data;
   }
);

export const fetchAccountInfoByUID = createAsyncThunk<any, string>(
   'account/fetcInfoStatus',
   async (accountUID) => {
      const token = jwt.sign({ accountUID }, process.env.secretAPIAccessKey, {
         expiresIn: '1h',
      });

      const response = await axios({
         url: '/api/account/getter',
         method: 'POST',
         params: { token },
      });

      return response.data;
   }
);
