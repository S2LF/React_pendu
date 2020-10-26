import React from 'react'
import PropTypes from 'prop-types'

import './Letter.css'

const Letter = ({letter, feedback, index, onClick}) => (
    <div className={`letter ${feedback}`} 
         onClick={() => onClick(index)}>
        <span>
            {feedback === 'use' ? '_' : letter}
        </span>
    </div>
)

Letter.propTypes = {
    letter: PropTypes.string.isRequired,
    feedback: PropTypes.oneOf([
        'not_use',
        'use'
    ]),
    index: PropTypes.number.isRequired,
    onClick: PropTypes.func.isRequired,
}

export default Letter