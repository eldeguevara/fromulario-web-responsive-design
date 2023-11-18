import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function SelectVariants() {
  const [age, setAge] = React.useState('');

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <div>
      <FormControl variant="standard" sx={{ m: 1, width: '100%'}}>
        <InputLabel id="demo-simple-select-standard-label">Nivel estudios</InputLabel>
        <Select
          labelId="demo-simple-select-standard-label"
          id="demo-simple-select-standard"
          value={age}
          onChange={handleChange}
          label="Age"
        >
          <MenuItem value={"Primaria"}>Primaria</MenuItem>
          <MenuItem value={"Basicos"}>Basicos</MenuItem>
          <MenuItem value={"Carrera"}>Carrera</MenuItem>
          <MenuItem value={"Universitario"}>Universitario</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}