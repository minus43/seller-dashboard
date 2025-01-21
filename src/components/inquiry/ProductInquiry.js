import {
  Box,
  Button,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Chip,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
} from '@mui/material';
import { useState } from 'react';

function ProductInquiry() {
  const [openAnswerDialog, setOpenAnswerDialog] = useState(false);
  const [selectedInquiry, setSelectedInquiry] = useState(null);
  const [inquiries, setInquiries] = useState([
    {
      id: 1,
      productName: '상품A',
      userId: 'user123',
      userName: '김철수',
      content: '배송 관련 문의입니다.',
      date: '2024-03-21',
      status: 'pending',
      answer: '',
    },
    {
      id: 2,
      productName: '상품B',
      userId: 'user456',
      userName: '이영희',
      content: '상품 상태 문의입니다.',
      date: '2024-03-22',
      status: 'completed',
      answer: '정상 상품입니다.',
      answeredAt: '2024-03-22',
    },
  ]);

  const handleOpenAnswerDialog = (inquiry) => {
    setSelectedInquiry(inquiry);
    setOpenAnswerDialog(true);
  };

  const handleCloseAnswerDialog = () => {
    setOpenAnswerDialog(false);
    setSelectedInquiry(null);
  };

  const handleAnswerSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const answer = formData.get('answer');

    setInquiries(
      inquiries.map((inquiry) =>
        inquiry.id === selectedInquiry.id
          ? {
              ...inquiry,
              answer,
              status: 'completed',
              answeredAt: new Date().toISOString().split('T')[0],
            }
          : inquiry
      )
    );

    handleCloseAnswerDialog();
  };

  const getStatusChip = (status) => {
    switch (status) {
      case 'completed':
        return <Chip label='답변완료' color='success' size='small' />;
      case 'pending':
        return <Chip label='답변대기' color='warning' size='small' />;
      default:
        return <Chip label='답변대기' color='warning' size='small' />;
    }
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Typography variant='h5' component='h2' gutterBottom>
        상품 문의 관리
      </Typography>

      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>상품명</TableCell>
              <TableCell>문의자</TableCell>
              <TableCell>문의내용</TableCell>
              <TableCell>문의일자</TableCell>
              <TableCell>답변상태</TableCell>
              <TableCell>답변일자</TableCell>
              <TableCell align='center'>관리</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {inquiries.map((inquiry) => (
              <TableRow key={inquiry.id}>
                <TableCell>{inquiry.productName}</TableCell>
                <TableCell>{inquiry.userName}</TableCell>
                <TableCell>{inquiry.content}</TableCell>
                <TableCell>{inquiry.date}</TableCell>
                <TableCell>{getStatusChip(inquiry.status)}</TableCell>
                <TableCell>{inquiry.answeredAt || '-'}</TableCell>
                <TableCell align='center'>
                  <Button
                    variant='contained'
                    size='small'
                    onClick={() => handleOpenAnswerDialog(inquiry)}
                  >
                    {inquiry.status === 'completed' ? '답변수정' : '답변하기'}
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      {/* 답변 작성/수정 다이얼로그 */}
      <Dialog
        open={openAnswerDialog}
        onClose={handleCloseAnswerDialog}
        maxWidth='sm'
        fullWidth
      >
        <form onSubmit={handleAnswerSubmit}>
          <DialogTitle>
            {selectedInquiry?.status === 'completed'
              ? '답변 수정'
              : '답변 작성'}
          </DialogTitle>
          <DialogContent>
            <Typography variant='subtitle2' gutterBottom sx={{ mt: 2 }}>
              문의 정보
            </Typography>
            <Typography variant='body2'>
              상품명: {selectedInquiry?.productName}
            </Typography>
            <Typography variant='body2'>
              문의자: {selectedInquiry?.userName}
            </Typography>
            <Typography variant='body2' paragraph>
              문의일자: {selectedInquiry?.date}
            </Typography>
            <Typography variant='subtitle2' gutterBottom>
              문의 내용
            </Typography>
            <Typography variant='body2' paragraph>
              {selectedInquiry?.content}
            </Typography>
            <TextField
              autoFocus
              margin='dense'
              name='answer'
              label='답변 내용'
              multiline
              rows={4}
              fullWidth
              required
              defaultValue={selectedInquiry?.answer}
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={handleCloseAnswerDialog}>취소</Button>
            <Button type='submit' variant='contained'>
              {selectedInquiry?.status === 'completed' ? '수정' : '등록'}
            </Button>
          </DialogActions>
        </form>
      </Dialog>
    </Box>
  );
}

export default ProductInquiry;
