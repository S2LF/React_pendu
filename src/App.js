import React, { Component } from 'react'
import shuffle from 'lodash.shuffle'


import './App.css';
import GuessCount from './GuessCount'
import Game from './Game'
import Letter from './Letter'

const SYMBOLS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
const LETTERS = SYMBOLS.split('')
const WORDS = ['MARMOTTE', 'TANOUKI', 'SOURIS', 'LAPIN']

class App extends Component {

  state = {
    guesses: 0,
    tried: [],
    shuffleWord : this.generateWord(),
    status: 'hidden'
  }

generateWord(){
  const word = shuffle(WORDS)
  const wordArr = word[0].split('')
  return wordArr
}

// Arrow fx for binding
handleLetterClick = letter => {
  const { tried, guesses, shuffleWord, status } = this.state

  const newGuesses = guesses+1

  if(shuffleWord.includes(letter))
      this.setStatus({status: 'visible'})


  // Gestion du clavier
  tried.push(letter)
  this.setState({tried: tried, guesses: newGuesses})  
  tried.forEach(el => {
    this.getFeedbackForLetter(el)
  })
}


getFeedbackForLetter(letter){
  const { tried } = this.state
  const used_letter = tried.includes(letter)
  // console.log(letter, used_letter)
  // console.log(tried)
  if(used_letter)
    return 'use'
  if(!used_letter)
    return 'not_use'
  
}

render(){
  const { guesses, shuffleWord, status} = this.state
  return(
    <div>        
    <div className="word">
      <h1>Devine le mot :&nbsp;
        { shuffleWord.map((letter, index) => (
          <Game shuffleWord={shuffleWord} status={status} letter={letter} key={index} />
        ))}</h1>
    </div> 
        <GuessCount guesses={guesses} />  
      <div className="clavier">
        {LETTERS.map((letter, index) => (
          <Letter letter={letter} 
          key={index} 
          index={index} 
          feedback={this.getFeedbackForLetter(letter)} 
          onClick={this.handleLetterClick}/>
          ))}
      </div>  
    </div>
  )
  
}
  
}

export default App;
