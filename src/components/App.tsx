import React, { useState } from 'react'
import {StyledContainer, StyledPrimaryHeadline, StyledMessageContainer} from "../styles/Layout";
import {PotGameCanvas} from "./PotGameCanvas";
import { GameLoop, Point, GameEvent, Win } from '../lib/Game'
import { WarmColdScore } from './WarmColdScore'

export interface AppProps {
    gameLoop: GameLoop
    height: number;
    width: number;
}


export const App = (props: AppProps) => {
    const [lastEvent, setGameEvent] = useState<GameEvent | null>(null);

    const onClick = (p: Point) => {
        if (!(lastEvent instanceof Win)) {
            const newEvent: GameEvent= props.gameLoop(p)
            setGameEvent(newEvent)
        }
    }

    return (
      <>
          <StyledContainer>
              <StyledPrimaryHeadline>Pott-hitting Game</StyledPrimaryHeadline>
              <PotGameCanvas width={props.width} height={props.height} onClick={onClick} gameEvent={lastEvent} />
              <WarmColdScore event={lastEvent} />
          </StyledContainer>
      </>
    );
}
