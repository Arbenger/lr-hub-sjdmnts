import PendingRequests from 'components/pages/account/PendingRequests';
import getServerSidePropsUserAuth from 'utils/getServerSidePropsUserAuth';

export const getServerSideProps = getServerSidePropsUserAuth;

export default PendingRequests;
