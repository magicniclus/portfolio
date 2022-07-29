import HomePage from "./HomePage"
import { render, screen } from '@testing-library/react'

test ('renders learn title bonjour', ()=>{
    render(<HomePage />);
    const showTitle = screen.getByText("Hello Portfolio !");
    expect(showTitle).toBeInTheDocument()
})
