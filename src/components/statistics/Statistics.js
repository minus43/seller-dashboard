import {
  Paper,
  Grid,
  Typography,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  Card,
  CardContent,
} from '@mui/material';

function Statistics() {
  return (
    <div>
      <Typography variant='h4' gutterBottom>
        매출 통계
      </Typography>

      <Grid container spacing={3}>
        <Grid item xs={12}>
          <FormControl sx={{ minWidth: 200 }}>
            <InputLabel>기간 선택</InputLabel>
            <Select
              value='daily'
              label='기간 선택'
              onChange={(e) => console.log(e.target.value)}
            >
              <MenuItem value='daily'>일간</MenuItem>
              <MenuItem value='weekly'>주간</MenuItem>
              <MenuItem value='monthly'>월간</MenuItem>
              <MenuItem value='yearly'>연간</MenuItem>
            </Select>
          </FormControl>
        </Grid>

        <Grid item xs={12} md={6}>
          <Card>
            <CardContent>
              <Typography color='textSecondary' gutterBottom>
                총 매출
              </Typography>
              <Typography variant='h4'>₩1,234,567</Typography>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} md={6}>
          <Card>
            <CardContent>
              <Typography color='textSecondary' gutterBottom>
                총 주문수
              </Typography>
              <Typography variant='h4'>123건</Typography>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12}>
          <Paper sx={{ p: 2 }}>
            <Typography variant='h6' gutterBottom>
              매출 추이
            </Typography>
            <div style={{ height: 300, width: '100%' }}>
              {/* 차트가 들어갈 자리 */}
              <Typography color='textSecondary' align='center'>
                차트 영역
              </Typography>
            </div>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}

export default Statistics;
