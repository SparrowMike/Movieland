import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
// import FormHelperText from "@material-ui/core/FormHelperText";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
    color: "white",
  },
}));

export default function Tvshows() {
  const classes = useStyles();
  const [genre, setGenre] = useState("");

  const handleChange = (event) => {
    setGenre(event.target.value);
    console.log(genre);
  };

  return (
    <div className="tvshows">
      <FormControl variant="outlined" className={classes.formControl}>
        <InputLabel id="genre">Genre</InputLabel>
        <Select
          labelId="demo-simple-select-outlined-label"
          id="demo-simple-select-outlined"
          value={genre}
          onChange={handleChange}
          label="Genre"
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={"action"}>Action</MenuItem>
          <MenuItem value={"family"}>Family</MenuItem>
          <MenuItem value={"thriller"}>Thriller</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}