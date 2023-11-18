import React from "react";
import GoogleIcon from "@mui/icons-material/Google";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import InputsForm from "./InputsForm";
import { Link } from "react-router-dom";

function FormLogin() {
  return (
    <form style={{ padding: "40px 20px"}}>
      <Box sx={{ color: "#ffff" }}>
        <Box sx={{ fontSize: "1.5rem" }}>Bienvenido de vuelta</Box>
        <Box>Que bueno verte otra vez!</Box>
        <Box sx={{ color: "#929292 " }}>
          <FacebookOutlinedIcon
            sx={{ margin: "15px 20px", cursor: "pointer" }}
          />
          <GoogleIcon sx={{ margin: "15px 20px", cursor: "pointer" }} />
        </Box>
      </Box>
      <Box>
        <InputsForm name="Usuario" type="text"/>
        <InputsForm name="Password" type="password"/>
        <Box>
          <span
            className="texto"
            style={{
              float: "left",
              margin: "20px 0px 0px 10px",
              color: "#00FFF3",
              cursor: "pointer",
            }}
          >
            Olvidaste la contraseña?
          </span>
        </Box>
        <Button
          variant="contained"
          sx={{
            margin: "30px 5px",
            width: "100%",
          }}
        >
          Iniciar Sesion
        </Button>
        <Box>
          <span
            className="texto"
            style={{
              float: "left",
              margin: "0px 0px 0px 10px",
              color: "white",
              cursor: "pointer",
            }}
          >
            Primera vez que entras a Intecap?
          </span>
          <Link to="/registro">
          <span
            className="texto"
            style={{
              float: "right",
              margin: "0px 0px 0px 10px",
              color: "#00FFF3",
              cursor: "pointer",
            }}
          >
            Registrate
          </span>
          </Link>
        </Box>
      </Box>
      
    </form>
  );
}

export default FormLogin;
