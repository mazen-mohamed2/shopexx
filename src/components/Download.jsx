import  React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import {Box} from '@mui/material'
 export default function SelectVariants() {
  const [ar, setAR] = React.useState('');

  const handleChange = (event) => {
    setAR(event.target.value);
  };

  return (
    <Box sx={{display:"flex",alignItems:"center"}} >
      <FormControl variant="standard" sx={{ m: 1,  minWidth: 90,marginTop:"-7px" }}>
        <InputLabel id="demo-simple-select-standard-label">AR</InputLabel>
        <Select
            disableUnderline
          labelId="demo-simple-select-standard-label"
          id="demo-simple-select-standard"
          value={ar}
          onChange={handleChange}
          label="AR"
         
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={10}>عربي</MenuItem>
          <MenuItem value={20}>Enghlish</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}
