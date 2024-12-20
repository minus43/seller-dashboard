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
import AddIcon from '@mui/icons-material/Add';

function AdManagement() {
  return (
    <div>
      <Typography variant="h4" gutterBottom>
        광고 관리
      </Typography>

      <Button
        variant="contained"
        startIcon={<AddIcon />}
        sx={{ mb: 3 }}
        onClick={() => console.log('새 광고 요청')}
      >
        새 광고 요청
      </Button>

      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>광고명</TableCell>
              <TableCell>시작일</TableCell>
              <TableCell>종료일</TableCell>
              <TableCell>상태</TableCell>
              <TableCell align="center">관리</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell>봄맞이 할인 광고</TableCell>
              <TableCell>2024-03-01</TableCell>
              <TableCell>2024-03-31</TableCell>
              <TableCell>
                <Chip label="진행중" color="success" size="small" />
              </TableCell>
              <TableCell align="center">
                <Button
                  variant="outlined"
                  size="small"
                  onClick={() => console.log('광고 상세보기')}
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

export default AdManagement;
