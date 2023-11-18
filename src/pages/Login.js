import React from 'react'
import logoIntecap from '../assets/img/logoIntecap.png'
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import FormLogin from '../components/FormLogin';
import Divider from '@mui/material/Divider';
import Button from "@mui/material/Button";

const Item = styled(Paper)(({ theme }) => ({
  background: 'transparent',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.primary,
}));

function Login() {
  return (
    <Box sx={{width: '100%'}}>
      <Stack spacing={5} direction="row" useFlexGap flexWrap="wrap" justifyContent="center" alignItems="center" sx={{
        height: '100vh'
      }}>
        <Item sx={{boxShadow: '0 0 0 0', flexGrow: 4, width: '15%', height: '40%'}}>
          <img style={{width: '100%', height: '100%',}} src={logoIntecap} alt='' className='imgLogo'/>
        </Item>
        <Item sx={{flexGrow: 0.1, boxShadow: '0px 0px 10px -2px rgba(0,0,0,0.56)'}}>
          <FormLogin/>
          <Divider sx={{
            color: 'white'
          }}>O</Divider>
          <Button
          variant="contained"
          sx={{
            margin: "10px 0px",
            width: "92%",
            background: 'transparent',
            border: '2px solid white'
          }}
        >
          Iniciar Sesion con tu organizacion
        </Button>
        </Item>
      </Stack>
    </Box>
  )
}

export default Login