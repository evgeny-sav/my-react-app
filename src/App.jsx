import React from 'react';
import classnames from 'classnames';
// eslint-disable-next-line
import globalStyles from 'bootstrap/scss/bootstrap.scss';
import classes from  './App.scss';

const cx = classnames.bind(globalStyles, classes);

function App() {
  return (
    <div className={cx(classes.App, globalStyles.container)}>
      <h1>Hello World!</h1>
    </div>
  );
}

export default App;
