import { makeStyles, Theme } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme: Theme) => ({
  startButtonArea: {
    display: 'flex',
    justifyContent: 'center',
  },
  startButton: {
    backgroundColor: '#f87171',
    color: 'white',
    margin: '10px',
    padding: '10px',
    borderRadius: '10%',
    '&:hover': {
      opacity: 0.8,
      backgroundColor: '#f87171',
    },
    '&:active': {
      opacity: 0.5,
    },
  },
}));

const GameStartButton: React.FC<{
  gameMsgHide: () => void,
  handDisplay: () => void,
  randomHandGenerate: () => void,
  startButtonHide: () => void,
  actionButtonDisplay: () => void,
  answerHide: () => void,
}> = ({ gameMsgHide, handDisplay, randomHandGenerate, startButtonHide, actionButtonDisplay, answerHide, }) => {

  const classes = useStyles();

  const startButtonClick = () => {
    gameMsgHide();
    randomHandGenerate();
    handDisplay();
    startButtonHide();
    actionButtonDisplay();
    answerHide();
  };

  return (
    <>
      <Box className={classes.startButtonArea}>
        <Button
          onClick={startButtonClick}
          className={classes.startButton}
        >
          スタート
        </Button>
      </Box>
    </>
  );
};

export default GameStartButton;