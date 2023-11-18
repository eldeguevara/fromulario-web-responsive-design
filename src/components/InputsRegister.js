import React from 'react'
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";


function InputsRegister({ nombre, icono, type }) {
  return (
    <Box sx={{ display: "flex", alignItems: "flex-end", width: '100%', margin: '5px 0px'}}>
            <TextField
                id="input-with-sx"
                label={nombre}
                variant="standard"
                type={type}
                sx={{width: '100%'}}
              />
              {
                icono
              }
              
            </Box>
  )
}

export default InputsRegister