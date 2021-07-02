import { createAsyncThunk } from '@reduxjs/toolkit';
import { dbClient, storageRef } from 'services/firebase/client';
import { NO_IMAGE } from 'utils/variables';
import { Book } from '../library/types';

export const fetchBook = createAsyncThunk<any, string>(
   'mainBook/fetchStatus',
   async (id) => {
      const bookRef = await dbClient.collection('books').doc(id).get();

      const book = {
         id: bookRef.id,
         coverURL: NO_IMAGE,
         ...bookRef.data(),
      };

      try {
         book.coverURL = await storageRef
            .child(`bookCovers/${bookRef.id}.png`)
            .getDownloadURL();
      } catch (error) {
         book.coverURL = NO_IMAGE;
      }

      return book as Book;
   }
);
