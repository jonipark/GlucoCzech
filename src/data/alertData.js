export const alertData = [
    {
        id: 1,
        dateTime: "2020-10-01 12:00:00",
        alertType: " Sensor Expired", // Transmitter Expired, Sensor Expired, LOW, HIGH
        roomId: 1,
        bedId: 1,
        patientId: 1,
        message: '10.4 mmol/g (target: 4.0 - 10.0 mmol/g)', // will be generated from the patient's data later
        isDone: false,
    },
    {
        id: 2,
        dateTime: "2022-10-03 12:00:00",
        alertType: " LOW", // Transmitter Expired, Sensor Expired, LOW, HIGH
        roomId: 1,
        bedId: 2,
        patientId: 2,
        message: '10.4 mmol/g (target: 4.0 - 10.0 mmol/g)', // will be generated from the patient's data later
        isDone: true,
    },

]