import { Typography } from '@material-ui/core';
import { ColumnTwoContainer } from '../styled';
import Link from 'next/link';

export default function ColumnTwo() {
   const items = [
      {
         title: 'Home',
         link: '/',
      },
      {
         title: 'Dashboard',
         link: '/dashboard',
      },
      {
         title: 'Library',
         link: '/book/library',
      },
      {
         title: 'Account',
         link: '/account',
      },
   ];

   return (
      <ColumnTwoContainer>
         <Typography>SITEMAP</Typography>
         <ul>
            {items.map((item) => (
               <Link href={item.link} key={item.title}>
                  <li>{item.title}</li>
               </Link>
            ))}
         </ul>
      </ColumnTwoContainer>
   );
}
