import { makeStyles, Theme } from "@material-ui/core/styles";
import { Action } from "interfaces/preflop_game";
import Box from "@material-ui/core/Box";

const useStyles = makeStyles((theme: Theme) => ({
  answerArea: {
    display: 'flex',
    justifyContent: 'center',
  },
  correctAnswer: {
    fontSize: '2rem',
    color: 'red',
  },
  incorrectAnswer: {
    fontSize: '2rem',
    color: 'blue',
  },
}));

const Answer: React.FC<{
  answer: string,
  correct_action: Action,
}> =({ answer, correct_action, }) => {

  const classes = useStyles();

  let isCorrect = false;

  if (answer === '正解') {
    isCorrect = true;
  };

  return (
    <>
      <Box className={classes.answerArea}>
        {
          isCorrect &&
          <Box className={classes.correctAnswer}>
            {answer}
          </Box>
        }
        {
          !isCorrect &&
          <Box className={classes.incorrectAnswer}>
            {answer}
          </Box>
        }
      </Box>
    </>
  );
};

export default Answer;