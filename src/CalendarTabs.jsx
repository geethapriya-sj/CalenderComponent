import React, { useState } from 'react';
import { Tabs, Tab, Box, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, IconButton, Typography, Card } from '@mui/material';
import { ChevronLeft, ChevronRight } from '@mui/icons-material';

const CalendarTabs = ({ minYear, maxYear }) => {
  const [tabIndex, setTabIndex] = useState(0);
  const [selectedYear, setSelectedYear] = useState(new Date().getFullYear());

  const handleTabChange = (event, newValue) => {
    setTabIndex(newValue);
  };

  const handlePrevYear = () => {
    setSelectedYear((prevYear) => Math.max(prevYear - 1, minYear));
  };

  const handleNextYear = () => {
    setSelectedYear((prevYear) => Math.min(prevYear + 1, maxYear));
  };

  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

  const taskData = [
    { location: 'Market California', status: 'Completed', format: 'Traditional Banking', na: 2, unassigned: 1, incomplete: 0, complete: 1, lateComplete: 1, percentComplete: '100%' },
    // Add more task data as needed
  ];

  return (
    <Box sx={{ width: '100%' }}>
      <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '8px 0', backgroundColor: '#fff' }}>
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <IconButton onClick={handlePrevYear} disabled={selectedYear <= minYear} sx={{ color: 'black' }}>
            <ChevronLeft />
          </IconButton>
          <Typography variant="h6" sx={{ fontWeight: 'bold', color: 'black', marginLeft: '8px' }}>
            {selectedYear - 1}
          </Typography>
        </Box>
        <Typography variant="h6" sx={{ fontWeight: 'bold', color: 'black' }}>
          {selectedYear}
        </Typography>
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <Typography variant="h6" sx={{ fontWeight: 'bold', color: 'black', marginRight: '8px' }}>
            {selectedYear + 1}
          </Typography>
          <IconButton onClick={handleNextYear} disabled={selectedYear >= maxYear} sx={{ color: 'black' }}>
            <ChevronRight />
          </IconButton>
        </Box>
      </Box>

      <Tabs
        value={tabIndex}
        onChange={handleTabChange}
        textColor="primary"
        variant="fullWidth"
        aria-label="calendar tabs"
        sx={{
          paddingLeft: '16px',
          paddingRight: '16px',
          minHeight: '30px',
        //   borderBottom: '1px solid #ddd',
          '& .MuiTabs-flexContainer': {
            // borderBottom: '1px solid #ddd',
          },
        }}
        TabIndicatorProps={{
          style: {
            display: 'none',
          },
        }}
      >
        {months.map((month, index) => (
          <Tab
            label={month}
            key={index}
            sx={{
              '&.Mui-selected': {
                borderTop: '3px solid yellow',
                borderBottom: 'none',
                backgroundColor: '#ffffff',
                fontWeight: 'bold',
                color: '#000',
                zIndex: 1,
              },
              '&:hover': {
                borderColor: 'yellow',
              },
              '&:focus': {
                outline: 'none',
              },
              backgroundColor: '#f5f5f5',
              padding: 0,
              minHeight: '30px',
              color: '#000',
              textTransform: 'none',
              border: '1px solid #ddd',
              borderBottom: 'none',
              borderRadius: '4px 4px 0 0',
            }}
          />
        ))}
      </Tabs>
      <Card sx={{ border: '1px solid #ccc' }}>
        <Box sx={{ padding: '16px' }}>
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="task table">
              <TableHead>
                <TableRow sx={{ backgroundColor: '#4d4d4d' }}>
                  <TableCell sx={{ color: 'white', padding: '4px 16px' }}>Location</TableCell>
                  <TableCell sx={{ color: 'white', padding: '4px 16px' }}>Status</TableCell>
                  <TableCell sx={{ color: 'white', padding: '4px 16px' }}>Format</TableCell>
                  <TableCell sx={{ color: 'white', padding: '4px 16px' }}>N/A</TableCell>
                  <TableCell sx={{ color: 'white', padding: '4px 16px' }}>Unassigned</TableCell>
                  <TableCell sx={{ color: 'white', padding: '4px 16px' }}>Incomplete</TableCell>
                  <TableCell sx={{ color: 'white', padding: '4px 16px' }}>Complete</TableCell>
                  <TableCell sx={{ color: 'white', padding: '4px 16px' }}>Late Complete</TableCell>
                  <TableCell sx={{ color: 'white', padding: '4px 16px' }}>% Complete</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {taskData.map((task, index) => (
                  <TableRow key={index} sx={{ backgroundColor: index % 2 === 0 ? '#f5f5f5' : 'white' }}>
                    <TableCell sx={{ padding: '4px 16px' }}>{task.location}</TableCell>
                    <TableCell sx={{ padding: '4px 16px' }}>{task.status}</TableCell>
                    <TableCell sx={{ padding: '4px 16px' }}>{task.format}</TableCell>
                    <TableCell sx={{ padding: '4px 16px' }}>{task.na}</TableCell>
                    <TableCell sx={{ padding: '4px 16px' }}>{task.unassigned}</TableCell>
                    <TableCell sx={{ padding: '4px 16px' }}>{task.incomplete}</TableCell>
                    <TableCell sx={{ padding: '4px 16px' }}>{task.complete}</TableCell>
                    <TableCell sx={{ padding: '4px 16px' }}>{task.lateComplete}</TableCell>
                    <TableCell sx={{ padding: '4px 16px' }}>{task.percentComplete}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Box>
      </Card>
    </Box>
  );
};

export default CalendarTabs;
