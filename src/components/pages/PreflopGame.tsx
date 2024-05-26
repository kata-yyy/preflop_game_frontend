import React, { useState } from 'react';
import Box from "@material-ui/core/Box";
import { makeStyles, Theme } from "@material-ui/core/styles";
import Hand from 'components/preflop_game/Hand';
import { CardObj } from "interfaces/preflop_game";

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
}));

const PreflopGame: React.FC = () => {
  const classes = useStyles();
  const testHand: CardObj[] = [{suit: "♥️", num: "A"}, {suit: "♣️", num: "2"}];

  return(
    <>
      <Box className={classes.handArea}>
        <Hand hand={testHand} />
      </Box>
    </>
  );
};

export default PreflopGame;