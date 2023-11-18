import React from 'react'
import TextField from '@mui/material/TextField';

function InputsForm({ name, type }) {
  return (
    <TextField
            sx={{width: '100%', margin: '10px 5px',
            '& .MuiOutlinedInput-root': {
                backgroundColor: '#556FFF',
            },
            '& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline': {
                borderColor: 'White', // Cambia el color del borde cuando está enfocado
              },
              '& .MuiInputLabel-outlined.Mui-focused': {
                color: 'White', // Cambia el color de la etiqueta cuando está enfocada
              },
        }}
            label={name}
            color='info'
            type={type}
        />
  )
}

export default InputsForm