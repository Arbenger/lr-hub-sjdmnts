import { Paper, Box, useTheme, Typography } from '@material-ui/core';
import dynamic from 'next/dynamic';

const StatisticsChart = dynamic(() => import('./components/StatisticsChart'), {
   ssr: false,
});

export default function FeatureTwo() {
   const { breakpoints } = useTheme();
   return (
      <Paper>
         <Box overflow="auto">
            <Box
               padding={2}
               paddingTop={1}
               paddingBottom={0}
               minWidth={breakpoints.values.sm}
            >
               <Typography variant="h6">Statistics</Typography>
               <StatisticsChart />
            </Box>
         </Box>
      </Paper>
   );
}
