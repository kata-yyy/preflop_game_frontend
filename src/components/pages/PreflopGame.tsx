import React, { useState } from 'react';
import Box from "@material-ui/core/Box";
import { makeStyles, Theme } from "@material-ui/core/styles";
import Typography from '@material-ui/core/Typography';
import Hand from 'components/preflop_game/Hand';
import GameStartButton from 'components/preflop_game/GameStartButton';
import ActionButton from 'components/preflop_game/ActionButton';
import NextButton from 'components/preflop_game/NextButton';
import Answer from 'components/preflop_game/Answer';
import { Action, CardObj, Question } from "interfaces/preflop_game";
import { card_num, card_suit, pair_nums, suited_nums, off_suited_nums, suited_suits, off_suited_suits, preflop_hand_table } from 'data/preflop_game';

const useStyles = makeStyles((theme: Theme) => ({
  handArea: {
    height: '300px',
    width: '800px',
    marginTop: '30px',
    marginLeft: 'auto',
    marginRight: 'auto',
    backgroundColor: 'skyblue',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  positionArea: {
    height: '60px',
    width: '800px',
    margin: '0 auto',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  actionButtonArea: {
    height: '100px',
    width: '800px',
    margin: '0 auto',
  },
  flexContainer: {
    display: 'flex',
    justifyContent: 'center',
  },
  answerArea: {
    height: '50px',
    width: '800px',
    margin: '0 auto',
  },
}));

const PreflopGame: React.FC = () => {
  const classes = useStyles();
  const [isGameMsgDisplay, setIsGameMsgDisplay] = useState<boolean>(true);
  const [isHandDisplay, setIsHandDisplay] = useState<boolean>(false);
  const [isStartButtonDisplay, setIsStartButtonDisplay] = useState<boolean>(true);
  const [isActionButtonDisplay, setIsActionButtonDisplay] = useState<boolean>(false);
  const [isAnswerDisplay, setIsAnswerDisplay] = useState<boolean>(false);
  const [isNextButtonDisplay, setIsNextButtonDisplay] = useState<boolean>(false);
  const [question, setQuestion] = useState<Question>({ hand: [], correct_action: null });
  const [answer, setAnswer] = useState<string>("");
  
  const testHand: CardObj[] = [{suit: "♥️", num: "A"}, {suit: "♣️", num: "2"}];

  const randomHandGenerate = (): void => {
    const random_num: number = Math.floor(Math.random() * 13);
    
    let nums: string;
    let suits: string[];
    let action: Action;
    
    if (random_num < 1) {
      nums = pair_nums[Math.floor(Math.random() * pair_nums.length)];
      suits = off_suited_suits[Math.floor(Math.random() * off_suited_suits.length)];
      action = preflop_hand_table[nums]
    } else if (random_num < 7) {
      nums = off_suited_nums[Math.floor(Math.random() * off_suited_nums.length)];
      suits = off_suited_suits[Math.floor(Math.random() * off_suited_suits.length)];
      action = preflop_hand_table[nums + "o"]
    } else {
      nums = suited_nums[Math.floor(Math.random() * suited_nums.length)];
      suits = suited_suits[Math.floor(Math.random() * suited_suits.length)];
      action = preflop_hand_table[nums + "s"]
    }
    
    setQuestion({
      hand: [
        { num: card_num[nums[0]], suit: card_suit[suits[0]] },
        { num: card_num[nums[1]], suit: card_suit[suits[1]] }
      ],
      correct_action: action
    });
  };

  const gameMsgDisplay = (): void => {
    setIsGameMsgDisplay(true);
  };

  const gameMsgHide = (): void => {
    setIsGameMsgDisplay(false);
  };

  const handDisplay = (): void => {
    setIsHandDisplay(true);
  };

  const handHide = (): void => {
    setIsHandDisplay(false);
  };

  const startButtonDisplay = (): void => {
    setIsStartButtonDisplay(true);
  };

  const startButtonHide = (): void => {
    setIsStartButtonDisplay(false);
  };

  const actionButtonDisplay = (): void => {
    setIsActionButtonDisplay(true);
  };

  const actionButtonHide = (): void => {
    setIsActionButtonDisplay(false);
  };

  const nextButtonDisplay = (): void => {
    setIsNextButtonDisplay(true);
  };

  const nextButtonHide = (): void => {
    setIsNextButtonDisplay(false);
  };

  const answerDisplay = (ans: string): void => {
    setAnswer(ans);
    setIsAnswerDisplay(true);
  };

  const answerHide = (): void => {
    setIsAnswerDisplay(false);
  };

  return(
    <>
      <Box className={classes.handArea}>
        {
          isGameMsgDisplay &&
          <>
            <Typography style={{ fontSize: '2rem' }}>
              プリフロップハンドをランダムに表示します<br></br>
              正しいアクションを選択して下さい
            </Typography>
        </>
        }
        {isHandDisplay && <Hand hand={question.hand} />}
      </Box>
      <Box className={classes.positionArea}>
        <Typography style={{ fontSize: '2rem' }}>
          ポジション　BTN
        </Typography>
      </Box>
      <Box className={classes.actionButtonArea}>
        {
          isStartButtonDisplay &&
          <GameStartButton
            gameMsgHide={gameMsgHide}
            handDisplay={handDisplay}
            randomHandGenerate={randomHandGenerate}
            startButtonHide={startButtonHide}
            actionButtonDisplay={actionButtonDisplay}
            answerHide={answerHide}
          />
        }
        {
          isActionButtonDisplay &&
          <Box className={classes.flexContainer}>
            <ActionButton
              action={"Fold"}
              correct_action={question.correct_action}
              actionButtonHide={actionButtonHide}
              nextButtonDisplay={nextButtonDisplay}
              answerDisplay={answerDisplay}
            />
            <ActionButton
              action={"Call"}
              correct_action={question.correct_action}
              actionButtonHide={actionButtonHide}
              nextButtonDisplay={nextButtonDisplay}
              answerDisplay={answerDisplay}
            />
            <ActionButton
              action={"Raise"}
              correct_action={question.correct_action}
              actionButtonHide={actionButtonHide}
              nextButtonDisplay={nextButtonDisplay}
              answerDisplay={answerDisplay}
            />
          </Box>
        }
        {
          isNextButtonDisplay &&
          <Box className={classes.flexContainer}>
            <NextButton
              handDisplay={handDisplay}
              randomHandGenerate={randomHandGenerate}
              nextButtonHide={nextButtonHide}
              actionButtonDisplay={actionButtonDisplay}
              answerHide={answerHide}
            />
          </Box>
        }
      </Box>
      <Box className={classes.answerArea}>
        {
          isAnswerDisplay &&
          <Answer 
            answer={answer}
            correct_action={question.correct_action}
          />
        }
      </Box>
    </>
  );
};

export default PreflopGame;