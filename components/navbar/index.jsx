import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

import styles from '../../styles/navbar.module.css';
import { routesApp } from '../../data/routes';
import { useRouter } from 'next/dist/client/router';
import IconButton from '@mui/material/IconButton';
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';

export const Navbar = ({ setOpenDrawer }) => {
  const router = useRouter();

  return (
    <nav className={styles.navbar}>
      <div className={styles.containerLogo}>
        <Image src="/ecosred.png" alt="Ecos Red Logo" width={200} height={100} />
      </div>
      <div className={styles.navigator}>
        {routesApp.length > 0 &&
          routesApp.map((item, idx) => (
            <Link key={`${item} ${idx}`} href={item.route}>
              <a className={router.pathname == item.route ? styles.routeActive : styles.route}>{item.name}</a>
            </Link>
          ))}
      </div>
      <div className={styles.drawerButton}>
        <IconButton aria-label="" onClick={() => setOpenDrawer((state) => setOpenDrawer(!state))}>
          <MenuRoundedIcon color="primary" />
        </IconButton>
      </div>
    </nav>
  );
};
