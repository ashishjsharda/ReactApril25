import React from 'react';
import ReactDOM from 'react-dom';

function Hello(props)
{
  return <h1> Hello {props.msg} </h1>
}

function Greet()
{
  return(
    <div>
      <Hello msg="Rick"></Hello>
      <Hello msg="Nick"></Hello>
      </div>
  );
}
ReactDOM.render(
  <React.StrictMode>
    <Greet />
  </React.StrictMode>,
  document.getElementById('root')
);
