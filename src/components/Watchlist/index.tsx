import { Key } from 'react';
import Coin from '../Coin';

interface CoinInfo {
  code: string;
  description: string;
  price: number;
}

interface WatchlistProps {
  watchlist: CoinInfo[];
  currency: string;
  removeFromWatchlist: (code: string) => void;
  addToWatchlist: (code: string, description: string, price: number) => void;
}

const Watchlist = ({
  watchlist,
  currency,
  removeFromWatchlist,
  addToWatchlist,
}: WatchlistProps) => {
  return (
    <>
      {watchlist.map(({ code, description, price }: CoinInfo, index: Key) => (
        <Coin
          key={index}
          code={code}
          description={description}
          price={price}
          currency={currency}
          addToWatchlist={addToWatchlist}
          watchlist={watchlist}
          removeFromWatchlist={removeFromWatchlist}
        />
      ))}
    </>
  );
};

export default Watchlist;
