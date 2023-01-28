import Grid from '@material-ui/core/Grid';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';

interface CoinProps {
  code: string;
  description: string;
  price: number;
  currency: string;
  watchlist: { code: string; description: string; price: number }[];
  removeFromWatchlist: (code: string) => void;
  addToWatchlist: (code: string, description: string, price: number) => void;
}

const Coin = ({
  code,
  description,
  price,
  currency,
  addToWatchlist,
  watchlist,
  removeFromWatchlist,
}: CoinProps) => {
  return (
    <Grid
      container
      alignItems='center'
      justifyContent='space-between'
      style={{
        background: '#D7E9B9',
        borderBottom: '1px solid #819c55',
      }}
    >
      <Grid item xs={2} md={2} style={{ padding: '10px 0 10px 10px' }}>
        <Box sx={{ fontWeight: 600 }}>{code}</Box>
      </Grid>
      <Grid item xs={4} md={5} style={{ padding: '10px 0' }}>
        {description}
      </Grid>
      <Grid item xs={3} md={4} style={{ padding: '10px 0' }}>
        <Box sx={{ textAlign: 'right' }}>
          {price} {currency}
        </Box>
      </Grid>
      <Grid item xs={1} style={{ padding: '10px 10px 10px 0' }}>
        <Box sx={{ textAlign: 'right' }}>
          {watchlist.some((coin: { code: string }) => coin.code === code) ? (
            <IconButton
              sx={{
                p: 0,
                '&.MuiButtonBase-root:hover': {
                  bgcolor: 'transparent',
                },
              }}
              size='small'
              aria-label='delete'
              disableRipple
              onClick={() => removeFromWatchlist(code)}
            >
              <FavoriteIcon style={{ color: '#e84118' }} />
            </IconButton>
          ) : (
            <IconButton
              sx={{
                p: 0,
                '&.MuiButtonBase-root:hover': {
                  bgcolor: 'transparent',
                },
              }}
              size='small'
              aria-label='add'
              disableRipple
              onClick={() => addToWatchlist(code, description, price)}
            >
              <FavoriteBorderIcon style={{ color: '#e84118' }} />
            </IconButton>
          )}
        </Box>
      </Grid>
    </Grid>
  );
};

export default Coin;
