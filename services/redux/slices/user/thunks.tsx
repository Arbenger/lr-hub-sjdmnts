import { createAsyncThunk } from '@reduxjs/toolkit';
import { EditUserPayload } from './types';
import { clearInfo, setInfo } from './index';
import signToken from 'utils/jwt/signToken';
import axios from 'axios';

export const fetchUser = createAsyncThunk<any, string>(
   'user/fetchStatus',
   async (uid, thunkAPI) => {
      const response = await axios({
         url: '/api/account/getter',
         method: 'POST',
         params: {
            token: signToken({ uid }),
         },
      });

      if (response.data.status === 'fulfilled')
         thunkAPI.dispatch(setInfo(response.data.payload));

      return response.data;
   }
);

export const editUser = createAsyncThunk<any, EditUserPayload>(
   'user/editStatus',
   async (payload, thunkAPI) => {
      const response = await axios({
         url: '/api/account/editor',
         method: 'POST',
         params: {
            token: signToken({ ...payload }),
         },
      });

      if (response.data.status === 'fulfilled')
         thunkAPI.dispatch(fetchUser(payload.uid));

      return response.data;
   }
);

export const deactivateUser = createAsyncThunk<any, string>(
   'user/deactivateStatus',
   async (uid, thunkAPI) => {
      const response = await axios({
         url: '/api/account/deactivater',
         method: 'POST',
         params: {
            token: signToken({ uid }),
         },
      });

      if (response.data.status === 'fulfilled') thunkAPI.dispatch(clearInfo());

      return response.data;
   }
);
