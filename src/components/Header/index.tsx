import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';

const Header = () => {
  return (
    <Grid
      container
      direction='row'
      alignItems='center'
      justifyContent='space-between'
      sx={{ p: 2, marginX: 'auto', maxWidth: 1160 }}
    >
      <Grid item xs={'auto'}>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            gap: 2,
          }}
        >
          <svg
            width='29'
            height='24'
            viewBox='0 0 29 24'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <rect
              x='11.5711'
              width='16.364'
              height='16.364'
              transform='rotate(45 11.5711 0)'
              fill='#130f40'
            />
            <rect
              x='17.4148'
              y='0.707107'
              width='15.364'
              height='15.364'
              transform='rotate(45 17.4148 0.707107)'
              stroke='#130f40'
            />
          </svg>
          <span>
            Crypto<b>Board</b>
          </span>
        </Box>
      </Grid>
      <Grid item xs={'auto'}>
        <Link href='https://www.db.com' underline='none' color='#130f40'>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <AccountBalanceIcon />
            Deutsche Bank
          </Box>
        </Link>
      </Grid>
    </Grid>
  );
};

export default Header;
