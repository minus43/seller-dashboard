import {
  Box,
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
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
} from '@mui/material';
import { useState } from 'react';
import AddIcon from '@mui/icons-material/Add';

function AdManagement() {
  const [openDialog, setOpenDialog] = useState(false);
  const [selectedAd, setSelectedAd] = useState(null);
  const [ads, setAds] = useState([
    {
      id: 1,
      productName: '프리미엄 원목 식탁',
      title: '봄맞이 신상품 홍보',
      content: '봄 시즌 맞이 신상품 출시 기념 프로모션 진행',
      startDate: '2024-03-01',
      endDate: '2024-03-31',
      status: 'active',
    },
    {
      id: 2,
      productName: '모던 4인용 소파',
      title: '할인 프로모션',
      content: '인기 상품 특별 할인 프로모션',
      startDate: '2024-04-01',
      endDate: '2024-04-30',
      status: 'pending',
    },
    {
      id: 3,
      productName: '북유럽 스타일 의자',
      title: '신제품 출시 기념 광고',
      content: '신제품 출시 기념 할인 행사',
      startDate: '2024-02-01',
      endDate: '2024-02-28',
      status: 'completed',
    },
    {
      id: 4,
      productName: '원목 책상',
      title: '재고 할인 광고',
      content: '시즌 오프 특가 세일',
      startDate: '2024-01-01',
      endDate: '2024-01-31',
      status: 'completed',
    },
  ]);

  const handleOpenDialog = (ad = null) => {
    setSelectedAd(ad);
    setOpenDialog(true);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
    setSelectedAd(null);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const newAd = {
      id: selectedAd?.id || Date.now(),
      productName: formData.get('productName'),
      title: formData.get('title'),
      content: formData.get('content'),
      startDate: formData.get('startDate'),
      endDate: formData.get('endDate'),
      status: selectedAd?.status || 'pending',
    };

    if (selectedAd) {
      setAds(ads.map((ad) => (ad.id === selectedAd.id ? newAd : ad)));
    } else {
      setAds([...ads, newAd]);
    }

    handleCloseDialog();
  };

  const getStatusChip = (status) => {
    switch (status) {
      case 'active':
        return <Chip label='진행중' color='success' size='small' />;
      case 'pending':
        return <Chip label='검토중' color='warning' size='small' />;
      case 'completed':
        return (
          <Chip
            label='종료'
            color='default'
            size='small'
            sx={{ backgroundColor: '#e0e0e0' }}
          />
        );
      default:
        return <Chip label='검토중' color='warning' size='small' />;
    }
  };

  const handleDelete = (adId) => {
    if (window.confirm('완료된 광고를 삭제하시겠습니까?')) {
      setAds(ads.filter((ad) => ad.id !== adId));
    }
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          mb: 3,
        }}
      >
        <Typography variant='h4' gutterBottom>
          상품 광고 관리
        </Typography>
        <Button
          variant='contained'
          startIcon={<AddIcon />}
          onClick={() => handleOpenDialog()}
        >
          광고 요청
        </Button>
      </Box>

      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>상품명</TableCell>
              <TableCell>광고 제목</TableCell>
              <TableCell>시작일</TableCell>
              <TableCell>종료일</TableCell>
              <TableCell>상태</TableCell>
              <TableCell align='center'>관리</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {ads.map((ad) => (
              <TableRow
                key={ad.id}
                sx={
                  ad.status === 'completed'
                    ? { backgroundColor: '#fafafa' }
                    : {}
                }
              >
                <TableCell>{ad.productName}</TableCell>
                <TableCell>{ad.title}</TableCell>
                <TableCell>{ad.startDate}</TableCell>
                <TableCell>{ad.endDate}</TableCell>
                <TableCell>{getStatusChip(ad.status)}</TableCell>
                <TableCell align='center'>
                  <Box
                    sx={{ display: 'flex', justifyContent: 'center', gap: 1 }}
                  >
                    <Button
                      variant='outlined'
                      size='small'
                      onClick={() => handleOpenDialog(ad)}
                    >
                      상세보기
                    </Button>
                    {ad.status === 'completed' && (
                      <Button
                        variant='outlined'
                        color='error'
                        size='small'
                        onClick={() => handleDelete(ad.id)}
                      >
                        삭제
                      </Button>
                    )}
                  </Box>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      {/* 광고 등록/수정 다이얼로그 */}
      <Dialog
        open={openDialog}
        onClose={handleCloseDialog}
        maxWidth='sm'
        fullWidth
      >
        <form onSubmit={handleSubmit}>
          <DialogTitle>
            {selectedAd ? '광고 정보 수정' : '새 광고 요청'}
          </DialogTitle>
          <DialogContent>
            <TextField
              margin='dense'
              name='productName'
              label='상품명'
              fullWidth
              required
              defaultValue={selectedAd?.productName}
            />
            <TextField
              margin='dense'
              name='title'
              label='광고 제목'
              fullWidth
              required
              defaultValue={selectedAd?.title}
            />
            <TextField
              margin='dense'
              name='content'
              label='광고 내용'
              multiline
              rows={4}
              fullWidth
              required
              defaultValue={selectedAd?.content}
            />
            <TextField
              margin='dense'
              name='startDate'
              label='시작일'
              type='date'
              fullWidth
              required
              defaultValue={selectedAd?.startDate}
              InputLabelProps={{ shrink: true }}
            />
            <TextField
              margin='dense'
              name='endDate'
              label='종료일'
              type='date'
              fullWidth
              required
              defaultValue={selectedAd?.endDate}
              InputLabelProps={{ shrink: true }}
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={handleCloseDialog}>취소</Button>
            <Button type='submit' variant='contained'>
              {selectedAd ? '수정' : '등록'}
            </Button>
          </DialogActions>
        </form>
      </Dialog>
    </Box>
  );
}

export default AdManagement;
