import { useState, useEffect } from 'react';
import { getCoinsList } from '../../api/getCoinsList';
import { getCoinsRates } from '../../api/getCoinsRates';
import SearchItem from '../SearchItem';
import CurrencySelector from '../CurrencySelector';
import Coin from '../Coin';
import Box from '@mui/material/Box';
import Grid from '@material-ui/core/Grid';
import TableBox from '../TableBox';

interface CoinInfo {
  code: string;
  description: string;
  price: number;
}

const CryptoList = () => {
  const [cryptoList, setCryptoList] = useState([]);
  const [cryptoRates, setcryptoRates] = useState<{ [key: string]: number }>({});
  const [currency, setCurrency] = useState('USD');
  const [watchlist, setWatchlist] = useState<CoinInfo[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const filteredCryptoList = Object.entries(cryptoList).filter(([symbol]) =>
    symbol.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const addToWatchlist = (code: string, description: string, price: number) => {
    setWatchlist([...watchlist, { code, description, price }]);
    localStorage.setItem(
      'watchlist',
      JSON.stringify([...watchlist, { code, description, price }])
    );
  };

  const removeFromWatchlist = (code: string) => {
    setWatchlist(watchlist.filter((coin) => coin.code !== code));
    localStorage.setItem(
      'watchlist',
      JSON.stringify(watchlist.filter((coin) => coin.code !== code))
    );
  };

  const currencyChangeHandler = (e: { target: { value: string } }) => {
    const newCurrency = e.target.value;
    setCurrency(newCurrency);
    localStorage.setItem('currency', newCurrency);
  };

  useEffect(() => {
    const storedCurreny = localStorage.getItem('currency');
    storedCurreny && setCurrency(storedCurreny);

    const storedWatchlist = localStorage.getItem('watchlist');
    storedWatchlist && setWatchlist(JSON.parse(storedWatchlist));

    getCoinsList()
      .then((response) => {
        setCryptoList(response.symbols);
      })
      .catch((error) => {
        console.log('getCoinsList' + error);
      });

    getCoinsRates({ currency })
      .then((response) => {
        setcryptoRates(response.rates);
      })
      .catch((error) => {
        console.log('getCoinsRates' + error);
      });
  }, [currency]);

  return (
    <>
      <Box sx={{ p: 2, maxWidth: 1160, mx: 'auto' }}>
        <Grid
          container
          alignItems='center'
          justifyContent='space-between'
          spacing={2}
        >
          <Grid item xs={12} md='auto'>
            <SearchItem setSearchTerm={setSearchTerm} />
          </Grid>
          <Grid item xs={12} md='auto'>
            <CurrencySelector
              currency={currency}
              setCurrency={currencyChangeHandler}
            />
          </Grid>
        </Grid>
      </Box>

      <Box sx={{ p: 2, maxWidth: 1160, mx: 'auto' }}>
        <Grid
          container
          alignItems='flex-start'
          direction='row-reverse'
          spacing={2}
        >
          <Grid item xs={12} md={6}>
            <Box sx={{ fontSize: 36, fontWeight: 600, mb: 1 }}>Wishlist</Box>
            {watchlist.length > 0 ? (
              <TableBox>
                {watchlist.map(({ code, description }: CoinInfo, index) => (
                  <Coin
                    key={index}
                    code={code}
                    description={description}
                    price={cryptoRates[code]}
                    currency={currency}
                    addToWatchlist={addToWatchlist}
                    watchlist={watchlist}
                    removeFromWatchlist={removeFromWatchlist}
                  />
                ))}
              </TableBox>
            ) : (
              <span>
                You currently do not have any coins added to your watchlist. If
                you would like to add a coin to your watchlist, simply click on
                the heart icon located next to the coin's name. This will add
                the coin to your watchlist for easy tracking and monitoring.
              </span>
            )}
          </Grid>
          <Grid item xs={12} md={6}>
            <Box sx={{ fontSize: 36, fontWeight: 600, mb: 1 }}>Coin list</Box>
            {Object.entries(cryptoList).length > 0 ? (
              <>
                {filteredCryptoList.length > 0 ? (
                  <TableBox>
                    {filteredCryptoList.map(
                      ([coin, { description, code }], index) => (
                        <Coin
                          key={index}
                          code={code}
                          description={description}
                          price={cryptoRates[coin]}
                          currency={currency}
                          addToWatchlist={addToWatchlist}
                          watchlist={watchlist}
                          removeFromWatchlist={removeFromWatchlist}
                        />
                      )
                    )}
                  </TableBox>
                ) : (
                  <span>
                    Sorry, we couldn't find any results for your search. Please
                    ensure that the coin symbol is spelled correctly and try
                    again.
                  </span>
                )}
              </>
            ) : (
              <span>Loading...</span>
            )}
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default CryptoList;
