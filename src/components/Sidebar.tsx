import { FC } from 'react';
import { Stack } from '@mui/material';
import { categories } from '../utils/constants';

interface ISidebarProps {
  selectedCategory: string;
  setSelectedCategory: (name: string) => void;
}

export const Sidebar: FC<ISidebarProps> = ({
  selectedCategory,
  setSelectedCategory,
}) => {
  return (
    <Stack
      direction="row"
      sx={{
        overflowY: 'auto',
        height: { sx: 'auto', md: '95%' },
        flexDirection: { md: 'column' },
      }}
    >
      {categories.map((category) => (
        <button
          onClick={() => setSelectedCategory(category.name)}
          key={category.name}
          className="category-btn"
          style={{
            background: category.name === selectedCategory ? '#fc1503' : '',
            color: '#fff',
          }}
        >
          <span
            style={{
              color: category.name === selectedCategory ? '#fff' : 'red',
              marginRight: '15px',
            }}
          >
            {category.icon}
          </span>
          <span
            style={{
              opacity: category.name === selectedCategory ? '1' : '0.8',
            }}
          >
            {category.name}
          </span>
        </button>
      ))}
    </Stack>
  );
};
