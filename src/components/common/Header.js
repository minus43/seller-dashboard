import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material';
import LogoutIcon from '@mui/icons-material/Logout';
import { useNavigate } from 'react-router-dom';

function Header() {
  const navigate = useNavigate();

  const handleLogout = () => {
    // 여기에 로그아웃 로직 추가 (예: 토큰 제거 등)
    navigate('/'); // 로그인 페이지로 이동
  };

  return (
    <AppBar
      position='relative'
      sx={{
        zIndex: (theme) => theme.zIndex.drawer + 1,
        backgroundColor: '#1976d2',
        boxShadow: 'none',
        borderBottom: 1,
        borderColor: 'divider',
      }}
    >
      <Toolbar>
        <Typography
          variant='h6'
          component='div'
          sx={{
            flexGrow: 1,
            cursor: 'pointer',
          }}
          onClick={() => navigate('/statistics')}
        >
          판매자 대시보드
        </Typography>
        <Box>
          <Button
            color='inherit'
            onClick={handleLogout}
            startIcon={<LogoutIcon />}
          >
            로그아웃
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
