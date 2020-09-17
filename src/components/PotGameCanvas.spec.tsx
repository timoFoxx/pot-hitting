import React from 'react'
import renderer from 'react-test-renderer'
import {Dimensions} from "../lib/GameData";
import { Win } from '../lib/Game'

import { PotGameCanvas} from "./PotGameCanvas";

const onClick = jest.fn();

describe('PotGameCanvas', () => {
    test('should render according to the snapshot when created', () => {
        expect(renderer.create(<PotGameCanvas width={Dimensions.width} height={Dimensions.height} onClick={onClick} gameEvent={new Win(20)} />).toJSON()).toMatchSnapshot()
    })

})
