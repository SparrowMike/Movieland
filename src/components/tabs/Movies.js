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
  select: {
    "&:before": {
      borderColor: "red",
    },
    "&:after": {
      borderColor: "white",
    },
  },
  icon: {
    fill: "white",
  },
}));

export default function Movies() {
  const genres = [
    { id: 28, name: "Action" },
    { id: 12, name: "Adventure" },
    { id: 16, name: "Animation" },
    { id: 35, name: "Comedy" },
    { id: 80, name: "Crime" },
    { id: 99, name: "Documentary" },
    { id: 18, name: "Drama" },
    { id: 10751, name: "Family" },
    { id: 14, name: "Fantasy" },
    { id: 36, name: "History" },
    { id: 27, name: "Horror" },
    { id: 10402, name: "Music" },
    { id: 9648, name: "Mystery" },
    { id: 10749, name: "Romance" },
    { id: 878, name: "Science Fiction" },
    { id: 10770, name: "TV Movie" },
    { id: 53, name: "Thriller" },
    { id: 10752, name: "War" },
    { id: 37, name: "Western" },
  ];
  const classes = useStyles();
  const [genre, setGenre] = useState("");

  const handleChange = (event) => {
    setGenre(event.target.value);
    console.log(event.target.value);
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
          className={classes.select}
          inputProps={{
            classes: {
              icon: classes.icon,
            },
          }}
        >
          {genres.map((type, index) => {
            return (
              <MenuItem value={type.id} key={index}>
                {type.name}
              </MenuItem>
            );
          })}
        </Select>
      </FormControl>
    </div>
  );
}
