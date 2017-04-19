/**
 * Created by turjoy on 4/16/17.
 */
import React from 'react';
import Badge from './Badge';
import Users from './User';
import Popular from './Popular';

class App extends React.Component {
  render() {
    return (
      <div className="container">
        <Popular />
      </div>
    )
  }
}

export default App;