import Card from "components/preflop_game/Card";
import { makeStyles, Theme } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import { CardObj } from "interfaces/preflop_game";

const useStyles = makeStyles((theme: Theme) => ({
  handArea: {
    display: 'flex',
    justifyContent: 'center',
  },
}));

const Hand: React.FC<{ hand: CardObj[] }> = ({ hand }) => {
  const classes = useStyles()

  return (
    <Box className={classes.handArea}>
      <Card card={hand[0]} />
      <Card card={hand[1]} />
    </Box>
  );
};

export default Hand;