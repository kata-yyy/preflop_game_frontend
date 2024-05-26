import { makeStyles, Theme } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme: Theme) => ({
  nextButtonArea: {
    display: 'flex',
    justifyContent: 'center',
  },
  nextButton: {
    backgroundColor: '#f87171', // bg-red-400
    color: 'white',
    margin: '10px',
    padding: '10px',
    borderRadius: '10%',
    '&:hover': {
      opacity: 0.8,
      backgroundColor: '#f87171', // Hover時に背景色を維持する
    },
    '&:active': {
      opacity: 0.5,
    },
  },
}));

const NextButton: React.FC<{
  handDisplay: () => void,
  randomHandGenerate: () => void,
  nextButtonHide: () => void,
  actionButtonDisplay: () => void,
  answerHide: () => void,
}> = ({ handDisplay, randomHandGenerate, nextButtonHide, actionButtonDisplay, answerHide, }) => {

  const classes = useStyles();

  const startButtonClick = () => {
    randomHandGenerate();
    handDisplay();
    nextButtonHide();
    actionButtonDisplay();
    answerHide();
  };

  return (
    <>
      <Box className={classes.nextButtonArea}>
        <Button
          onClick={startButtonClick}
          className={classes.nextButton}
        >
          Next
        </Button>
      </Box>
    </>
  );
};

export default NextButton;