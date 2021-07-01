import { createAsyncThunk } from '@reduxjs/toolkit';
import { dbClient, storageRef } from 'services/firebase/client';
import { NO_IMAGE } from 'utils/variables';
import { Book } from './types';

export const fetchBooks = createAsyncThunk('library/fetchStatus', async () => {
   const booksSnapshot = await dbClient.collection('books').get();
   const books = await Promise.all(
      booksSnapshot.docs.map(async (doc) => {
         const book = {
            id: doc.id,
            coverURL: NO_IMAGE,
            ...doc.data(),
         };

         try {
            book.coverURL = await storageRef
               .child(`bookCovers/${doc.id}.png`)
               .getDownloadURL();
         } catch (error) {
            book.coverURL = NO_IMAGE;
         }

         return book;
      })
   );
   return books as Book[];
});
