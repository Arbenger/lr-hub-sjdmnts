import checkAuth from 'utils/firestore/checkAuth';
import withLayout from 'components/HOC/withLayout';
import BookSummary from 'components/pages/book/Summary';

export const getServerSideProps = checkAuth;

export default withLayout(BookSummary, {
   pageName: 'book-summary',
   pageTitle: 'Book Summary',
});
