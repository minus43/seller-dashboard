import {
  Paper,
  TextField,
  Button,
  Typography,
  Box,
  Link,
  Container,
} from '@mui/material';

function SignIn() {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('로그인 시도');
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
        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="email"
            label="아이디"
            name="email"
            autoComplete="email"
            autoFocus
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="password"
            label="비밀번호"
            type="password"
            id="password"
            autoComplete="current-password"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            로그인
          </Button>
          <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
            <Link href="#" variant="body2">
              아이디 찾기
            </Link>
            <Link href="#" variant="body2">
              비밀번호 찾기
            </Link>
            <Link href="/signup" variant="body2">
              회원가입
            </Link>
          </Box>
        </Box>
      </Box>
    </Container>
  );
}

export default SignIn;
