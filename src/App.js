import React, { Component } from 'react'


import './App.css';

import Letter from './Letter'

const SIZE = 24
const SYMBOLS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
const LETTERS = SYMBOLS.split('')

console.log(LETTERS)
class App extends Component {





handleLetterClick(letter){
  console.log(letter, 'clicked')
}


render(){

  return(
    <div className="clavier">
      {LETTERS.map((letter, index) => (
        <Letter letter={letter} key={index} index={index} feedback="not_use" onClick={this.handleLetterClick}/>
      ))}
    </div>  
  )
  
}
  

}

export default App;
