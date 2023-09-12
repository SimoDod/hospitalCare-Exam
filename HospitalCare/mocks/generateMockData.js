import { STATUS_TEMP_RELATION, STATUSES } from "../constants.js";

const generateMockData = (patientsIds, readings, timespread) => {
  const randomTemperature = (max, min) => {
    const tempBetweenMaxMin = +(Math.random() * (max - min) + min).toFixed(1);
    return tempBetweenMaxMin === 0 ? null : tempBetweenMaxMin;
  };

  const randomStatus = () => {
    const statusesRandomIndex = Math.floor(Math.random() * STATUSES.length);
    return STATUSES[statusesRandomIndex];
  };

  const randomTime = (start) => {
    return new Date(
      start.getTime() + Math.random() * timespread * 1000
    ).toISOString();
  };

  const generatePatientData = (patientId) => {
    let startTime = new Date();
    const patientData = [];

    for (let i = 0; i < readings; i++) {
      const time = randomTime(startTime);

      const status = randomStatus();
      const min = STATUS_TEMP_RELATION[status].low;
      const max = STATUS_TEMP_RELATION[status].high;
      const temperatureC = randomTemperature(max, min);

      patientData.push({
        patientId,
        time,
        type: "TEMPERATURE_SENSOR_ONSKIN",
        value: {
          temperatureC,
          status,
        },
      });

      startTime = new Date(time);
    }
    return patientData;
  };

  return patientsIds.reduce((data, patientId) => {
    return [...data, ...generatePatientData(patientId)];
  }, []);
};

export default generateMockData;
