import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
// import FormHelperText from "@material-ui/core/FormHelperText";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import { Button } from "@material-ui/core";
import { Link } from "react-router-dom";
// import TextField from "@material-ui/core/TextField";

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
  input: {
    color: "white",
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

  // https://api.themoviedb.org/3/certification/movie/list?api_key=28f61172b752209fb2807f08057c9e1f
  const certification = [
    {
      certification: "PG-13",
      meaning:
        "Some material may be inappropriate for children under 13. Films given this rating may contain sexual content, brief or partial nudity, some strong language and innuendo, humor, mature themes, political themes, terror and/or intense action violence. However, bloodshed is rarely present. This is the minimum rating at which drug content is present.",
      order: 3,
    },
    {
      certification: "R",
      meaning:
        "Under 17 requires accompanying parent or adult guardian 21 or older. The parent/guardian is required to stay with the child under 17 through the entire movie, even if the parent gives the child/teenager permission to see the film alone. These films may contain strong profanity, graphic sexuality, nudity, strong violence, horror, gore, and strong drug use. A movie rated R for profanity often has more severe or frequent language than the PG-13 rating would permit. An R-rated movie may have more blood, gore, drug use, nudity, or graphic sexuality than a PG-13 movie would admit.",
      order: 4,
    },
    {
      certification: "NR",
      meaning: "No rating information.",
      order: 0,
    },
    {
      certification: "G",
      meaning:
        "All ages admitted. There is no content that would be objectionable to most parents. This is one of only two ratings dating back to 1968 that still exists today.",
      order: 1,
    },
    {
      certification: "PG",
      meaning:
        "Some material may not be suitable for children under 10. These films may contain some mild language, crude/suggestive humor, scary moments and/or violence. No drug content is present. There are a few exceptions to this rule. A few racial insults may also be heard.",
      order: 2,
    },
    {
      certification: "NC-17",
      meaning:
        "These films contain excessive graphic violence, intense or explicit sex, depraved, abhorrent behavior, explicit drug abuse, strong language, explicit nudity, or any other elements which, at present, most parents would consider too strong and therefore off-limits for viewing by their children and teens. NC-17 does not necessarily mean obscene or pornographic in the oft-accepted or legal meaning of those words.",
      order: 5,
    },
  ];

  const sortBy = [
    { sort: "popularity.asc", name: "Popularity Ascending" },
    { sort: "popularity.desc", name: "Popularity Descending" },
    { sort: "release_date.asc", name: "Release Date Ascending" },
    { sort: "release_date.desc", name: "Release Date Descending" },
    { sort: "vote_average.asc", name: "Vote Average Ascending" },
    { sort: "vote_average.desc", name: "Vote Average Descending" },
  ];

  const classes = useStyles();
  const [cert, setCert] = useState("");
  const [genre, setGenre] = useState("");
  const [sort, setSort] = useState("");
  const [year, setYear] = useState("");

  let newDate = new Date();
  let currentYear = newDate.getFullYear();
  const allYears = [];

  for (let i = 1930; i <= currentYear; i++) allYears.push(i);

  const handleGenre = (event) => {
    setGenre(event.target.value);
    console.log(event.target.value);
  };

  const handleSort = (event) => {
    setSort(event.target.value);
  };
  const handleAge = (event) => {
    setCert(event.target.value);
    console.log(event.target.value);
  };
  const handleYear = (event) => {
    setYear(event.target.value);
    console.log(event.target.value);
  };

  return (
    <div className="tvshows">
      <FormControl variant="outlined" className={classes.formControl}>
        <InputLabel id="genre">Genre</InputLabel>
        <Select
          error
          labelId="demo-simple-select-outlined-label"
          id="demo-simple-select-outlined"
          value={genre}
          onChange={handleGenre}
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
      <FormControl variant="outlined" className={classes.formControl}>
        <InputLabel id="certification">Certification</InputLabel>
        <Select
          error
          labelId="demo-simple-select-outlined-label"
          id="demo-simple-select-outlined"
          value={cert}
          onChange={handleAge}
          label="Certification"
          className={classes.select}
          inputProps={{
            classes: {
              icon: classes.icon,
            },
          }}
        >
          {certification.map((type, index) => {
            return (
              <MenuItem value={type.certification} key={index}>
                {type.certification}
              </MenuItem>
            );
          })}
        </Select>
      </FormControl>
      <FormControl variant="outlined" className={classes.formControl}>
        <InputLabel id="certification">Sort By</InputLabel>
        <Select
          error
          labelId="demo-simple-select-outlined-label"
          id="demo-simple-select-outlined"
          value={sort}
          onChange={handleSort}
          label="Sort By"
          className={classes.select}
          inputProps={{
            classes: {
              icon: classes.icon,
            },
          }}
        >
          {sortBy.map((type, index) => {
            return (
              <MenuItem value={type.sort} key={index}>
                {type.name}
              </MenuItem>
            );
          })}
        </Select>
      </FormControl>
      <FormControl variant="outlined" className={classes.formControl}>
        <InputLabel id="releaseYear">Release Year</InputLabel>
        <Select
          error
          labelId="demo-simple-select-outlined-label"
          id="demo-simple-select-outlined"
          value={year}
          onChange={handleYear}
          label="Release Year"
          className={classes.select}
          inputProps={{
            classes: {
              icon: classes.icon,
            },
          }}
        >
          {allYears.map((year, index) => {
            return (
              <MenuItem value={year} key={index}>
                {year}
              </MenuItem>
            );
          })}
        </Select>
      </FormControl>

      <FormControl variant="outlined" className={classes.formControl}>
        {/* <TextField
          error
          value={year}
          color="primary"
          id="outlined-search"
          variant="outlined"
          label="Release Year"
          type="search"
          inputProps={{
            classes: {
              icon: classes.icon,
            },
          }}
        /> */}

        <Link to={`/movies/${genre}/${cert}/${sort}/${year}`}>
          <Button
            variant="contained"
            className={classes.button}
            color="primary"
            disableElevation
            size="large"
          >
            Search!
          </Button>
        </Link>
      </FormControl>
    </div>
  );
}
