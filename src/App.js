import React from 'react';
import './App.css';

let initialOrder = ['first', 'second', 'third', 'fourth', 'main']
let order = ['first', 'second', 'third', 'fourth', 'main']
let settings = {
  first: {
    left: 310,
    top: 0
  },
  second: {
    left: 310,
    top: 110
  },
  third: {
    left: 310,
    top: 220
  },
  fourth: {
    left: 310,
    top: 330
  },
  main: {
    left: 0,
    top: 150
  }
}

function move(e) {

  const startIndex = order.findIndex(item => item === e.target.id)

  let newOrder = order.filter(item => item !== e.target.id)
  newOrder.push(order[startIndex])

  for (let i = 0; i < newOrder.length; i++) {
    let element = document.getElementById(newOrder[i])
    element.style.top = settings[initialOrder[i]].top + "px"
    element.style.left = settings[initialOrder[i]].left + "px"
  }
  e.target.style.top = order[order.length - 1].top
  e.target.style.left = order[order.length - 1].left
  order = newOrder
}

const App = () => (
  <div className="App" >
    <div
      id="main"
      onClick={move}
      className="transition"
      style={{
        display: 'inline-block',
        position: 'absolute',
        top: settings.main.top,
        left: settings.main.left,
        width: 100,
        height: 100
      }}>
      main
      </div>
    <div
      id="first"
      onClick={move}
      className="transition"
      style={{
        display: 'inline-block',
        position: 'absolute',
        top: settings.first.top,
        left: settings.first.left,
        width: 100,
        height: 100
      }}>
      1
      </div>
    <div
      id="second"
      onClick={move}
      className="transition"
      style={{
        display: 'inline-block',
        position: 'absolute',
        top: settings.second.top,
        left: settings.second.left,
        width: 100,
        height: 100
      }}>
      2
      </div>
    <div
      id="third"
      onClick={move}
      className="transition"
      style={{
        display: 'inline-block',
        position: 'absolute',
        top: settings.third.top,
        left: settings.third.left,
        width: 100,
        height: 100
      }}>
      3
      </div>
    <div
      id="fourth"
      onClick={move}
      className="transition"
      style={{
        display: 'inline-block',
        position: 'absolute',
        top: settings.fourth.top,
        left: settings.fourth.left,
        width: 100,
        height: 100
      }}>
      4
      </div>
  </div >
);


export default App;
