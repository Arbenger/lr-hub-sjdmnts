import type { NextApiRequest, NextApiResponse } from "next";
import {
  SortBy,
  SortDirection,
  FilterBy,
  Book,
} from "redux/slices/library/types";
// import { firebaseAdmin } from "firebase/admin";
// import { mapAsync } from "lodasync";
import _ from "lodash";

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

export function filterBookBySearchInput(
  searchInput: string,
  books: Array<Book>
) {
  return searchInput
    ? books.filter((book) => {
        const isMatched = book.title.toLowerCase().indexOf(searchInput) > -1;
        return isMatched;
      })
    : books;
}

export function filterBookBySort(
  sortBy: SortBy,
  sortDirection: SortDirection,
  books: Array<Book>
) {
  if (sortBy === "availableCopies") {
    return _.orderBy(books, (book) => book.copies.available, [sortDirection]);
  } else {
    return _.orderBy(books, (book) => book[sortBy], [sortDirection]);
  }
}

export default async (req: NextApiRequestCustom, res: NextApiResponse) => {
  try {
    if (req.query.secretAPIAccessKey !== process.env.secretAPIAccessKey)
      throw { message: "Secret API Access Key did not match." };

    const { sortBy, sortDirection, searchInput } = req.query;

    // const db = firebaseAdmin.firestore();
    // const booksRef = db.collection("books");
    // const booksSnapshot = await booksRef.get();

    // let filtered = [];

    // filtered = filterDocsBySearchInput(searchInput, booksSnapshot.docs);

    // filtered = await mapAsync(
    //   async (doc: FirebaseFirestore.QueryDocumentSnapshot) => {
    //     const { id } = doc;
    //     const { title, description } = doc.data();

    //     const copiesRef = booksRef.doc(doc.id).collection("copies");
    //     const copiesSnapshot = await copiesRef.get();
    //     const copies = {
    //       available: copiesSnapshot.docs.length,
    //     };

    //     return {
    //       id,
    //       title,
    //       description,
    //       copies,
    //     };
    //   },
    //   filtered
    // );

    let filtered: Book[] = [
      {
        id: "0hWFq61VP7JKGp0ch4CM",
        title: "English for Academic and Professional Purposes",
        description: "There is no description given to this book.",
        copies: {
          available: 20,
        },
      },
      {
        id: "ssdfasdfsdfsddf",
        title: "CONCEPTUAL MATH AND BEYOND BUSINESS MATHEMATICS",
        description: "There is no description given to this book.",
        copies: {
          available: 30,
        },
      },
      {
        id: "ssdfasdfssdsdfsdf",
        title: "FOUNDATION OF PHILOSOPHY",
        description: "There is no description given to this book.",
        copies: {
          available: 40,
        },
      },
      {
        id: "ssdsfasdasdffsdfsdf",
        title: "FILIPINO SA PILING LARANG Tech-Voc",
        description: "There is no description given to this book.",
        copies: {
          available: 50,
        },
      },
      {
        id: "ssdfassdfadfsdfsdf",
        title: "SENIOR HIGH Conceptual Math & Beyond GENERAL MATHEMATICS",
        description: "There is no description given to this book.",
        copies: {
          available: 60,
        },
      },
    ];

    filtered = filterBookBySearchInput(searchInput, filtered);
    filtered = filterBookBySort(sortBy, sortDirection, filtered);

    res.status(200).json({
      status: "success",
      books: filtered,
    });
  } catch (error) {
    res.end(JSON.stringify({ ...error, status: "failure" }));
  }
};
