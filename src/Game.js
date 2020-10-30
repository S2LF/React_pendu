import React from 'react'
import PropTypes from 'prop-types'

import './Game.css'

const HIDDEN_SYMBOL = ' _ '


const Game = ({ letter, index, status }) => (
            <span className={letter} 
                  key={index} 
                  index={index}>
                    { status === 'hidden' ? HIDDEN_SYMBOL : letter }
            </span>
)

Game.protoTypes = {
    status: PropTypes.oneOf([
        'hidden',
        'visible'
    ]),
}

export default Game