import TextField from '@mui/material/TextField';

interface SearchItemProps {
  setSearchTerm: (searchTerm: string) => void;
}

const SearchItem = ({ setSearchTerm }: SearchItemProps) => {
  return (
    <TextField
      sx={{
        input: { color: '#130f40' },
        fieldset: { borderColor: '#130f40' },
        minWidth: { md: 320 },
      }}
      size='small'
      fullWidth
      id='searcher'
      label='Filter by symbol...'
      onChange={(e) => setSearchTerm(e.target.value)}
    />
  );
};

export default SearchItem;
