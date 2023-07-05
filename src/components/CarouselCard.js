import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

export default function CarouselCard({ logo, name, winner }) {
  return (
    <Card sx={{ maxWidth: '100%',maxHeight:'100%',boxShadow: '0 2px 5px  rgba(2, 0, 1, 0.2)', aspectRatio: '1/1.24' }}>
      <CardMedia
        sx={{  height: '15vh', width: '15vh', margin: 'auto', objectFit:'cover', marginTop: '15%'}}
        image={logo}
        title={name}
      />
      <CardContent>
        <Typography gutterBottom variant="h6" fontWeight={'bold'} align = {'center'} component="div"  sx={{ lineHeight: 1 }}>
          {name}
        </Typography>
        <Box sx={{ backgroundColor: 'green', color: 'white', padding: '8px', borderRadius: '4px', marginTop: '10px' }}>
          <Typography variant="h6" fontWeight="bold" align="center" color="inherit">
            {winner}
          </Typography>
        </Box>
      </CardContent>
    </Card>
  );
}
