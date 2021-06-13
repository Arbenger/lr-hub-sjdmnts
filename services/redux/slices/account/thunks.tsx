import { createAsyncThunk } from '@reduxjs/toolkit';
import { FetchEditAccountByUIDPayload } from './types';
import signToken from 'utils/jwt/signToken';
import axios from 'axios';

export const fetchAccountInfoByUID = createAsyncThunk<any, string>(
   'account/fetchInfoStatus',
   async (accountUID) => {
      const response = await axios({
         url: '/api/account/getter',
         method: 'POST',
         params: {
            token: signToken({ accountUID }),
         },
      });
      return response.data;
   }
);

export const fetchEditAccountByUID = createAsyncThunk<
   any,
   FetchEditAccountByUIDPayload
>('account/editStatus', async (payload, thunkAPI) => {
   const response = await axios({
      url: '/api/account/editor',
      method: 'POST',
      params: {
         token: signToken({ ...payload }),
      },
   });

   if (response.data.status === 'fulfilled')
      thunkAPI.dispatch(fetchAccountInfoByUID(payload.accountUID));

   return response.data;
});

export const fetchDeactivateAccountByUID = createAsyncThunk<any, string>(
   'account/deactivateStatus',
   async (accountUID) => {
      const response = await axios({
         url: '/api/account/deactivater',
         method: 'POST',
         params: {
            token: signToken({ accountUID }),
         },
      });
      return response.data;
   }
);
