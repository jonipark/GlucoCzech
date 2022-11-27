import React from "react";
import "./Beds.css";
import BedCard from "../../components/BedCard";
import { bedData } from "../../data/bedData";

const Beds = () => {
  const bedsRoom1 = bedData.filter((b) => b.roomId === 1);
  const bedsRoom2 = bedData.filter((b) => b.roomId === 2);

  return (

    <div className="all-task-container">
      <h1>Room 1</h1>
      {bedsRoom1 && bedsRoom1.map((alert, index) => (
        <BedCard
          id={alert.id}
          roomId={alert.roomId}
          bedId={alert.bedId}
          patientName={alert.patientName}
          startTime={alert.startTime}
          sensorId={alert.sensorId}
          sensorLeftTime={alert.sensorLeftTime}
          transmitterId={alert.transmitterId}
          transmitterLeftTime={alert.transmitterLeftTime}
          key={index}/>
      ))}
      <h1>Room 2</h1>
      {bedsRoom2 && bedsRoom2.map((alert, index) => (
        <BedCard
        id={alert.id}
        roomId={alert.roomId}
        bedId={alert.bedId}
        patientName={alert.patientName}
        startTime={alert.startTime}
        sensorId={alert.sensorId}
        sensorLeftTime={alert.sensorLeftTime}
        transmitterId={alert.transmitterId}
        transmitterLeftTime={alert.transmitterLeftTime}
        key={index}/>
      ))}
    </div>

  );
};

export default Beds;
