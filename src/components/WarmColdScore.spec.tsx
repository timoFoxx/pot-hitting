import React from 'react'
import renderer from 'react-test-renderer'
import { Win } from '../lib/Game'

import { WarmColdScore} from "./WarmColdScore";

describe('WarmColdScore', () => {
    test('should render according to the snapshot when won', () => {
        expect(renderer.create(<WarmColdScore event={new Win(0)} />).toJSON()).toMatchSnapshot()
    })
})
