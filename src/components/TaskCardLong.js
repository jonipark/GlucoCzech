import React from 'react'
import "../App.css"
import "./TaskCardLong.css"
import { CheckBox } from '@material-ui/icons'

/**
 * @param: (thumbnail, title, type, desc, url)
 * @returns: TaskCardLong
 */


function TaskCardLong({alertType, dateTime, roomId, bedId, message, isDone}) {

  // create handleChange function that will update the isDone value in the database

  return(
      <div className='flex long-card-container space-btw align-center'>
        <div className='flex'>
          <p>{alertType}: R{roomId}B{bedId} {message}</p>
          <p className='pd-l-16'>{dateTime}</p>
        </div>
        <div className='flex'>
          <CheckBox
            checked={true}
            // onChange={handleChange}
          />
        </div>
      </div>
  )
}

export default TaskCardLong