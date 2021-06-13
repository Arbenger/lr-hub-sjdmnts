import withLayout from 'components/HOC/withLayout';
import Home from 'components/pages/Home';

export default withLayout(Home, {
   pageName: 'home',
   pageTitle: 'Home',
});
