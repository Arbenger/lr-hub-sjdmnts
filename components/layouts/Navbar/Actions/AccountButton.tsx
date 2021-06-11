import { Box } from '@material-ui/core';
import useAuth from 'firebase/useAuth';
import Image from 'next/image';
import Link from 'next/link';

export default function AccountButton() {
   const auth = useAuth();

   const getPhotoURL = () => {
      try {
         return auth.user.photoURL || '/images/no-profile-picture.png';
      } catch (error) {
         return '/images/no-profile-picture.png';
      }
   };

   return (
      <Link href="/account">
         <Box
            width={35}
            height={35}
            borderRadius="50%"
            overflow="hidden"
            style={{ cursor: 'pointer' }}
         >
            <Image
               width={35}
               height={35}
               objectFit="cover"
               src={getPhotoURL()}
            />
         </Box>
      </Link>
   );
}
