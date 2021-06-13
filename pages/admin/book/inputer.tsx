import withLayout from 'components/HOC/withLayout';
import BookInputer from 'components/pages/admin/book/BookInputer';

export default withLayout(BookInputer, {
   pageName: 'book-inputer',
   pageTitle: 'Book Inputer',
});
