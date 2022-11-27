import React from 'react'
import "../App.css"
import "./BedCard.css"

/**
 * @param: (thumbnail, title, type, desc, url)
 * @returns: BedCard
 */


function BedCard({id, roomId, bedId, patientName, startTime, sensorId, sensorLeftTime, transmitterId, transmitterLeftTime}) {

  // create handleChange function that will update the isDone value in the database

  return(
    <div className='bed-container'>
        <p>Bed {bedId}</p>
        <p>{patientName}</p>
        <p>Since {startTime}</p>
        <p>Sensor({sensorId}) expires in</p>
        <span>{sensorLeftTime}</span>
        <p>Sensor({transmitterId}) expires in</p>
        <span>{transmitterLeftTime}</span>
    </div>
  )
}

export default BedCard