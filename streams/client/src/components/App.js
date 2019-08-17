import React from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';

const PageOne = () => {
  return (
    <div>
      Page One
      <br />
      <Link to='/pagetwo'>Navigate to Page Two</Link>
    </div>
  );
};

const PageTwo = () => {
  return (
    <div>
      Page PageTwo
      <br />
      <Link to='/'>Click Me to Page One</Link>
    </div>
  );
};

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <div>
          <Route path='/' exact component={PageOne} />
          <Route path='/pagetwo' exact component={PageTwo} />
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App;
