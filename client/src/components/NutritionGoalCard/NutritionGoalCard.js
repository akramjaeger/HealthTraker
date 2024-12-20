import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Checkbox from '@material-ui/core/Checkbox';
import Grid from '@material-ui/core/Grid';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ChartsBar from './../ChartsBar';

const styles = (theme) => ({
  root: {
    ...theme.mixins.gutters(),
    padding: theme.spacing(2),
    margin: '4% 5%',
  },
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  listItem: {
    padding: theme.spacing(1),
  },
  progressPaper: {
    margin: theme.spacing(2, 0),
    padding: theme.spacing(1),
  },
  submitButton: {
    marginTop: theme.spacing(2),
    width: '100%',
  },
});

class NutritionGoalCard extends React.Component {
  render() {
    const { classes } = this.props;
    const questions = [
      ['fruitAndVegs', 'Had 5-9 Servings of fruits and vegetables'],
      ['healthyFat', 'Consumed at least 26 grams of healthy fat'],
      ['proteinBreakfast', 'Eat at least 15 grams of protein for breakfast'],
      ['newFruit', 'Tried a new fruit or vegetable'],
      ['newReceipe', 'Experimented with a new healthy recipe'],
      ['fastFood', 'Avoided fast food'],
      ['noMeat', 'Refrained from eating meat'],
      ['skipBreakfast', "Didn't skip breakfast"],
      ['noSugar', 'Avoided sugar'],
      ['noAlcohol', 'Refrained from alcohol'],
    ];
    return (
      <div>
        <Grid container spacing={3}>
          {/* Nutrition Goals Section */}
          <Grid item xs={12} sm={6}>
            <Paper className={classes.root} elevation={1}>
              <Typography align="center" variant="h4">
                Nutrition Goal
              </Typography>
              <Typography align="center" variant="body1">
                Each goal below counts as +1 point. See if you can meet all your goals!
              </Typography>
              <Paper className={classes.progressPaper}>
                <Typography align="center" variant="body2">
                  Current Progress: {this.props.progress}
                </Typography>
              </Paper>
              <List>
                {questions.map((question) => (
                  <ListItem key={question[0]} dense className={classes.listItem}>
                    <Checkbox
                      value={question[0]}
                      checked={this.props.toggled[question[0]]}
                      onChange={this.props.handleChange(question[0])}
                      color="primary"
                    />
                    <ListItemText primary={question[1]} />
                  </ListItem>
                ))}
              </List>
              <Button
                onClick={this.props.handleSubmit}
                variant="contained"
                color="primary"
                className={classes.submitButton}
              >
                Submit
              </Button>
            </Paper>
          </Grid>

          {/* History Section */}
          <Grid item xs={12} sm={6}>
            <Paper className={classes.root} elevation={1}>
              <Typography variant="h6" align="center">
                History (Last 7 Days)
              </Typography>
              <ChartsBar
                quantities={this.props.quantities}
                dates={this.props.dates}
              />
            </Paper>
          </Grid>
        </Grid>
      </div>
    );
  }
}

NutritionGoalCard.propTypes = {
  classes: PropTypes.object.isRequired,
  progress: PropTypes.number.isRequired,
  toggled: PropTypes.object.isRequired,
  handleChange: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  quantities: PropTypes.array.isRequired,
  dates: PropTypes.array.isRequired,
};

export default withStyles(styles)(NutritionGoalCard);
