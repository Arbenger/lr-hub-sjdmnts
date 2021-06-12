import type { NextApiRequest, NextApiResponse } from 'next';
import {
   SortBy,
   SortDirection,
   FilterBy,
   Book,
} from 'redux/slices/library/types';
import { db } from 'firebase/admin';
import { mapAsync } from 'lodasync';
import _ from 'lodash';

interface NextApiRequestCustom extends NextApiRequest {
   query: {
      sortBy: SortBy;
      sortDirection: SortDirection;
      filterBy: FilterBy;
      searchInput: string;
      secretAPIAccessKey: string;
   };
}

export function filterDocsBySearchInput(
   searchInput: string,
   docs: Array<FirebaseFirestore.QueryDocumentSnapshot>
) {
   return searchInput
      ? docs.filter((doc) => {
           const { title } = doc.data();
           const isMatched = title.toLowerCase().indexOf(searchInput) > -1;
           return isMatched;
        })
      : docs;
}

export function filterBookBySort(
   sortBy: SortBy,
   sortDirection: SortDirection,
   books: Array<Book>
) {
   if (sortBy === 'availableCopies') {
      return _.orderBy(books, (book) => book.copies.available, [sortDirection]);
   } else {
      return _.orderBy(books, (book) => book[sortBy], [sortDirection]);
   }
}

export default async (req: NextApiRequestCustom, res: NextApiResponse) => {
   try {
      if (req.query.secretAPIAccessKey !== process.env.secretAPIAccessKey)
         throw { message: 'Secret API Access Key did not match.' };

      const { sortBy, sortDirection, searchInput } = req.query;

      const booksRef = db.collection('books');
      const booksSnapshot = await booksRef.get();

      let filtered = [];

      filtered = filterDocsBySearchInput(searchInput, booksSnapshot.docs);

      filtered = await mapAsync(
         async (doc: FirebaseFirestore.QueryDocumentSnapshot) => {
            const { id } = doc;
            const { title, description } = doc.data();

            const copiesRef = booksRef.doc(doc.id).collection('copies');
            const copiesSnapshot = await copiesRef.get();
            const copies = {
               available: copiesSnapshot.docs.length,
            };

            return {
               id,
               title,
               description,
               copies,
            };
         },
         filtered
      );

      filtered = filterBookBySort(sortBy, sortDirection, filtered);

      res.status(200).json({
         status: 'success',
         books: filtered,
      });
   } catch (error) {
      res.end(JSON.stringify({ ...error, status: 'failure' }));
   }
};
