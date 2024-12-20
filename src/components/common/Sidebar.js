import { List, ListItem, ListItemText, ListItemButton } from '@mui/material';
import { useNavigate } from 'react-router-dom';

function Sidebar() {
  const navigate = useNavigate();

  const menuItems = [
    { text: '상품관리', path: '/stock' },
    { text: '광고관리', path: '/ad' },
    { text: '문의내역', path: '/inquiry' },
    { text: '통계', path: '/statistics' }
  ];

  return (
    <List sx={{ pt: 0 }}>
      {menuItems.map((item) => (
        <ListItem key={item.text} disablePadding>
          <ListItemButton 
            onClick={() => navigate(item.path)}
            sx={{ 
              '&:hover': {
                backgroundColor: '#f5f5f5'
              }
            }}
          >
            <ListItemText primary={item.text} />
          </ListItemButton>
        </ListItem>
      ))}
    </List>
  );
}

export default Sidebar;
