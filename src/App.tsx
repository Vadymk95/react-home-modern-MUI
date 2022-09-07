import { FC } from 'react';
import { AppRouter } from './router/AppRouter';
import { Navbar } from './components';
import { Box } from '@mui/material';

const App: FC = () => (
  <Box sx={{ backgroundColor: '#000' }}>
    <Navbar />
    <AppRouter />
  </Box>
);

export default App;
