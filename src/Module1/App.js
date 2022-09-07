import logo from './logo.svg';
import './App.css';
import { Card } from './Module1/Card';
import { RoundedImg } from './Module1/RoundedImg';


/**
 * Challenge: Here's a component meant to take an image (`src` prop) and round the edges.
 * It has some styling applied with CSS to ensure it isn't too large on the page, but
 * we want this component to allow for any image source and any kind of border radius to be applied
 * 
 * 1. The component should always receive a `src` prop, and it should always be a string
 * 2. The component should be able to accept only a string or a number for the `borderRadius` prop
 *      (https://reactjs.org/docs/typechecking-with-proptypes.html#proptypes)
 * 3. If it doesn't receive a `borderRadius` prop at all, it should default it to "50%"
 */

function App() {
  return (
    <div className="App">
      <header className="App-header">
  <RoundedImg 
  src="https://picsum.photos/id/237/300/300" 
  />
      </header>
    </div>
  );
}



export default App;
