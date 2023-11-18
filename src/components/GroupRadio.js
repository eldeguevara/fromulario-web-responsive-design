import React from 'react'
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormLabel from '@mui/material/FormLabel';
import Box from "@mui/material/Box";

function GroupRadio() {
  return (
    <Box sx={{margin: '10px 0px 0px 0px'}}>
            <FormLabel id="demo-radio-buttons-group-label" sx={{
              position: 'relative',
              top: '0%',
              left: '-48%',
            }}>Sexo</FormLabel>
              <RadioGroup
                aria-labelledby="demo-radio-buttons-group-label"
                defaultValue="female"
                name="radio-buttons-group"
                sx={{marginTop: '10px', display: 'flex', flexDirection: 'row'}}
              >
                <FormControlLabel
                  value="Femenino"
                  control={<Radio />}
                  label="Femenino"
                />
                <FormControlLabel
                  value="Maculino"
                  control={<Radio />}
                  label="Maculino"
                />
              </RadioGroup>
            </Box>
  )
}

export default GroupRadio