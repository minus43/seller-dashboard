import { Box } from '@mui/material';
import ProductInquiry from '../components/inquiry/ProductInquiry';

function InquiryPage() {
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
      <ProductInquiry />
    </Box>
  );
}

export default InquiryPage;
