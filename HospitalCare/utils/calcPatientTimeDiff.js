import convertISOToMs from "./convertISOToMs.js";

const calcPatientTimeDiff = (curTime, nextTime) =>
  convertISOToMs(nextTime) - convertISOToMs(curTime);

export default calcPatientTimeDiff;
