import React from 'react'
import { render } from '@testing-library/react'
import Button from './index'


test("This Button Should not supposed to be clicked",()=>{
    const { container } = render(<Button isDisabled></Button>)

    expect(container.querySelector('span.disabled')).toBeInTheDocument()
})