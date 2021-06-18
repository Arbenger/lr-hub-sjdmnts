import withLayout from 'components/HOC/withLayout';
import BookInputer from 'components/pages/admin/book/BookInputer';
import checkAuth from 'utils/firestore/checkAuth';

export const getServerSideProps = checkAuth;

export default withLayout(BookInputer, {
   pageName: 'book-inputer',
   pageTitle: 'Book Inputer',
});
