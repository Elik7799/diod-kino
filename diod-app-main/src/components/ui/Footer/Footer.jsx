import { Stack, Typography } from '@mui/material';
import React from 'react';

import logo from '../../../img/logo.png';

import './Footer.css';

export default function Footer() {
  return (
    <Stack
      component="footer"
      sx={{
        paddingTop: 4,
        paddingBottom: 4,
        flexDirection: { sm: 'row' },
        justifyContent: { sm: 'space-between' },
        alignItems: { sm: 'center' },
        marginTop: 'auto',
      }}
    >
      <Typography variant="body2" color="text.secondary">
        &copy; {new Date().getFullYear()} &laquo;DIOD&raquo; 18+ <br />
        Данный сайт создан исключительно в обущающих целях. <br />
        Все права принадлежат правообладателям.
      </Typography>

      <Typography variant="h4" color="primary.main">
        <img src={logo} alt="nope" className="logo" />
      </Typography>
    </Stack>
  );
}
