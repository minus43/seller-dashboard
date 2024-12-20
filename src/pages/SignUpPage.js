import { Box, TextField, Button, Typography, Container, Divider, Dialog, DialogTitle, DialogContent, DialogActions } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

function SignUpPage() {
  const navigate = useNavigate();
  const [fileName, setFileName] = useState('');
  const [openDialog, setOpenDialog] = useState(false);

  const handleSignUp = () => {
    setOpenDialog(true);
  };

  const handleDialogClose = () => {
    setOpenDialog(false);
    navigate('/');  // 로그인 페이지로 이동
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setFileName(file.name);
    }
  };

  return (
    <Container component="main" maxWidth="xs">
      <Box sx={{ marginTop: 8, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <Typography component="h1" variant="h5">
          판매자 회원가입
        </Typography>
        <Box sx={{ mt: 3, width: '100%' }}>
          <Typography variant="subtitle1" sx={{ mb: 2 }}>
            기본 정보
          </Typography>
          <TextField
            margin="normal"
            required
            fullWidth
            id="id"
            label="아이디"
            name="id"
            autoFocus
          />
          <TextField
            margin="normal"
            required
            fullWidth
            id="email"
            label="이메일"
            name="email"
            autoComplete="email"
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="password"
            label="비밀번호"
            type="password"
            id="password"
            autoComplete="new-password"
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="passwordConfirm"
            label="비밀번호 확인"
            type="password"
            id="passwordConfirm"
            autoComplete="new-password"
          />
          
          <Divider sx={{ my: 3 }} />
          
          <Typography variant="subtitle1" sx={{ mb: 2 }}>
            판매자 정보
          </Typography>
          <TextField
            margin="normal"
            required
            fullWidth
            name="storeName"
            label="스토어 이름"
            id="storeName"
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="businessNumber"
            label="사업자 등록번호"
            id="businessNumber"
            placeholder="000-00-00000"
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="representativeName"
            label="대표자명"
            id="representativeName"
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="phoneNumber"
            label="연락처"
            id="phoneNumber"
            placeholder="010-0000-0000"
          />
          
          <Typography variant="subtitle2" sx={{ mt: 2, mb: 1 }}>
            사업자 등록증 첨부
          </Typography>
          <Box 
            sx={{ 
              border: '2px dashed #ccc',
              borderRadius: 1,
              p: 3,
              backgroundColor: '#fafafa',
              textAlign: 'center',
              cursor: 'pointer',
              '&:hover': {
                borderColor: '#999'
              }
            }}
            onClick={() => document.getElementById('file-input').click()}
          >
            <input
              id="file-input"
              type="file"
              accept="image/*,.pdf"
              onChange={handleFileChange}
              style={{ display: 'none' }}
            />
            <Typography variant="body1" sx={{ mb: 1 }}>
              클릭하여 파일을 업로드하세요
            </Typography>
            <Typography variant="body2" color="text.secondary">
              지원 형식: PDF, 이미지 파일
            </Typography>
            {fileName && (
              <Typography variant="body2" sx={{ mt: 2, color: 'primary.main' }}>
                선택된 파일: {fileName}
              </Typography>
            )}
          </Box>

          <Button
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
            onClick={handleSignUp}
          >
            가입하기
          </Button>
          <Button
            fullWidth
            variant="text"
            onClick={() => navigate('/')}
          >
            로그인으로 돌아가기
          </Button>
        </Box>
      </Box>

      {/* 회원가입 완료 다이얼로그 */}
      <Dialog
        open={openDialog}
        onClose={handleDialogClose}
        aria-labelledby="signup-dialog-title"
      >
        <DialogTitle id="signup-dialog-title">
          회원가입 신청 완료
        </DialogTitle>
        <DialogContent>
          <Typography>
            회원가입 신청이 완료되었습니다.
            관리자 승인 후 로그인이 가능합니다.
            승인 결과는 입력하신 이메일로 발송됩니다.
          </Typography>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleDialogClose} variant="contained">
            확인
          </Button>
        </DialogActions>
      </Dialog>
    </Container>
  );
}

export default SignUpPage;
