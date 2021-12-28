import { render, screen } from '@testing-library/react'
import TodoFooter from '../TodoFooter'
import { BrowserRouter } from 'react-router-dom'


// Mock Component
const MockTodoFooter = ( { numberOfIncompleteTasks } ) => {
  return (
    <BrowserRouter>
      <TodoFooter numberOfIncompleteTasks={ numberOfIncompleteTasks } />
    </BrowserRouter>
  )
}

describe( 'TodoFooter', () => {

  // getByText()
  it( 'should render five incomplete tasks', async () => {
    render( <MockTodoFooter numberOfIncompleteTasks={ 5 } /> )
    const paragraphElement = screen.getByText( /5 tasks left/i )
    expect( paragraphElement ).toBeInTheDocument()
  } )

  it( 'should render task and not tasks when the number of incomplete tasks is one', async () => {
    render( <MockTodoFooter numberOfIncompleteTasks={ 1 } /> )
    const paragraphElement = screen.getByText( /1 task left/i )
    expect( paragraphElement ).toBeInTheDocument()
  } )
} )



// getByText() with toBeTruthy()
// it( 'should render text of incomplete tasks', async () => {
//   render( <MockTodoFooter numberOfIncompleteTasks={ 1 } /> )
//   const paragraphElement = screen.getByText( /1 task left/i )
//   expect( paragraphElement ).toBeTruthy()
// } )

// toBeVisible()
// it( 'number of incomplete tasks should be visible', async () => {
//   render( <MockTodoFooter numberOfIncompleteTasks={ 1 } /> )
//   const paragraphElement = screen.getByText( /1 task left/i )
//   expect( paragraphElement ).toBeVisible()
// } )

// toContainHTML()
// it( 'should render a paragraph element', async () => {
//   render( <MockTodoFooter numberOfIncompleteTasks={ 1 } /> )
//   const paragraphElement = screen.getByText( /1 task left/i )
//   expect( paragraphElement ).toContainHTML( 'p' )
// } )

// toHaveTextContent()
// it( 'should render text to equal amount of tasks left', async () => {
//   render( <MockTodoFooter numberOfIncompleteTasks={ 1 } /> )
//   const paragraphElement = screen.getByTestId( 'para' )
//   expect( paragraphElement ).toHaveTextContent( '1 task left' )
// } )

// toBeFalsy()
// it( 'should render tasks on page with number', async () => {
//   render( <MockTodoFooter numberOfIncompleteTasks={ 1 } /> )
//   const paragraphElement = screen.getByTestId( 'para' )
//   expect( paragraphElement ).not.toBeFalsy()
// } )

// toBe() from .textContent of paragraphElement
// it( 'should render how many tasks are left', async () => {
//   render( <MockTodoFooter numberOfIncompleteTasks={ 1 } /> )
//   const paragraphElement = screen.getByTestId( 'para' )
//   expect( paragraphElement.textContent ).toBe( '1 task left' )
// } )