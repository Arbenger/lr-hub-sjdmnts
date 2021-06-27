import Bookmarks from 'components/pages/book/Bookmarks';
import getServerSidePropsUserAuth from 'utils/getServerSidePropsUserAuth';

export const getServerSideProps = getServerSidePropsUserAuth;

export default Bookmarks;
