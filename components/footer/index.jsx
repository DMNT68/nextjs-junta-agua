import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FiFacebook, FiInstagram, FiYoutube, FiLinkedin, FiTwitter } from 'react-icons/fi';

import styles from '../../styles/footer.module.css';
import { Grid, IconButton } from '@mui/material';

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.containerInfo}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6} md={4}>
            <div className={styles.divInfoBrand}>
              <div className={styles.logo}>
                <Image src="/ecosred.png" alt="Ecos Red Logo" width={200} height={100} />
              </div>
              <p>
                Creando ecosistemas digitales. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Auctor libero id et, in gravida. Sit diam duis mauris nulla cursus. Erat et lectus vel ut
                sollicitudin elit at amet.
              </p>
            </div>
          </Grid>
          <Grid item xs={12} sm={6} md={2.666}>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <h3>Sobre nosotros</h3>
              <a href="">Terminos y condiciones</a>
              <a href="">Politicas de privacidad</a>
            </div>
          </Grid>
          <Grid item xs={12} sm={6} md={2.666}>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <h3>Atención al cliente</h3>
              <a href="">Centro de ayuda</a>
              <a href="">Politicas de privacidad</a>
            </div>
          </Grid>
          <Grid item xs={12} sm={6} md={2.666}>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <h3>Contactanos</h3>
              <label>70 Washington Square South, New York, NY 10012, United States</label>
              <label>Email: uilib.help@gmail.com</label>
              <label>Phone: +1 1123 456 780</label>
              <div className={styles.divSocialMedia}>
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                  <IconButton size="small" aria-label="facebook" color="secondary">
                    <FiFacebook />
                  </IconButton>
                </a>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                  <IconButton size="small" aria-label="instagram" color="secondary">
                    <FiInstagram />
                  </IconButton>
                </a>
                <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
                  <IconButton size="small" aria-label="youtube" color="secondary">
                    <FiYoutube />
                  </IconButton>
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                  <IconButton size="small" aria-label="Linkedin" color="secondary" style={{ display: 'flex', alignItems: 'center' }}>
                    <FiLinkedin />
                  </IconButton>
                </a>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                  <IconButton size="small" aria-label="Twitter" color="secondary">
                    <FiTwitter />
                  </IconButton>
                </a>
              </div>
            </div>
          </Grid>
        </Grid>
      </div>
      <a style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }} href="" target="_blank" rel="noopener noreferrer">
        <label>Copyright&copy; {new Date().getFullYear()} </label>
      </a>
    </footer>
  );
};
