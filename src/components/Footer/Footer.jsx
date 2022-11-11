import React from 'react';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import "./Footer.css"

function Copyright() {
  return (
    <Typography variant="body2" >
      {'Copyright © '}
      <Link color="inherit" href="">
        Nancy Clavijo Lab
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

export default function Footer() {
  return (
    <div className="barFooter">
      <span className="textF">{Copyright()}</span>
    </div>
     
  );
}