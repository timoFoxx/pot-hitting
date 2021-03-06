import React, { useEffect, useState } from 'react'
import { useRef } from 'react'
import { StyledPotGame } from "../styles/Layout";
import {PotCoords} from "../lib/GameData";

import {GameEvent, Point, Warm, Win} from '../lib/Game'

interface PotGameCanvasProps {
    width: number
    height: number
    onClick: (p: Point) => void
    gameEvent: GameEvent | null
}


export const PotGameCanvas = (props: PotGameCanvasProps) => {

    const canvasRef = useRef<HTMLCanvasElement>(null);

    const getCoordinates = (event: MouseEvent): Point  => {
        if (canvasRef.current) {
            const canvas: HTMLCanvasElement = canvasRef.current;
            return new Point(event.pageX - canvas.offsetLeft, event.pageY - canvas.offsetTop)
        } return new Point(event.x, event.y);
    };



    useEffect(() => {
        if (!canvasRef.current) {
            return;
        }

        //render pot, if won
        if (canvasRef.current &&  props.gameEvent instanceof Win) {
            const context = canvasRef.current.getContext('2d')
            if (context) {
                context.fillStyle = '#000000'
                context.fillRect(PotCoords.potX, PotCoords.potY, 20, 20);

                canvasRef.current.removeEventListener('click', (event: MouseEvent) => {
                    props.onClick(getCoordinates(event));
                }, false);

            }

        }

        canvasRef.current.addEventListener('click', (event: MouseEvent) => {

            props.onClick(getCoordinates(event));
        })

    },[])


    return <StyledPotGame ref={canvasRef} height={props.height} width={props.width} />;
}



