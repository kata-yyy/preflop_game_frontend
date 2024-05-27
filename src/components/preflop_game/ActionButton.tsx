import { makeStyles, Theme } from "@material-ui/core/styles";
import { Action } from "interfaces/preflop_game";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme: Theme) => ({
  handArea: {
    display: 'flex',
    justifyContent: 'center',
  },
  callButton: {
    backgroundColor: '#facc15',
    color: 'white',
    margin: '10px',
    padding: '10px',
    borderRadius: '10%',
    '&:hover': {
      opacity: 0.8,
      backgroundColor: '#facc15', // Hover時に背景色を維持する
    },
    '&:active': {
      opacity: 0.5,
    },
  },
  raiseButton: {
    backgroundColor: '#f87171',
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
  foldButton: {
    backgroundColor: '#3b82f6',
    color: 'white',
    margin: '10px',
    padding: '10px',
    borderRadius: '10%',
    '&:hover': {
      opacity: 0.8,
      backgroundColor: '#3b82f6', // Hover時に背景色を維持する
    },
    '&:active': {
      opacity: 0.5,
    },
  },
}));

const ActionButton: React.FC<{
  action: Action,
  correct_action: Action,
  actionButtonHide: () => void,
  nextButtonDisplay: () => void,
  answerDisplay: (ans: string) => void,
}> =({ action, correct_action, actionButtonHide, nextButtonDisplay, answerDisplay, }) => {

  const classes = useStyles();

  const actionButtonClick = () => {
    actionButtonHide();
    nextButtonDisplay();

    if (action == correct_action) {
      answerDisplay("正解");
    } else {
      answerDisplay("不正解");
    }
  };

  let buttonClass;
  if (action === 'Call') {
    buttonClass = classes.callButton;
  } else if (action === 'Raise') {
    buttonClass = classes.raiseButton;
  } else if (action === 'Fold') {
    buttonClass = classes.foldButton;
  }

  return (
    <div>
      <Box className={classes.handArea}>
        <Button
          onClick={actionButtonClick}
          className={buttonClass}
        >
          {action}
        </Button>
      </Box>
    </div>
  );
};

export default ActionButton;