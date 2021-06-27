import {
   BOOK_DELETER_URL,
   BOOK_ADDER_URL,
   FULFILLED,
   REJECTED,
} from 'utils/variables';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { UploadCoverPayload, UploadMetaDataPayload } from './types';
import { storageRef } from 'services/firebase/client';
import signToken from 'utils/jwt/signToken';
import axios from 'axios';

export const uploadMetaData = createAsyncThunk<any, UploadMetaDataPayload>(
   'bookAdder/uploadMetaDataStatus',
   async (payload) => {
      const { title, copies, description, dateAdded } = payload;

      const response = await axios({
         url: BOOK_ADDER_URL,
         params: {
            token: signToken({
               title,
               copies,
               description,
               dateAdded,
            }),
         },
      });

      if (response.data.status === REJECTED) {
         await axios({
            url: BOOK_DELETER_URL,
            params: {
               token: signToken({ title }),
            },
         });
      }

      return response.data;
   }
);

export const uploadCover = createAsyncThunk<any, UploadCoverPayload>(
   'bookAdder/uploadCoverStatus',
   async (payload) => {
      try {
         const { id, file } = payload;

         const coverRef = storageRef.child(`bookCovers/${id}.png`);

         const ONE_WEEK = 86400000 * 7;

         await coverRef.put(file, {
            contentType: 'image/png',
            cacheControl: `public,max-age=${ONE_WEEK}`,
         });

         const url = await coverRef.getDownloadURL();

         return { status: FULFILLED, data: { url } };
      } catch (error) {
         return { status: REJECTED, ...error };
      }
   }
);
