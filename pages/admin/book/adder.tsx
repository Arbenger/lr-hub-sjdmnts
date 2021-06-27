import BookAdder from 'components/pages/admin/book/BookAdder';
import getServerSidePropsAdminAuth from 'utils/getServerSidePropsAdminAuth';

export const getServerSideProps = getServerSidePropsAdminAuth;

export default BookAdder;
