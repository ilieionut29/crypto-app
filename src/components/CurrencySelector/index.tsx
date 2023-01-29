import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';

interface CurrencySelectorProps {
  currency: string;
  setCurrency: any;
}

const CurrencySelector = ({ currency, setCurrency }: CurrencySelectorProps) => {
  return (
    <FormControl
      sx={{
        input: { color: '#130f40' },
        fieldset: { borderColor: '#130f40' },
        minWidth: 250,
      }}
      size='small'
      fullWidth
    >
      <InputLabel id='currencySelector'>Current currency</InputLabel>
      <Select
        labelId='currencySelector'
        id='currencySelector'
        value={currency}
        label='Current currency'
        onChange={setCurrency}
      >
        <MenuItem value='USD'>United States Dollar</MenuItem>
        <MenuItem value='EUR'>Euro</MenuItem>
        <MenuItem value='GBP'>British Pound Sterling</MenuItem>
        <MenuItem value='RON'>Romanian New Leu</MenuItem>
        <MenuItem value='CHF'>Swiss Franc</MenuItem>
      </Select>
    </FormControl>
  );
};

export default CurrencySelector;
