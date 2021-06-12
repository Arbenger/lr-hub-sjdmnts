import { createAsyncThunk } from '@reduxjs/toolkit';
import { RootState } from 'redux/store';
import axios from 'axios';

export const fetchInputBook = createAsyncThunk(
   'bookInputer/inputStatus',
   async (none, thunkAPI) => {
      const {
         bookInputer: { title, description, copies },
      } = thunkAPI.getState() as RootState;

      const response = await axios({
         url: '/api/book/adder',
         method: 'POST',
         params: {
            title,
            copies,
            description,
            secretAPIAccessKey: process.env.secretAPIAccessKey,
         },
      });

      if (response.data.status === 'failure') {
         await axios({
            url: '/api/book/deleter',
            method: 'POST',
            params: {
               title,
               secretAPIAccessKey: process.env.secretAPIAccessKey,
            },
         });
         return alert('Sorry, please try again!');
      }

      const { bookId, bookTitle, idOfCopies } = response.data;

      return {
         bookId,
         bookTitle,
         idOfCopies,
      };
   }
);
