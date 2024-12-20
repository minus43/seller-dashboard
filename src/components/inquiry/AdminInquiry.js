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

function AdminInquiry() {
  return (
    <div>
      <Typography variant='h4' gutterBottom>
        1:1 문의 관리
      </Typography>

      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>문의자</TableCell>
              <TableCell>문의유형</TableCell>
              <TableCell>문의내용</TableCell>
              <TableCell>작성일</TableCell>
              <TableCell>답변상태</TableCell>
              <TableCell align='center'>관리</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell>user123</TableCell>
              <TableCell>상품문의</TableCell>
              <TableCell>배송 관련 문의입니다.</TableCell>
              <TableCell>2024-03-21</TableCell>
              <TableCell>
                <Chip label='답변대기' color='warning' size='small' />
              </TableCell>
              <TableCell align='center'>
                <Button
                  variant='contained'
                  color='primary'
                  size='small'
                  onClick={() => console.log('답변하기')}
                >
                  답변하기
                </Button>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}

export default AdminInquiry;
