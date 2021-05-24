import React, { useState ,useEffect} from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import AddIcon from "@material-ui/icons/Add";
import Grid from "@material-ui/core/Grid";
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import DeleteIcon from "@material-ui/icons/Delete";
const useStyles = makeStyles((theme) => ({
  root: {
   margin:'5px',
   backgroundColor:theme.palette.paper
  },
  card:{
      display:'flex',
      minHeight:'100px',
      minWidth:'100px',
      maxWidth:'345px',
      border:'2px solid ',
      margin:theme.spacing(4),
      alignItems:'center',
      justifyContent:'center'
  },
  button: {
    margin: theme.spacing(1),
  },
  buttonContainer: {
    display: "flex",
    flexDirection: "row-reverse",
  },
}));
const App = () => {
  const classes = useStyles();
  const [cardArray, setCardArray] = useState([]);
  useEffect(()=>{

  },[cardArray])
  const onAdd = (event) => {
    event.preventDefault();
    setCardArray([...cardArray, cardArray.length + 1]);
  };

  const onClear = (event) => {
    event.preventDefault();
    setCardArray([]);
  };
  return (
    <>
      <div className={classes.root}>
        <div className={classes.buttonContainer}>
          <Button
            variant="contained"
            color="primary"
            className={classes.button}
            onClick={onAdd}
            startIcon={<AddIcon />}
          >
            Add
          </Button>
          <Button
            variant="contained"
            className={classes.button}
            color="secondary"
            onClick={onClear}
            startIcon={<DeleteIcon />}
          >
            Clear
          </Button>
        </div>
        <Grid container>
          {cardArray.map((item) => {
           return <Grid item>
           <Card className={classes.card}>
           <CardContent className={classes.cardContent}>{item}</CardContent>
           </Card>
            </Grid>;
          })}
        </Grid>
      </div>
    </>
  );
};

export default App;
