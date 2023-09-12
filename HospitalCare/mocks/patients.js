import generateMockData from "./generateMockData.js";

const patientIds = [1, 2, 3, 4, 5];
const readings = 3;
const timespread = 86400; // 1 day
/* const patients = generateMockData(patientIds, readings, timespread); */

const patients = [
  {
    patientId: 12312,
    time: "2023-08-22T06:26:29.379Z",
    type: "TEMPERATURE_SENSOR_ONSKIN",
    value: {
      temperatureC: null,
      status: "GRAY",
    },
  },
  {
    patientId: 65324,
    time: "2023-08-22T08:59:13.808Z",
    type: "TEMPERATURE_SENSOR_ONSKIN",
    value: {
      temperatureC: 37,
      status: "GREEN",
    },
  },
  {
    patientId: 65324,
    time: "2023-08-22T12:32:55.019Z",
    type: "TEMPERATURE_SENSOR_ONSKIN",
    value: {
      temperatureC: 39.7,
      status: "RED",
    },
  },
  {
    patientId: 65324,
    time: "2023-08-22T14:16:14.950Z",
    type: "TEMPERATURE_SENSOR_ONSKIN",
    value: {
      temperatureC: 40.5,
      status: "RED",
    },
  },
  {
    patientId: 65324,
    time: "2023-08-22T14:56:38.470Z",
    type: "TEMPERATURE_SENSOR_ONSKIN",
    value: {
      temperatureC: 35.4,
      status: "PURPLE",
    },
  },
  {
    patientId: 53213,
    time: "2023-08-22T15:01:50.465Z",
    type: "TEMPERATURE_SENSOR_ONSKIN",
    value: {
      temperatureC: 35.3,
      status: "PURPLE",
    },
  },
  {
    patientId: 12312,
    time: "2023-08-22T19:00:21.741Z",
    type: "TEMPERATURE_SENSOR_ONSKIN",
    value: {
      temperatureC: 41,
      status: "RED",
    },
  },
  {
    patientId: 65324,
    time: "2023-08-22T20:16:28.788Z",
    type: "TEMPERATURE_SENSOR_ONSKIN",
    value: {
      temperatureC: 35.1,
      status: "PURPLE",
    },
  },
  {
    patientId: 53213,
    time: "2023-08-22T20:53:49.765Z",
    type: "TEMPERATURE_SENSOR_ONSKIN",
    value: {
      temperatureC: 36.8,
      status: "GREEN",
    },
  },
  {
    patientId: 53213,
    time: "2023-08-22T21:08:44.033Z",
    type: "TEMPERATURE_SENSOR_ONSKIN",
    value: {
      temperatureC: 41.4,
      status: "RED",
    },
  },
  {
    patientId: 12312,
    time: "2023-08-22T21:29:57.459Z",
    type: "TEMPERATURE_SENSOR_ONSKIN",
    value: {
      temperatureC: null,
      status: "GRAY",
    },
  },
  {
    patientId: 53213,
    time: "2023-08-22T22:23:52.841Z",
    type: "TEMPERATURE_SENSOR_ONSKIN",
    value: {
      temperatureC: 40.1,
      status: "RED",
    },
  },
  {
    patientId: 53213,
    time: "2023-08-22T22:35:08.849Z",
    type: "TEMPERATURE_SENSOR_ONSKIN",
    value: {
      temperatureC: 36.2,
      status: "GREEN",
    },
  },
  {
    patientId: 12312,
    time: "2023-08-22T22:48:28.415Z",
    type: "TEMPERATURE_SENSOR_ONSKIN",
    value: {
      temperatureC: 37.3,
      status: "GREEN",
    },
  },
  {
    patientId: 12312,
    time: "2023-08-23T05:46:25.719Z",
    type: "TEMPERATURE_SENSOR_ONSKIN",
    value: {
      temperatureC: null,
      status: "GRAY",
    },
  },
];
/* const patients = [
  {
    patientId: 1,
    time: "2023-08-01T00:00:00.000Z",
    type: "TEMPERATURE_SENSOR_ONSKIN",
    value: {
      temperatureC: 36.5,
      status: "GREEN",
    },
  },
  {
    patientId: 2,
    time: "2023-08-01T00:00:00.000Z",
    type: "TEMPERATURE_SENSOR_ONSKIN",
    value: {
      temperatureC: 36.5,
      status: "GREEN",
    },
  },
  {
    patientId: 2,
    time: "2023-08-01T00:30:00.000Z",
    type: "TEMPERATURE_SENSOR_ONSKIN",
    value: {
      temperatureC: 39.5,
      status: "ORANGE",
    },
  },
  {
    patientId: 1,
    time: "2023-08-01T01:00:00.000Z",
    type: "TEMPERATURE_SENSOR_ONSKIN",
    value: {
      temperatureC: 36.5,
      status: "GREEN",
    },
  },
  {
    patientId: 1,
    time: "2023-08-01T02:00:00.000Z",
    type: "TEMPERATURE_SENSOR_ONSKIN",
    value: {
      temperatureC: 36.5,
      status: "GREEN",
    },
  },
  {
    patientId: 1,
    time: "2023-08-01T03:00:00.000Z",
    type: "TEMPERATURE_SENSOR_ONSKIN",
    value: {
      temperatureC: 36.5,
      status: "GREEN",
    },
  },
  {
    patientId: 1,
    time: "2023-08-01T04:00:00.000Z",
    type: "TEMPERATURE_SENSOR_ONSKIN",
    value: {
      temperatureC: 36.5,
      status: "GREEN",
    },
  },
  {
    patientId: 1,
    time: "2023-08-01T05:00:00.000Z",
    type: "TEMPERATURE_SENSOR_ONSKIN",
    value: {
      temperatureC: 36.5,
      status: "GREEN",
    },
  },
  {
    patientId: 1,
    time: "2023-08-01T06:00:00.000Z",
    type: "TEMPERATURE_SENSOR_ONSKIN",
    value: {
      temperatureC: 36.5,
      status: "GREEN",
    },
  },
  {
    patientId: 1,
    time: "2023-08-01T07:00:00.000Z",
    type: "TEMPERATURE_SENSOR_ONSKIN",
    value: {
      temperatureC: 36.5,
      status: "GREEN",
    },
  },
  {
    patientId: 1,
    time: "2023-08-01T08:00:00.000Z",
    type: "TEMPERATURE_SENSOR_ONSKIN",
    value: {
      temperatureC: 36.5,
      status: "GREEN",
    },
  },
  {
    patientId: 1,
    time: "2023-08-01T09:00:00.000Z",
    type: "TEMPERATURE_SENSOR_ONSKIN",
    value: {
      temperatureC: 36.5,
      status: "GREEN",
    },
  },
  {
    patientId: 1,
    time: "2023-08-01T10:00:00.000Z",
    type: "TEMPERATURE_SENSOR_ONSKIN",
    value: {
      temperatureC: 36.5,
      status: "GREEN",
    },
  },
  {
    patientId: 1,
    time: "2023-08-01T11:00:00.000Z",
    type: "TEMPERATURE_SENSOR_ONSKIN",
    value: {
      temperatureC: 36.5,
      status: "GREEN",
    },
  },
  {
    patientId: 1,
    time: "2023-08-01T12:00:00.000Z",
    type: "TEMPERATURE_SENSOR_ONSKIN",
    value: {
      temperatureC: 36.5,
      status: "GREEN",
    },
  },
  {
    patientId: 1,
    time: "2023-08-01T13:00:00.000Z",
    type: "TEMPERATURE_SENSOR_ONSKIN",
    value: {
      temperatureC: 36.5,
      status: "GREEN",
    },
  },
  {
    patientId: 1,
    time: "2023-08-01T14:00:00.000Z",
    type: "TEMPERATURE_SENSOR_ONSKIN",
    value: {
      temperatureC: 36.5,
      status: "GREEN",
    },
  },
  {
    patientId: 1,
    time: "2023-08-01T15:00:00.000Z",
    type: "TEMPERATURE_SENSOR_ONSKIN",
    value: {
      temperatureC: 36.5,
      status: "GREEN",
    },
  },
  {
    patientId: 1,
    time: "2023-08-01T16:00:00.000Z",
    type: "TEMPERATURE_SENSOR_ONSKIN",
    value: {
      temperatureC: 36.5,
      status: "GREEN",
    },
  },
  {
    patientId: 1,
    time: "2023-08-01T17:00:00.000Z",
    type: "TEMPERATURE_SENSOR_ONSKIN",
    value: {
      temperatureC: 36.5,
      status: "GREEN",
    },
  },
  {
    patientId: 1,
    time: "2023-08-01T18:00:00.000Z",
    type: "TEMPERATURE_SENSOR_ONSKIN",
    value: {
      temperatureC: 36.5,
      status: "GREEN",
    },
  },
  {
    patientId: 1,
    time: "2023-08-01T19:00:00.000Z",
    type: "TEMPERATURE_SENSOR_ONSKIN",
    value: {
      temperatureC: null,
      status: "GRAY",
    },
  },
  {
    patientId: 1,
    time: "2023-08-01T20:00:00.000Z",
    type: "TEMPERATURE_SENSOR_ONSKIN",
    value: {
      temperatureC: null,
      status: "GRAY",
    },
  },
  {
    patientId: 1,
    time: "2023-08-01T21:00:00.000Z",
    type: "TEMPERATURE_SENSOR_ONSKIN",
    value: {
      temperatureC: 36.5,
      status: "ORANGE",
    },
  },
  {
    patientId: 1,
    time: "2023-08-01T22:00:00.000Z",
    type: "TEMPERATURE_SENSOR_ONSKIN",
    value: {
      temperatureC: 36.5,
      status: "ORANGE",
    },
  },
  {
    patientId: 1,
    time: "2023-08-01T23:00:00.000Z",
    type: "TEMPERATURE_SENSOR_ONSKIN",
    value: {
      temperatureC: 36.5,
      status: "ORANGE",
    },
  },
]; */

export default patients;
