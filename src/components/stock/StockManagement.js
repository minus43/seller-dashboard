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
  IconButton,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
} from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { useState } from 'react';

function StockManagement() {
  const [openDialog, setOpenDialog] = useState(false);
  const [isEdit, setIsEdit] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [products, setProducts] = useState([
    { id: 1, name: '상품1', price: 10000, stock: 100 },
    { id: 2, name: '상품2', price: 20000, stock: 50 },
  ]);

  const handleOpenDialog = (product = null) => {
    setSelectedProduct(product);
    setIsEdit(!!product);
    setOpenDialog(true);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
    setSelectedProduct(null);
    setIsEdit(false);
  };

  const handleSave = (event) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const newProduct = {
      name: formData.get('name'),
      price: Number(formData.get('price')),
      stock: Number(formData.get('stock')),
    };

    if (isEdit && selectedProduct) {
      // 수정
      setProducts(
        products.map((p) =>
          p.id === selectedProduct.id ? { ...p, ...newProduct } : p
        )
      );
    } else {
      // 추가
      setProducts([...products, { ...newProduct, id: Date.now() }]);
    }

    handleCloseDialog();
  };

  const handleDelete = (productId) => {
    if (window.confirm('정말 삭제하시겠습니까?')) {
      setProducts(products.filter((p) => p.id !== productId));
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
          flexDirection: { xs: 'column', sm: 'row' },
          gap: { xs: 2, sm: 0 },
          width: '100%',
        }}
      >
        <Typography variant='h5' component='h2'>
          상품 관리
        </Typography>
        <Button variant='contained' onClick={() => handleOpenDialog()}>
          상품 등록
        </Button>
      </Box>

      <TableContainer
        component={Paper}
        sx={{
          width: '100%',
          overflowX: 'auto',
          boxShadow: (theme) => theme.shadows[2],
        }}
      >
        <Table sx={{ width: '100%' }}>
          <TableHead>
            <TableRow>
              <TableCell
                sx={{
                  whiteSpace: 'nowrap',
                  fontWeight: 'bold',
                  backgroundColor: (theme) => theme.palette.grey[100],
                  width: '40%',
                }}
              >
                상품명
              </TableCell>
              <TableCell
                align='right'
                sx={{
                  whiteSpace: 'nowrap',
                  fontWeight: 'bold',
                  backgroundColor: (theme) => theme.palette.grey[100],
                  width: '20%',
                }}
              >
                가격
              </TableCell>
              <TableCell
                align='right'
                sx={{
                  whiteSpace: 'nowrap',
                  fontWeight: 'bold',
                  backgroundColor: (theme) => theme.palette.grey[100],
                  width: '20%',
                }}
              >
                재고
              </TableCell>
              <TableCell
                align='center'
                sx={{
                  whiteSpace: 'nowrap',
                  fontWeight: 'bold',
                  backgroundColor: (theme) => theme.palette.grey[100],
                  width: '20%',
                }}
              >
                관리
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {products.map((product) => (
              <TableRow
                key={product.id}
                hover
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell
                  component='th'
                  scope='row'
                  sx={{ whiteSpace: 'normal' }}
                >
                  {product.name}
                </TableCell>
                <TableCell align='right' sx={{ whiteSpace: 'nowrap' }}>
                  {product.price.toLocaleString()}원
                </TableCell>
                <TableCell align='right' sx={{ whiteSpace: 'nowrap' }}>
                  {product.stock.toLocaleString()}
                </TableCell>
                <TableCell align='center' sx={{ whiteSpace: 'nowrap' }}>
                  <IconButton
                    color='primary'
                    size='small'
                    onClick={() => handleOpenDialog(product)}
                  >
                    <EditIcon />
                  </IconButton>
                  <IconButton
                    color='error'
                    size='small'
                    onClick={() => handleDelete(product.id)}
                  >
                    <DeleteIcon />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      {/* 상품 등록/수정 다이얼로그 */}
      <Dialog open={openDialog} onClose={handleCloseDialog}>
        <form onSubmit={handleSave}>
          <DialogTitle>{isEdit ? '상품 수정' : '상품 등록'}</DialogTitle>
          <DialogContent>
            <TextField
              autoFocus
              margin='dense'
              name='name'
              label='상품명'
              type='text'
              fullWidth
              defaultValue={selectedProduct?.name || ''}
              required
            />
            <TextField
              margin='dense'
              name='price'
              label='가격'
              type='number'
              fullWidth
              defaultValue={selectedProduct?.price || ''}
              required
            />
            <TextField
              margin='dense'
              name='stock'
              label='재고'
              type='number'
              fullWidth
              defaultValue={selectedProduct?.stock || ''}
              required
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={handleCloseDialog}>취소</Button>
            <Button type='submit' variant='contained'>
              {isEdit ? '수정' : '등록'}
            </Button>
          </DialogActions>
        </form>
      </Dialog>
    </Box>
  );
}

export default StockManagement;
