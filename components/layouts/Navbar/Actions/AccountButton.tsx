import { Box } from '@material-ui/core';
import Image from 'next/image';
import Link from 'next/link';
import { useAppSelector } from 'services/redux/hooks';
import { selectUser } from 'services/redux/selectors';

export default function AccountButton() {
   const { info } = useAppSelector(selectUser);

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
               src={info.photoURL}
            />
         </Box>
      </Link>
   );
}
