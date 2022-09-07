import { FC } from 'react';
import { useNavigate } from 'react-router-dom';
import { Paper, IconButton } from '@mui/material';
import { Search } from '@mui/icons-material';

export const SearchBar: FC = () => {
  return (
    <Paper
      component="form"
      onSubmit={() => {}}
      sx={{
        borderRadius: 20,
        border: '1px solid #e3e3e3',
        pl: 2,
        boxShadow: 'none',
        mr: { sm: 5 },
      }}
    >
      <input
        className="search-bar"
        type="text"
        placeholder="Search..."
        value=""
        onChange={() => {}}
      />
      <IconButton type="submit" sx={{ p: '10px', color: 'red' }}>
        <Search />
      </IconButton>
    </Paper>
  );
};
