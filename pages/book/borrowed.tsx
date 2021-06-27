import BorrowedBooks from 'components/pages/book/Borrowed';
import getServerSidePropsUserAuth from 'utils/getServerSidePropsUserAuth';

export const getServerSideProps = getServerSidePropsUserAuth;

export default BorrowedBooks;
