import React from 'react';
import { render, screen } from '@testing-library/react';
import Episodes from './Episodes'

const episodes = [{episode_name:"episode 1"}, {episode_name:"episode 2"}]

describe('Episodes tests', ()=> {
    test('renders without errors', ()=>{
        render(<Episodes episodes={episodes}/>)
    })
})