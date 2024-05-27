import { card_suit } from "data/preflop_game";
import { CardObj } from "interfaces/preflop_game";
import { makeStyles, Theme } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";

const useStyles = makeStyles({
  card: {
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: 'white',
    width: '140px',
    height: '210px',
    margin: '10px',
    border: '3px solid black',
    borderRadius: '10px',
  },
  cardContent: {
    textAlign: 'center',
    justifyContent: 'center',
  },
  cardNumber: {
    width: '140px',
    height: '100px',
    fontSize: '65px',
  },
  cardSuit: {
    width: '140px',
    height: '110px',
    fontSize: '80px',
  },
  redText: {
    color: '#ef4444',
  },
  blackText: {
    color: 'black',
  },
});

const CardDisplay: React.FC<{ card: CardObj }> = ({ card }) => {
  const classes = useStyles();

  const isRedSuit: boolean = card.suit === card_suit["Heart"] || card.suit === card_suit["Diamond"];
  const textColorClass = isRedSuit ? classes.redText : classes.blackText;

  return (
    <Box className={classes.card}>
      <Box className={`${classes.cardContent} ${classes.cardNumber} ${textColorClass}`}>
        {card.num}
      </Box>
      <Box className={`${classes.cardContent} ${classes.cardSuit} ${textColorClass}`}>
        {card.suit}
      </Box>
    </Box>
  );
};

export default CardDisplay;