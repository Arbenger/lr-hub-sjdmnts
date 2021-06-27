import Dashboard from 'components/pages/account/Dashboard';
import getServerSidePropsUserAuth from 'utils/getServerSidePropsUserAuth';

export const getServerSideProps = getServerSidePropsUserAuth;

export default Dashboard;
