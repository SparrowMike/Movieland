import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import InputLabel from "@material-ui/core/InputLabel";
import Input from "@material-ui/core/Input";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";

const useStyles = makeStyles((theme) => ({
  container: {
    display: "flex",
    flexWrap: "wrap",
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
}));

export default function Explore() {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const [type, setType] = useState("");

  const handleChange = (event) => {
    setType(Number(event.target.value) || "");
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button onClick={handleClickOpen} variant="contained" color="secondary">
        Select
      </Button>
      <Dialog
        disableBackdropClick
        disableEscapeKeyDown
        open={open}
        onClose={handleClose}
      >
        <DialogTitle>Fill the form</DialogTitle>
        <DialogContent>
          <form className={classes.container}>
            <FormControl className={classes.formControl}>
              <InputLabel htmlFor="demo-dialog-native">By</InputLabel>
              <Select
                native
                value={type}
                onChange={handleChange}
                input={<Input id="demo-dialog-native" />}
              >
                {/* <option aria-label="None" value="" /> */}
                {/* <option value={10}>Movies</option>
                <option value={20}>TV-Shows</option>
                <option value={30}>All</option> */}
                <MenuItem value={10}>Movies</MenuItem>
                <MenuItem value={20}>TV-Shows</MenuItem>
                <MenuItem value={30}>All</MenuItem>
              </Select>
            </FormControl>
            <FormControl className={classes.formControl}>
              <InputLabel id="demo-dialog-select-label">Trending</InputLabel>
              <Select
                labelId="demo-dialog-select-label"
                id="demo-dialog-select"
                value={type}
                onChange={handleChange}
                input={<Input />}
              >
                <MenuItem value={40}>Daily</MenuItem>
                <MenuItem value={50}>Weekly</MenuItem>
              </Select>
            </FormControl>
          </form>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handleClose} color="primary">
            Ok
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
