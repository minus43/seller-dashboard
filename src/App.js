import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { Box, CssBaseline } from '@mui/material';
import Header from './components/common/Header';
import Sidebar from './components/common/Sidebar';
import StockPage from './pages/StockPage';
import AdPage from './pages/AdPage';
import InquiryPage from './pages/InquiryPage';
import StatisticsPage from './pages/StatisticsPage';
import SignInPage from './pages/SignInPage';
import SignUpPage from './pages/SignUpPage';
import FindIdPage from './pages/FindIdPage';
import FindPasswordPage from './pages/FindPasswordPage';

const theme = createTheme({
  palette: {
    primary: {
      main: '#1976d2',
    },
    secondary: {
      main: '#dc004e',
    },
    background: {
      default: '#f5f5f5'
    }
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
          <Routes>
            <Route path="/" element={<SignInPage />} />
            <Route path="/signup" element={<SignUpPage />} />
            <Route path="/find-id" element={<FindIdPage />} />
            <Route path="/find-password" element={<FindPasswordPage />} />
            <Route
              path="/*"
              element={
                <>
                  <Header />
                  <Box sx={{ display: 'flex', flex: 1 }}>
                    <Box 
                      sx={{ 
                        width: 240, 
                        backgroundColor: 'white',
                        borderRight: 1,
                        borderColor: 'divider'
                      }}
                    >
                      <Sidebar />
                    </Box>
                    <Box 
                      component="main" 
                      sx={{ 
                        flexGrow: 1,
                        p: 3,
                        backgroundColor: 'background.default'
                      }}
                    >
                      <Routes>
                        <Route path="/stock" element={<StockPage />} />
                        <Route path="/ad" element={<AdPage />} />
                        <Route path="/inquiry" element={<InquiryPage />} />
                        <Route path="/statistics" element={<StatisticsPage />} />
                      </Routes>
                    </Box>
                  </Box>
                </>
              }
            />
          </Routes>
        </Box>
      </Router>
    </ThemeProvider>
  );
}

export default App;
