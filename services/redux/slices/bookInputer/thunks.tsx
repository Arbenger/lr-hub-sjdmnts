import { createAsyncThunk } from '@reduxjs/toolkit';
import { RootState } from 'services/redux/store';
import signToken from 'utils/jwt/signToken';
import axios from 'axios';

export const fetchInputBook = createAsyncThunk(
   'bookInputer/inputStatus',
   async (none, thunkAPI) => {
      const {
         bookInputer: { title, description, copies },
      } = thunkAPI.getState() as RootState;

      const response = await axios({
         url: '/api/book/inputer',
         method: 'POST',
         params: {
            token: signToken({
               title,
               copies,
               description,
            }),
         },
      });

      if (response.data.status === 'failure') {
         await axios({
            url: '/api/book/deleter',
            method: 'POST',
            params: { token: signToken({ title }) },
         });
         return alert('Sorry, please try again!');
      }

      return response.data.payload;
   }
);
