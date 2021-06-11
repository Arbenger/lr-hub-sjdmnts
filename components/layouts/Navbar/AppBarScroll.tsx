import { useScrollTrigger } from '@material-ui/core';
import { cloneElement, ReactElement } from 'react';

interface AppBarScrollProps {
   children: ReactElement;
}

const AppBarScroll = ({ children }: AppBarScrollProps) => {
   const trigger = useScrollTrigger({
      disableHysteresis: true,
      threshold: 10,
   });
   return cloneElement(children, {
      elevation: trigger ? 4 : 0,
      'data-reached-threshold': trigger,
   });
};

export default AppBarScroll;
