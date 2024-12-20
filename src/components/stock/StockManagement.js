import { Box, Button, Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, IconButton } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

function StockManagement() {
  return (
    <Box>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
        <Typography variant="h5" component="h2">
          상품 관리
        </Typography>
        <Button
          variant="contained"
          onClick={() => {
            // 상품 추가 로직
            console.log('상품 추가');
          }}
        >
          상품 등록
        </Button>
      </Box>

      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>상품명</TableCell>
              <TableCell align="right">가격</TableCell>
              <TableCell align="right">재고</TableCell>
              <TableCell align="center">관리</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {/* 예시 데이터 */}
            <TableRow>
              <TableCell component="th" scope="row">상품1</TableCell>
              <TableCell align="right">10,000원</TableCell>
              <TableCell align="right">100</TableCell>
              <TableCell align="center">
                <IconButton
                  color="primary"
                  onClick={() => {
                    // 상품 수정 로직
                    console.log('상품 수정');
                  }}
                >
                  <EditIcon />
                </IconButton>
                <IconButton
                  color="error"
                  onClick={() => {
                    // 상품 삭제 로직
                    console.log('상품 삭제');
                  }}
                >
                  <DeleteIcon />
                </IconButton>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
}

export default StockManagement;
