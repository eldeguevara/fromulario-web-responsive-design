import React from "react";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import InputsRegister from "../components/InputsRegister";
import AbcIcon from "@mui/icons-material/Abc";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import GroupRadio from "../components/GroupRadio";
import SelectVariants from "../components/SelectVariants";
import PasswordIcon from "@mui/icons-material/Password";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';

const Item = styled(Paper)(({ theme }) => ({
  background: "transparent",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.primary,
}));

function Register() {
  return (
    <Stack
      spacing={5}
      direction="row"
      useFlexGap
      flexWrap="wrap"
      justifyContent="center"
      alignItems="center"
      sx={{
        height: "100vh",
        width: "100%",
      }}
    >
      <Box>
        <form
          style={{
            background: "white",
            padding: "20px 20px",
            borderRadius: "10px",
            width: "70vw",
            overflowY: "visible",
          }}
        >
          <Item
            sx={{
              boxShadow: "0 0 0 0",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <Box sx={{ width: '100%', display: 'flex', justifyContent: 'space-between', padding: '0px 10px'}}>
              <span
                style={{
                  fontSize: "1.5rem",
                  marginBottom: "10px",
                  
                }}
              >
                Formulario Registro
              </span>
              <Button variant="contained" endIcon={<SendIcon />}>
              Send
              </Button>
            </Box>

            <InputsRegister
              nombre="Nombre"
              icono={
                <AbcIcon sx={{ color: "action.active", mr: 1, my: 0.5 }} />
              }
              type="text"
            />

            <InputsRegister
              nombre="Apellido"
              icono={
                <AbcIcon sx={{ color: "action.active", mr: 1, my: 0.5 }} />
              }
              type="text"
            />

            <InputsRegister
              nombre="Edad"
              icono={
                <CalendarMonthIcon
                  sx={{ color: "action.active", mr: 1, my: 0.5 }}
                />
              }
              type="Number"
            />

            <GroupRadio />

            <SelectVariants />

            <InputsRegister
              nombre="Usuario"
              icono={
                <PersonAddIcon
                  sx={{ color: "action.active", mr: 1, my: 0.5 }}
                />
              }
              type="text"
            />

            <InputsRegister
              nombre="Password"
              icono={
                <PasswordIcon sx={{ color: "action.active", mr: 1, my: 0.5 }} />
              }
              type="password"
            />

            <InputsRegister
              nombre="Confirmar Password"
              icono={
                <PasswordIcon sx={{ color: "action.active", mr: 1, my: 0.5 }} />
              }
              type="password"
            />
            
          </Item>
        </form>
      </Box>
    </Stack>
  );
}

export default Register;
