import { render, screen } from '@testing-library/react'
import Header from '../Header'

// Changed description in each test for eslint errors

describe( 'Header', () => {

  it( 'should render same text passed into title prop', async () => {
    render( <Header title='My Header' /> )
    const headingElement = screen.getByText( /my header/i )
    expect( headingElement ).toBeInTheDocument()
  } )

} )


// it( 'should render same text passed', () => {
//   render( <Header title='My Header' /> )
//   const headingElement = screen.getByRole( 'heading' )
//   expect( headingElement ).toBeInTheDocument()
// } )

// it( 'should render same text passed as prop', async () => {
//   render( <Header title='My Header' /> )
//   const headingElement = screen.getByRole( 'heading', { name: 'My Header' } )
//   expect( headingElement ).toBeInTheDocument()
// } )

// it( 'should render same text passed', async () => {
//   render( <Header title='My Header' /> )
//   const headingElement = screen.getByTitle( 'Header' )
//   expect( headingElement ).toBeInTheDocument()
// } )

// it( 'should render same text', async () => {
//   render( <Header title='My Header' /> )
//   const headingElement = screen.getByTestId( 'header-1' )
//   expect( headingElement ).toBeInTheDocument()
// } )

// FindBy (expects async function)
// it( 'should render heading text', async () => {
//   render( <Header title='My Header' /> )
//   const headingElement = await screen.findByText( /my header/i )
//   expect( headingElement ).toBeInTheDocument()
// } )

// QueryBy
// it( 'should render', async () => {
//   render( <Header title='My Header' /> )
//   const headingElement = screen.queryByText( /dogs/i )
//   expect( headingElement ).not.toBeInTheDocument()
// } )

// getAllByRole
// it( 'should render some text', async () => {
//   render( <Header title='My Header' /> )
//   const headingElements = screen.getAllByRole( 'heading' )
//   expect( headingElements.length ).toBe( 2 )
// } )