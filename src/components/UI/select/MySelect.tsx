import React, { FC } from "react";
import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
} from "@mui/material";

interface Values {
  value: string | number;
  name: string;
}

interface ISelect {
  value: string;
  values: Values[];
  handleChange: (event: SelectChangeEvent) => void;
}

const MySelect: FC<ISelect> = ({ values, value, handleChange }) => {
  // const [age, setAge] = React.useState("");
  //
  // const handleChange = (event: SelectChangeEvent) => {
  //   setAge(event.target.value);
  // };
  //
  // console.log(age);

  return (
    <div>
      <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
        <InputLabel id="demo-simple-select-standard-label">{value}</InputLabel>
        <Select
          labelId="demo-simple-select-standard-label"
          id="demo-simple-select-standard"
          onChange={handleChange}
          label={value}
        >
          <MenuItem value="">
            <em>All</em>
          </MenuItem>
          {values.map((value) => (
            <MenuItem value={value.value}>{value.name}</MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
};

export default MySelect;
