import React from "react";
import './Dashboard.css';
import TaskCardDashboard from "../../components/TaskCardDashboard";
import ThumbnailCard from "../../components/Dashboard/thumbnailCard";
import { alertData } from "../../data/alertData";

const Dashboard = () => {

  const alert = alertData.filter((alert) => alert.isDone === false);

  return (
    <div className="dashboard-container">
      <h1>Alert</h1>
      {alert && alert.map((alert, index) => (
        <TaskCardDashboard
          alertType={alert.alertType}
          dateTime={alert.dateTime}
          roomId={alert.roomId}
          bedId={alert.bedId} 
          message={alert.message}
          isDone={alert.isDone}
          key={index}/>
      ))}
      <h1>Graphs</h1>
        <ThumbnailCard />
    </div>

  );

};

export default Dashboard;
