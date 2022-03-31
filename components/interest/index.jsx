import { Grid } from '@mui/material';
import React from 'react';
import { interestData } from '../../data/interest';
import styles from '../../styles/utils.module.css';
import { InterestCard } from '../InterestCard/InterestCard';

export const Interest = () => {
  return (
    <div className={styles.centerDiv} style={{ height: 'auto', margin: '50px 0px' }}>
      <h1>Puede interesarte</h1>
      <div style={{ margin: '30px 0px' }}>
        <Grid container justifyContent="space-around" alignItems="center" spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
          {interestData.length > 0 &&
            interestData.map((item, idx) => (
              <Grid key={`${item.name} + ${idx}`} item xs={12} sm={4} md={4}>
                <InterestCard {...item} />
              </Grid>
            ))}
        </Grid>
      </div>
    </div>
  );
};
