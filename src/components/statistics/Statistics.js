import {
  Grid,
  Typography,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  Card,
  CardContent,
  Box,
} from '@mui/material';
import { useState } from 'react';

function Statistics() {
  const currentYear = new Date().getFullYear();
  const currentMonth = new Date().getMonth() + 1;

  const [selectedYear, setSelectedYear] = useState(currentYear);
  const [selectedMonth, setSelectedMonth] = useState(currentMonth);

  const [monthlyStats] = useState({
    2024: {
      1: { sales: 1234567, orders: 123 },
      2: { sales: 2345678, orders: 234 },
      3: { sales: 3456789, orders: 345 },
      4: { sales: 4567890, orders: 456 },
      5: { sales: 5678901, orders: 567 },
      6: { sales: 6789012, orders: 678 },
      7: { sales: 7890123, orders: 789 },
      8: { sales: 8901234, orders: 890 },
      9: { sales: 9012345, orders: 901 },
      10: { sales: 1123456, orders: 112 },
      11: { sales: 2234567, orders: 223 },
      12: { sales: 3345678, orders: 334 },
    },
    2023: {
      1: { sales: 1000000, orders: 100 },
      2: { sales: 2000000, orders: 200 },
      3: { sales: 3000000, orders: 300 },
      4: { sales: 4000000, orders: 400 },
      5: { sales: 5000000, orders: 500 },
      6: { sales: 6000000, orders: 600 },
      7: { sales: 7000000, orders: 700 },
      8: { sales: 8000000, orders: 800 },
      9: { sales: 9000000, orders: 900 },
      10: { sales: 1100000, orders: 110 },
      11: { sales: 2200000, orders: 220 },
      12: { sales: 3300000, orders: 330 },
    },
  });

  const handleYearChange = (event) => {
    setSelectedYear(event.target.value);
  };

  const handleMonthChange = (event) => {
    setSelectedMonth(event.target.value);
  };

  const stats = monthlyStats[selectedYear]?.[selectedMonth] || {
    sales: 0,
    orders: 0,
  };

  return (
    <div>
      <Typography variant='h4' gutterBottom>
        월간 매출 통계
      </Typography>

      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Box sx={{ display: 'flex', gap: 2 }}>
            <FormControl sx={{ minWidth: 120 }}>
              <InputLabel>연도</InputLabel>
              <Select
                value={selectedYear}
                label='연도'
                onChange={handleYearChange}
              >
                <MenuItem value={2023}>2023년</MenuItem>
                <MenuItem value={2024}>2024년</MenuItem>
              </Select>
            </FormControl>

            <FormControl sx={{ minWidth: 120 }}>
              <InputLabel>월</InputLabel>
              <Select
                value={selectedMonth}
                label='월'
                onChange={handleMonthChange}
              >
                {Array.from({ length: 12 }, (_, i) => i + 1).map((month) => (
                  <MenuItem key={month} value={month}>
                    {month}월
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Box>
        </Grid>

        <Grid item xs={12} md={6}>
          <Card>
            <CardContent>
              <Typography color='textSecondary' gutterBottom>
                {selectedYear}년 {selectedMonth}월 총 매출
              </Typography>
              <Typography variant='h4'>
                ₩{stats.sales.toLocaleString()}
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} md={6}>
          <Card>
            <CardContent>
              <Typography color='textSecondary' gutterBottom>
                {selectedYear}년 {selectedMonth}월 총 주문수
              </Typography>
              <Typography variant='h4'>
                {stats.orders.toLocaleString()}건
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </div>
  );
}

export default Statistics;
