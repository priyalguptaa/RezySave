import { Typography, Button, AppBar, Toolbar } from '@material-ui/core';
import { Notifications, Sort } from '@material-ui/icons';
import { makeStyles, useTheme } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  appBar: {
    marginTop:'1rem',
    backgroundColor: 'darkblue',
    borderRadius: '0.7rem',
    marginLeft:'1rem',
    width:'100%'
  },
  toolbar: { 
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  heading: {
    display: 'flex',
    alignItems: 'center',
    color: 'white',
  },
  sortButton: {
    color: 'white',
    backgroundColor:'lightblue'
  },
}));

function AlertSummary() {
  const classes = useStyles();
  const theme = useTheme();

  return (
    <AppBar position="static" className={classes.appBar}>
      <Toolbar className={classes.toolbar}>
        <div className={classes.heading}>
          <Notifications style={{ marginRight: theme.spacing(1) }} />
          <Typography variant="h6">
            Alert Summary
          </Typography>
        </div>
    
        <Button
          className={classes.sortButton}
          startIcon={<Sort />}
          
        >
          Sort By
        </Button>
      </Toolbar>
    </AppBar>
  );
}

export default AlertSummary;



