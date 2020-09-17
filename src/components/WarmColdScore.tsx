import React from 'react'

import {Cold, GameEvent, Warm, Win} from '../lib/Game'
import {StyledMessageContainer, StyledMessageContainerCold, StyledMessageContainerWarm} from "../styles/Layout";

interface ScoreProps {
    event: GameEvent | null
}

export const WarmColdScore = ({ event} : ScoreProps) => {
    if (event instanceof Win) {
        return (<StyledMessageContainer>Congratulations, You scored amazingly good, like {event.score}!</StyledMessageContainer>)
    } else if (event instanceof Cold) {
        return (<StyledMessageContainerCold>Cold</StyledMessageContainerCold>)
    } else if (event instanceof Warm) {
        return (<StyledMessageContainerWarm>Warm</StyledMessageContainerWarm>)
    } else {
        return null
    }
}
