import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Button,
  Typography,
  Chip,
} from '@mui/material';
import AddCommentIcon from '@mui/icons-material/AddComment';

function ProductInquiry() {
  return (
    <div>
      <Typography variant="h4" gutterBottom>
        상품문의 내역
      </Typography>

      <Button
        variant="contained"
        startIcon={<AddCommentIcon />}
        sx={{ mb: 3 }}
        onClick={() => console.log('문의하기')}
      >
        문의하기
      </Button>

      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>상품명</TableCell>
              <TableCell>문의내용</TableCell>
              <TableCell>작성일</TableCell>
              <TableCell>답변상태</TableCell>
              <TableCell align="center">관리</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell>상품A</TableCell>
              <TableCell>배송 관련 문의입니다.</TableCell>
              <TableCell>2024-03-21</TableCell>
              <TableCell>
                <Chip label="답변대기" color="warning" size="small" />
              </TableCell>
              <TableCell align="center">
                <Button
                  variant="outlined"
                  size="small"
                  onClick={() => console.log('상세보기')}
                >
                  상세보기
                </Button>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}

export default ProductInquiry;
