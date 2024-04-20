import React from 'react'
import { shallow } from 'enzyme'
import preloadAll from 'jest-next-dynamic'
import Body from '../Body'

describe('Body component',()=>{
    let wrapper
    beforeAll(async ()=>{
        await preloadAll()
    })
    beforeEach(()=>{
        wrapper=shallow(<Body/>)
    })
    it('should render',()=>{
        expect(wrapper).toBeTruthy()
    })
})