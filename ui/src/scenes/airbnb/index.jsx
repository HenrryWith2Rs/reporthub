import { Box, Typography, useTheme } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';
import { tokens } from '../../theme';
import { mockDataTeam } from '../../data/mockData';
import { mockAirbnbData } from '../../data/mockAirbnb';
import Header from '../../components/Header';

import FiberNewIcon from '@mui/icons-material/FiberNew';
import EditIcon from '@mui/icons-material/Edit';
import LocalHotelIcon from '@mui/icons-material/LocalHotel';
import CancelIcon from '@mui/icons-material/Cancel';
import BedtimeOffIcon from '@mui/icons-material/BedtimeOff';
import ThumbDownAltIcon from '@mui/icons-material/ThumbDownAlt';
import QueryStatsIcon from '@mui/icons-material/QueryStats';
import DoNotDisturbOffIcon from '@mui/icons-material/DoNotDisturbOff';
import ApprovalIcon from '@mui/icons-material/Approval';

const Airbnb = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const columns = [
    { field: 'id', headerName: 'ID' },
    {
      field: 'Guest name',
      headerName: 'Guest Name',
      cellClassName: 'name-column--cell',
      width: 160,
    },
    {
      field: 'Guest first name',
      headerName: 'Guest first name',
    },
    {
      field: 'Guest last name',
      headerName: 'Guest last name',
    },
    {
      field: 'Check-in date',
      headerName: 'Check-in date',
    },
    {
      field: 'Check-out date',
      headerName: 'Check-out date',
    },
    {
      field: 'Channel',
      headerName: 'Channel',
    },
    {
      field: 'Total price',
      headerName: 'Total price',
      type: 'number',
      valueFormatter: (params) => `$${params.value}`,
    },
    {
      field: 'Airbnb expected payout amount',
      headerName: 'Airbnb expected $',
      type: 'number',
      width: 160,
      valueFormatter: (params) => `$${params.value}`,
    },
    {
      field: 'Status',
      headerName: 'Status',
      renderCell: ({ row: { Status } }) => {
        return (
          <Box
            width="100%"
            m="0 auto"
            p="5px"
            display="flex"
            justifyContent="center"
            backgroundColor={
              Status === 'new'
                ? colors.greenAccent[600]
                : Status === 'inquiry'
                ? colors.greenAccent[700]
                : colors.greenAccent[700]
            }
            borderRadius="4px"
          >
            {Status === 'new' && <FiberNewIcon />}
            {Status === 'modified' && <EditIcon />}
            {Status === 'ownerStay' && <LocalHotelIcon />}
            {Status === 'cancelled' && <CancelIcon />}
            {Status === 'declined' && <ThumbDownAltIcon />}
            {Status === 'expired' && <BedtimeOffIcon />}
            {Status === 'inquiry' && <QueryStatsIcon />}
            {Status === 'inquiryNotPossible' && <DoNotDisturbOffIcon />}
            {Status === 'inquiryPreapproved' && <ApprovalIcon />}
            <Typography color={colors.grey[100]} sx={{ ml: '5px' }}>
              {Status}
            </Typography>
          </Box>
        );
      },
    },
    {
      field: 'Listing',
      headerName: 'Listing',
      width: 200,
    },
    {
      field: 'Cleaning fee',
      headerName: 'Cleaning fee',
      type: 'number',
      valueFormatter: (params) => `$${params.value}`,
    },
  ];

  return (
    <Box m="20px">
      <Header title="Airbnb" subtitle="Managing rental properties" />
      <Box
        m="40px 0 0 0"
        height="75vh"
        sx={{
          '& .MuiDataGrid-root': {
            border: 'none',
          },
          '& .MuiDataGrid-cell': {
            borderBottom: 'none',
          },
          '& .name-column--cell': {
            color: colors.greenAccent[300],
          },
          '& .MuiDataGrid-columnHeaders': {
            backgroundColor: colors.blueAccent[700],
            borderBottom: 'none',
          },
          '& .MuiDataGrid-virtualScroller': {
            backgroundColor: colors.primary[400],
          },
          '& .MuiDataGrid-footerContainer': {
            borderTop: 'none',
            backgroundColor: colors.blueAccent[700],
          },
          '& .MuiCheckbox-root': {
            color: `${colors.greenAccent[200]} !important`,
          },
        }}
      >
        <DataGrid checkboxSelection rows={mockAirbnbData} columns={columns} />
      </Box>
    </Box>
  );
};

export default Airbnb;
