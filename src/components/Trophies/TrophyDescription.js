import React from 'react';
import { Box, Typography } from '@mui/material';

const TrophyDescription = ({ imageIndex, trophiesList }) => {
  const imgSrc = trophiesList[imageIndex].title;
  const imgId = trophiesList[imageIndex].id;

  return (
    <Box  sx={{
        position: 'fixed',
        top: 0,
        right: 0,
        height: '100vh',
      marginTop: '6%',
        width: '48%',
        paddingTop: '2rem',
        overflow: 'auto',
      }}
    >
      <Typography>
        <img src={imgSrc} alt={imgId}  style={{ width: '100%', maxHeight: '55vh', objectFit: 'contain' }} />
      </Typography>
      <Typography color={'white'} textAlign={'center'}>
        {trophiesList[imageIndex].description}
      </Typography>
    </Box>
  );
};

export default TrophyDescription;
