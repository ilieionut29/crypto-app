import { createTheme, ThemeProvider } from '@material-ui/core/styles';
import Header from './components/Header';
import CryptoList from './components/CryptoList';

import './style/style.css';

const theme = createTheme({
  typography: {
    fontFamily: '"DM Sans", sans-serif;',
  },
});

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Header />
      <CryptoList />
    </ThemeProvider>
  );
};

export default App;
