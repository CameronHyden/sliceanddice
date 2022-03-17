import React from 'react'
import games from '../../data/game-categories'

const GameListCard = ({name, category}) => {


  return (
    <div>GameListCard
        {category}
        {name}
        

    </div>

  )
}

export default GameListCard; 
