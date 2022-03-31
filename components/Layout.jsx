import React, { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';

import styles from '../styles/Home.module.css';
import stylesRoutes from '../styles/navbar.module.css';

import { Footer } from './footer';
import { Navbar } from './navbar';
import { Divider, Drawer, List, ListItem, ListItemIcon, ListItemText, SwipeableDrawer } from '@mui/material';
import { Box } from '@mui/system';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import { routesApp } from '../data/routes';
import { useRouter } from 'next/dist/client/router';

export const Layout = ({ children, title, description }) => {
  const [openDrawer, setOpenDrawer] = useState(false);
  const router = useRouter();

  const toggleDrawer = (open) => (event) => {
    setOpenDrawer(open);
  };

  const list1 = () => (
    <Box sx={{ width: 250 }} role="presentation" onClick={toggleDrawer(false)} onKeyDown={toggleDrawer(false)}>
      <List>
        {routesApp.map((item, index) => (
          <Link key={`${item} ${index}`} href={item.route}>
            <ListItem button key={`${item} ${index}`}>
              <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
              <ListItemText primary={item.name} />
            </ListItem>
          </Link>
        ))}
      </List>
    </Box>
  );

  const list = () => (
    <div className={stylesRoutes.drawerContainer}>
      {routesApp.length > 0 &&
        routesApp.map((item, idx) => (
          <Link key={`${item} ${idx}`} href={item.route}>
            <a className={router.pathname == item.route ? stylesRoutes.drawerItemActive : stylesRoutes.drawerItem}>{item.name}</a>
          </Link>
        ))}
    </div>
  );

  return (
    <div className={styles.container}>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <Navbar setOpenDrawer={setOpenDrawer} />
      <SwipeableDrawer anchor="right" open={openDrawer} onClose={toggleDrawer(false)} onOpen={toggleDrawer(true)}>
        {list()}
      </SwipeableDrawer>
      <main>{children}</main>
      <Footer />
    </div>
  );
};

Layout.defaultProps = {
  title: 'ecosRED',
  description: 'ecosRED creando ecosistemas digitales',
};
