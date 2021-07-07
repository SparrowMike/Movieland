import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
// import FormHelperText from "@material-ui/core/FormHelperText";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import { Button, Typography } from "@material-ui/core";
import { Link } from "react-router-dom";
import { Container } from "@material-ui/core";
// import TextField from "@material-ui/core/TextField";

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },

  button: {},
  margin: theme.spacing(3),

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

  const isoCountries = [
    { ccode: "AF", cname: "Afghanistan" },
    { ccode: "AL", cname: "Albania" },
    { ccode: "DZ", cname: "Algeria" },
    { ccode: "AD", cname: "Andorra" },
    { ccode: "AO", cname: "Angola" },
    { ccode: "AR", cname: "Argentina" },
    { ccode: "AM", cname: "Armenia" },
    { ccode: "AU", cname: "Australia" },
    { ccode: "AT", cname: "Austria" },
    { ccode: "AZ", cname: "Azerbaijan" },
    { ccode: "BS", cname: "Bahamas" },
    { ccode: "BH", cname: "Bahrain" },
    { ccode: "BD", cname: "Bangladesh" },
    { ccode: "BB", cname: "Barbados" },
    { ccode: "BY", cname: "Belarus" },
    { ccode: "BE", cname: "Belgium" },
    { ccode: "BA", cname: "Bosnia And Herzegovina" },
    { ccode: "BR", cname: "Brazil" },
    { ccode: "BG", cname: "Bulgaria" },
    { ccode: "KH", cname: "Cambodia" },
    { ccode: "CM", cname: "Cameroon" },
    { ccode: "CA", cname: "Canada" },
    { ccode: "CL", cname: "Chile" },
    { ccode: "CN", cname: "China" },
    { ccode: "CO", cname: "Colombia" },
    { ccode: "CG", cname: "Congo" },
    { ccode: "CR", cname: "Costa Rica" },
    { ccode: "HR", cname: "Croatia" },
    { ccode: "CU", cname: "Cuba" },
    { ccode: "CY", cname: "Cyprus" },
    { ccode: "CZ", cname: "Czech Republic" },
    { ccode: "DK", cname: "Denmark" },
    { ccode: "DM", cname: "Dominica" },
    { ccode: "DO", cname: "Dominican Republic" },
    { ccode: "EC", cname: "Ecuador" },
    { ccode: "EG", cname: "Egypt" },
    { ccode: "SV", cname: "El Salvador" },
    { ccode: "EE", cname: "Estonia" },
    { ccode: "FJ", cname: "Fiji" },
    { ccode: "FI", cname: "Finland" },
    { ccode: "FR", cname: "France" },
    { ccode: "GE", cname: "Georgia" },
    { ccode: "DE", cname: "Germany" },
    { ccode: "GH", cname: "Ghana" },
    { ccode: "GR", cname: "Greece" },
    { ccode: "GL", cname: "Greenland" },
    { ccode: "GD", cname: "Grenada" },
    { ccode: "GU", cname: "Guam" },
    { ccode: "GT", cname: "Guatemala" },
    { ccode: "GN", cname: "Guinea" },
    { ccode: "GY", cname: "Guyana" },
    { ccode: "HT", cname: "Haiti" },
    { ccode: "HN", cname: "Honduras" },
    { ccode: "HK", cname: "Hong Kong" },
    { ccode: "HU", cname: "Hungary" },
    { ccode: "IS", cname: "Iceland" },
    { ccode: "IN", cname: "India" },
    { ccode: "ID", cname: "Indonesia" },
    { ccode: "IQ", cname: "Iraq" },
    { ccode: "IE", cname: "Ireland" },
    { ccode: "IL", cname: "Israel" },
    { ccode: "IT", cname: "Italy" },
    { ccode: "JM", cname: "Jamaica" },
    { ccode: "JP", cname: "Japan" },
    { ccode: "JO", cname: "Jordan" },
    { ccode: "KZ", cname: "Kazakhstan" },
    { ccode: "KE", cname: "Kenya" },
    { ccode: "KR", cname: "Korea" },
    { ccode: "LV", cname: "Latvia" },
    { ccode: "LB", cname: "Lebanon" },
    { ccode: "LS", cname: "Lesotho" },
    { ccode: "LR", cname: "Liberia" },
    { ccode: "LT", cname: "Lithuania" },
    { ccode: "LU", cname: "Luxembourg" },
    { ccode: "MO", cname: "Macao" },
    { ccode: "MK", cname: "Macedonia" },
    { ccode: "MG", cname: "Madagascar" },
    { ccode: "MW", cname: "Malawi" },
    { ccode: "MY", cname: "Malaysia" },
    { ccode: "MV", cname: "Maldives" },
    { ccode: "ML", cname: "Mali" },
    { ccode: "MT", cname: "Malta" },
    { ccode: "MH", cname: "Marshall Islands" },
    { ccode: "MQ", cname: "Martinique" },
    { ccode: "MX", cname: "Mexico" },
    { ccode: "MC", cname: "Monaco" },
    { ccode: "MN", cname: "Mongolia" },
    { ccode: "MA", cname: "Morocco" },
    { ccode: "NL", cname: "Netherlands" },
    { ccode: "NZ", cname: "New Zealand" },
    { ccode: "NG", cname: "Nigeria" },
    { ccode: "NO", cname: "Norway" },
    { ccode: "PK", cname: "Pakistan" },
    { ccode: "PW", cname: "Palau" },
    { ccode: "PA", cname: "Panama" },
    { ccode: "PY", cname: "Paraguay" },
    { ccode: "PE", cname: "Peru" },
    { ccode: "PH", cname: "Philippines" },
    { ccode: "PL", cname: "Poland" },
    { ccode: "PT", cname: "Portugal" },
    { ccode: "PR", cname: "Puerto Rico" },
    { ccode: "QA", cname: "Qatar" },
    { ccode: "RE", cname: "Reunion" },
    { ccode: "RO", cname: "Romania" },
    { ccode: "RU", cname: "Russian Federation" },
    { ccode: "WS", cname: "Samoa" },
    { ccode: "SM", cname: "San Marino" },
    { ccode: "ST", cname: "Sao Tome And Principe" },
    { ccode: "SA", cname: "Saudi Arabia" },
    { ccode: "SN", cname: "Senegal" },
    { ccode: "RS", cname: "Serbia" },
    { ccode: "SL", cname: "Sierra Leone" },
    { ccode: "SG", cname: "Singapore" },
    { ccode: "SK", cname: "Slovakia" },
    { ccode: "SI", cname: "Slovenia" },
    { ccode: "SB", cname: "Solomon Islands" },
    { ccode: "SO", cname: "Somalia" },
    { ccode: "ZA", cname: "South Africa" },
    { ccode: "ES", cname: "Spain" },
    { ccode: "LK", cname: "Sri Lanka" },
    { ccode: "SD", cname: "Sudan" },
    { ccode: "SZ", cname: "Swaziland" },
    { ccode: "SE", cname: "Sweden" },
    { ccode: "CH", cname: "Switzerland" },
    { ccode: "TW", cname: "Taiwan" },
    { ccode: "TZ", cname: "Tanzania" },
    { ccode: "TH", cname: "Thailand" },
    { ccode: "TN", cname: "Tunisia" },
    { ccode: "TR", cname: "Turkey" },
    { ccode: "UA", cname: "Ukraine" },
    { ccode: "AE", cname: "United Arab Emirates" },
    { ccode: "GB", cname: "United Kingdom" },
    { ccode: "US", cname: "United States" },
    { ccode: "UY", cname: "Uruguay" },
    { ccode: "UZ", cname: "Uzbekistan" },
    { ccode: "VE", cname: "Venezuela" },
    { ccode: "VN", cname: "Viet Nam" },
  ];

  const classes = useStyles();
  const [cert, setCert] = useState("R");
  const [genre, setGenre] = useState("28");
  const [sort, setSort] = useState("popularity.desc");
  const [yearGte, setYearGte] = useState("2020");
  const [yearLte, setYearLte] = useState("2021");
  const [country, setCountry] = useState("US");

  let newDate = new Date();
  let currentYear = newDate.getFullYear();
  const allYears = [];

  for (let i = currentYear; i >= 1950; i--) allYears.push(i);

  const handleGenre = (event) => {
    setGenre(event.target.value);
    console.log(event.target.value);
  };

  const handleSort = (event) => {
    setSort(event.target.value);
    console.log(event.target.value);
  };

  const handleAge = (event) => {
    setCert(event.target.value);
    console.log(event.target.value);
  };

  const handleYearGte = (event) => {
    setYearGte(event.target.value);
    console.log(event.target.value);
  };

  const handleYearLte = (event) => {
    setYearLte(event.target.value);
    console.log(event.target.value);
  };

  const handleCountry = (event) => {
    setCountry(event.target.value);
    console.log(event.target.value);
  };

  return (
    <div className="tvshows">
      <Container maxWidth="sm" className={classes.textShadow}>
        <Typography variant="h2" color="primary">
          Discover new movies today!
        </Typography>
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
            onChange={handleYearGte}
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
          <InputLabel color="Primary" id="releaseYear">
            To
          </InputLabel>
          <Select
            error
            labelId="demo-simple-select-outlined-label"
            id="demo-simple-select-outlined"
            value={yearLte}
            onChange={handleYearLte}
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
          {/* <Typography color="Primary">To</Typography> */}

          <Select
            error
            labelId="demo-simple-select-outlined-label"
            id="demo-simple-select-outlined"
            value={country}
            onChange={handleCountry}
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
      </Container>
      <Link
        to={`/movies/${genre}/${cert}/${sort}/${yearGte}/${yearLte}/${country}`}
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
    </div>
  );
}
