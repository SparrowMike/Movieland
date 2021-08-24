import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import { Button, Typography } from "@material-ui/core";
import { Link } from "react-router-dom";
import { Container } from "@material-ui/core";
import genres from "../data/genresMovies";
import sortBy from "../data/sortByMovies";
import isoCountries from "../data/isoCountries";
import certification from "../data/certification";

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },

  button: {
    margin: theme.spacing(3),
  },

  select: {
    margin: theme.spacing(1),
    borderColor: "white",
    color: "rgb(232, 241, 250)",
    "&:before": {
      fill: "white",
      borderColor: "red",
    },
    "&:after": {
      borderColor: "white",
    },
  },
  typographyHeader: {
    [theme.breakpoints.down("xs")]: {
      fontSize: "3rem",
    },
    [theme.breakpoints.up("md")]: {
      fontSize: "5rem",
    },
  },
}));

export default function Movies() {
  let newDate = new Date();
  let currentYear = newDate.getFullYear();
  const allYears = [];

  const classes = useStyles();
  const [cert, setCert] = useState("R");
  const [genre, setGenre] = useState("28");
  const [sort, setSort] = useState("popularity.desc");
  const [yearGte, setYearGte] = useState("2000");
  const [yearLte, setYearLte] = useState(currentYear);
  const [country, setCountry] = useState("US");
  // const [lang, setLanguage] = useState("en");

  for (let i = currentYear; i >= 1930; i--) allYears.push(i);

  if (yearGte >= yearLte) {
    setYearLte(parseInt(yearGte) + 1);
  }

  return (
    <div className="tvshows">
      <Container maxWidth="sm" className={classes.textShadow}>
        <Typography
          variant="h2"
          color="primary"
          className={classes.typographyHeader}
        >
          Discover new movies today!
        </Typography>
        <FormControl variant="outlined" className={classes.formControl}>
          <InputLabel id="genre">Genre</InputLabel>
          <Select
            error
            labelId="demo-simple-select-outlined-label"
            id="demo-simple-select-outlined"
            value={genre}
            onChange={(e) => setGenre(e.target.value)}
            label="Genre"
            className={classes.select}
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
            onChange={(e) => setCert(e.target.value)}
            label="Certification"
            className={classes.select}
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
            onChange={(e) => setSort(e.target.value)}
            label="Sort By"
            className={classes.select}
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
          <InputLabel id="releaseYear">From</InputLabel>
          <Select
            error
            labelId="demo-simple-select-outlined-label"
            id="demo-simple-select-outlined"
            value={yearGte}
            onChange={(e) => setYearGte(e.target.value)}
            label="Release Year"
            className={classes.select}
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
          <InputLabel color="primary" id="releaseYear">
            To
          </InputLabel>
          <Select
            error
            labelId="demo-simple-select-outlined-label"
            id="demo-simple-select-outlined"
            value={yearLte}
            onChange={(e) => setYearLte(e.target.value)}
            label="Release Year"
            className={classes.select}
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
          <InputLabel id="releaseYear">Region</InputLabel>
          <Select
            error
            labelId="demo-simple-select-outlined-label"
            id="demo-simple-select-outlined"
            value={country}
            onChange={(e) => setCountry(e.target.value)}
            label="Release Year"
            className={classes.select}
          >
            {isoCountries.map((region, index) => {
              return (
                <MenuItem value={region.ccode} key={index}>
                  {region.cname}
                </MenuItem>
              );
            })}
          </Select>
        </FormControl>
        <Link
          // to={`/movies/${genre}/${cert}/${sort}/${yearGte}/${yearLte}/${country}/${lang}`}
          to={`/movies/${genre}/${cert}/${sort}/${yearGte}/${yearLte}/${country}`}
          style={{ textDecoration: "none" }}
        >
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
      </Container>
    </div>
  );
}