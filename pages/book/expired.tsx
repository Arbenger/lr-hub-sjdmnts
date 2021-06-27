import ExpiredBooks from 'components/pages/book/Expired';
import getServerSidePropsUserAuth from 'utils/getServerSidePropsUserAuth';

export const getServerSideProps = getServerSidePropsUserAuth;

export default ExpiredBooks;
