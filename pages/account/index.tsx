import Account from 'components/pages/account/Account';
import getServerSidePropsUserAuth from 'utils/getServerSidePropsUserAuth';

export const getServerSideProps = getServerSidePropsUserAuth;

export default Account;
