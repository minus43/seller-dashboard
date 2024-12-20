import { Box, TextField, Button, Typography, Container, Link } from '@mui/material';
import { useNavigate } from 'react-router-dom';

function SignInPage() {
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate('/stock');
  };

  return (
    <Container component="main" maxWidth="xs">
      <Box
        sx={{
          marginTop: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Typography component="h1" variant="h5">
          로그인
        </Typography>
        <Box sx={{ mt: 1 }}>
          <TextField
            margin="normal"
            fullWidth
            id="id"
            label="아이디"
            name="id"
            autoFocus
          />
          <TextField
            margin="normal"
            fullWidth
            name="password"
            label="비밀번호"
            type="password"
            id="password"
            autoComplete="current-password"
          />
          <Button
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
            onClick={handleLogin}
          >
            로그인
          </Button>
          <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
            <Link href="#" variant="body2" onClick={() => navigate('/find-id')}>
              아이디 찾기
            </Link>
            <Link href="#" variant="body2" onClick={() => navigate('/find-password')}>
              비밀번호 찾기
            </Link>
            <Link href="#" variant="body2" onClick={() => navigate('/signup')}>
              회원가입
            </Link>
          </Box>
        </Box>
      </Box>
    </Container>
  );
}

export default SignInPage;
