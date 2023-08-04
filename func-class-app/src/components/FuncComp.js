import React, {useState, useEffect} from 'react';
var funcStyle = 'color:blue';
var funcId = 0;
function FuncComp(props) {
  var [number, setNumber] = useState(props.initNumber);
  var [_date, setDate] = useState((new Date()).toString())
  console.log('%cfunc => render ' + (++funcId), funcStyle)

  useEffect(function () {
    console.log('%cfunc => useEffect (componentDidMount & componentDidUpdate) ' + (++funcId), funcStyle);
    document.title = number + ':' + _date;
    return function () {
      console.log('%cfunc => useEffect return (componentDidMount & componentDidUpdate) ' + (++funcId), funcStyle);
    }
  });
  return (
    <div className="container">
      <h2>function style component</h2>
      <p>Number : {number}</p>
      <p>Date: {_date}</p>
      <input
        type="button"
        value="random"
        onClick={
          function () {
            setNumber(Math.random());
          }
        }
      />
      <input
        type="button"
        value="date"
        onClick={
          function () {
            setDate((new Date()).toString());
          }
        }
      />
    </div>
  );
}

export default FuncComp;