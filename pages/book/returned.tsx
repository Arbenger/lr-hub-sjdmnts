import ReturnedBooks from 'components/pages/book/Returned';
import getServerSidePropsUserAuth from 'utils/getServerSidePropsUserAuth';

export const getServerSideProps = getServerSidePropsUserAuth;

export default ReturnedBooks;
