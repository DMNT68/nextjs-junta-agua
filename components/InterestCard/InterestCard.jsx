import React from 'react';
import styles from '../../styles/interestCard.module.css';
import Image from 'next/image';
import { Avatar, Card, CardContent, CardHeader, CardMedia, Typography } from '@mui/material';
import { grey } from '@mui/material/colors';

export const InterestCard = ({ title, urlImg, date, avatar, name }) => {
  return (
    <div className={styles.container} style={{ backgroundImage: `url(${urlImg})` }}>
      <div className={styles.bgImage}>
        <div className={styles.avatar}>
          <Avatar alt={name ? name : 'ecosRed'} src={avatar ? avatar : '/favicon.png'} />
        </div>
        <div className={styles.content}>
          <Typography variant="body2" className={styles.date}>
            {date}
          </Typography>
          <Typography variant="h6" color="white">
            <a className={styles.title}>{title}</a>
          </Typography>
        </div>
      </div>
    </div>
  );
};
