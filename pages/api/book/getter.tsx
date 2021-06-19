import {
   SortBy,
   SortDirection,
   Book,
} from 'services/redux/slices/library/types';
import { NextApiResponse } from 'next';
import { NextApiRequestWithToken } from 'types';
import { booksRef } from 'services/firebase/admin';
import verifyToken from 'utils/jwt/verifyToken';
import _ from 'lodash';

export function filterDocsBySearchInput(
   searchInput: string,
   docs: Array<FirebaseFirestore.QueryDocumentSnapshot>
) {
   return searchInput
      ? docs.filter((doc) => {
           const { title } = doc.data();
           const isMatched =
              title.toLowerCase().indexOf(searchInput.toLowerCase()) > -1;
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
      return _.orderBy(books, (book) => book.statistics.available, [
         sortDirection,
      ]);
   } else {
      return _.orderBy(books, (book) => book[sortBy], [sortDirection]);
   }
}

export default async (req: NextApiRequestWithToken, res: NextApiResponse) => {
   try {
      const decodedToken = verifyToken(req.query.token);
      const { sortBy, sortDirection, searchInput } = decodedToken;
      const booksSnapshot = await booksRef.get();
      let filtered = [];

      filtered = filterDocsBySearchInput(searchInput, booksSnapshot.docs);
      filtered = await Promise.all(
         filtered.map(async (doc: FirebaseFirestore.QueryDocumentSnapshot) => {
            const { id } = doc;
            const { title, description, statistics } = doc.data();

            return {
               id,
               title,
               description,
               statistics,
            };
         })
      );
      filtered = filterBookBySort(sortBy, sortDirection, filtered);

      res.json({ status: 'fulfilled', payload: filtered });
   } catch (error) {
      res.json({ status: 'rejected', ...error });
   }
};
