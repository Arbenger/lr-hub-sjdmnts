import { createAsyncThunk } from '@reduxjs/toolkit';
import signToken from 'utils/jwt/signToken';
import axios from 'axios';

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

export const fetchAccountInfoByUID = createAsyncThunk<any, string>(
   'account/fetcInfoStatus',
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
