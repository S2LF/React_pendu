import React, { Component } from 'react'
import shuffle from 'lodash.shuffle'
import difference from 'lodash.difference'


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

  defaultState = {
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
  const { tried, guesses } = this.state

  const newGuesses = guesses+1

  // Gestion du clavier
  tried.push(letter)
  this.setState({tried: tried, guesses: newGuesses})  
  tried.forEach(el => {
    this.getFeedbackForLetter(el)
  })
}

getStatusForLetter(letter){
  const { shuffleWord, tried } = this.state
    // console.log(shuffleWord)
    // console.log(tried)
    if(shuffleWord.includes(letter) && tried.includes(letter)){
      return 'visible'
    }
  return 'hidden'
}

getFeedbackForLetter(letter){
  const { tried } = this.state
  const used_letter = tried.includes(letter)
  
  if(used_letter)
    return 'use'
  if(!used_letter)
    return 'not_use'
}


render(){
  const { guesses, shuffleWord, tried } = this.state
  const won = difference(shuffleWord, tried).length === [].length
  return(
    <div>        
    <div className="word">
      <h1>Devine le mot :&nbsp;
        { shuffleWord.map((letter, index) => (
          <Game status={this.getStatusForLetter(letter)} letter={letter} key={index} />
        ))}
      </h1>
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
      {/* {won && <div className="won" onClick={ () => onClick(window.location.reload())}><h1>GAGNÉ !!</h1></div>} */}
      {won && <div className="won" ><h1>GAGNÉ !!</h1></div>}

    </div>
  )
  
}
  
}

export default App;
