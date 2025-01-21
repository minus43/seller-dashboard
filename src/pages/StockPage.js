import { Box } from '@mui/material';
import StockManagement from '../components/stock/StockManagement';

function StockPage() {
  return (
    <Box
      component='main'
      sx={{
        flexGrow: 1,
        height: '100%',
        overflow: 'auto',
        padding: 3,
        backgroundColor: (theme) => theme.palette.grey[100],
      }}
    >
      <StockManagement />
    </Box>
  );
}

export default StockPage;
