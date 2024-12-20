import { Box, Container } from '@mui/material';
import StockManagement from '../components/stock/StockManagement';

function StockPage() {
  return (
    <Container maxWidth="lg">
      <Box
        sx={{
          marginTop: 4,
          marginBottom: 4,
          display: 'flex',
          flexDirection: 'column',
          minHeight: 'calc(100vh - 64px)', // 상단 AppBar 높이(64px)를 고려한 전체 높이
        }}
      >
        <StockManagement />
      </Box>
    </Container>
  );
}

export default StockPage;
