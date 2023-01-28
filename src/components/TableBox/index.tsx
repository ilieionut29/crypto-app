import Grid from '@material-ui/core/Grid';
import Box from '@mui/material/Box';

interface tableBoxProps {
  children: any;
}

const TableBox = ({ children }: tableBoxProps) => {
  return (
    <Grid
      container
      alignItems='center'
      justifyContent='space-between'
      style={{ background: '#CCD6A6', borderRadius: '10px 10px 0 0' }}
    >
      <Grid item xs={2} md={2} style={{ padding: '10px 0 10px 10px' }}>
        <Box sx={{ fontWeight: 600 }}>Code</Box>
      </Grid>
      <Grid item xs={4} md={5} style={{ padding: '10px 0' }}>
        <Box sx={{ fontWeight: 600 }}>Asset</Box>
      </Grid>
      <Grid item xs={3} md={4} style={{ padding: '10px 0' }}>
        <Box sx={{ fontWeight: 600, textAlign: 'right' }}>Price</Box>
      </Grid>
      <Grid item xs={1} style={{ padding: '10px 0 10px 10px' }} />
      {children}
    </Grid>
  );
};

export default TableBox;
