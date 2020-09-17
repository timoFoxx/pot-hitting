import React from 'react'

import {Cold, GameEvent, Warm, Win} from '../lib/Game'
import {StyledMessageContainerWon, StyledMessageContainerCold, StyledMessageContainerWarm} from "../styles/Layout";

interface ScoreProps {
    event: GameEvent | null
}

export const WarmColdScore = ({ event} : ScoreProps) => {
    if (event instanceof Win) {
        return (<StyledMessageContainerWon>Congratulations, You scored amazingly good, like {event.score}!</StyledMessageContainerWon>)
    } else if (event instanceof Cold) {
        return (<StyledMessageContainerCold>You are getting: Colder</StyledMessageContainerCold>)
    } else if (event instanceof Warm) {
        return (<StyledMessageContainerWarm>You are getting: Warm</StyledMessageContainerWarm>)
    } else {
        return null
    }
}
