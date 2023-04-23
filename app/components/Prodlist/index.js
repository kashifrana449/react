/**
 *
 * Prodlist
 *
 */

import React, { memo } from 'react';
import PropTypes from 'prop-types';
// import styled from 'styled-components';

import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';

import { FormattedMessage } from 'react-intl';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import messages from './messages';

function Prodlist({ products }) {
  console.log(products);
  let rows = [];
  if (products !== false) {
    rows = products.map(product => (
      <Grid item xs={2} key={product.id} style={{ display: 'flex' }}>
        <Card
          sx={{ maxWidth: 345 }}
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            flexDirection: 'column',
          }}
        >
          <CardMedia
            component="img"
            alt="green iguana"
            height="140"
            image={product.thumbnail}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {product.title}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {product.description}
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small">Share</Button>
            <Button size="small">Learn More</Button>
          </CardActions>
        </Card>
      </Grid>
    ));
  }
  return (
    <Box>
      <Grid container spacing={2} alignItems="stretch">
        {rows}
      </Grid>
    </Box>
  );
}

Prodlist.propTypes = {
  products: PropTypes.any,
};

export default memo(Prodlist);
