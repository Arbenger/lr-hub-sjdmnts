import { createAsyncThunk } from '@reduxjs/toolkit';
import { dbClient, storageRef } from 'services/firebase/client';
import { RootState } from 'services/redux/store';
import { NO_IMAGE } from 'utils/variables';
import { Book } from '../../library/types';

export const fetchBook = createAsyncThunk<Book>(
   'mainBookDialog/fetchStatus',
   async (payload, thunkAPI) => {
      const {
         mainBookDialog: {
            config: { targetBookId },
         },
      } = thunkAPI.getState() as RootState;

      const bookDoc = await dbClient
         .collection('books')
         .doc(targetBookId)
         .get();
      const book = {
         id: bookDoc.id,
         coverURL: NO_IMAGE,
         ...bookDoc.data(),
      };

      try {
         book.coverURL = await storageRef
            .child(`bookCovers/${bookDoc.id}.png`)
            .getDownloadURL();
      } catch (error) {
         book.coverURL = NO_IMAGE;
      }

      return book as Book;
   }
);
