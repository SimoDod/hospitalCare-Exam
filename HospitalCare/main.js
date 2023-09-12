import detectStatusChange from "./utils/detectStatusChange.js";
import getPatientsId from "./utils/getPatientsId.js";
import getSinglePatientData from "./utils/getSinglePatientData.js";
import calcPatientTimeDiff from "./utils/calcPatientTimeDiff.js";
import generatePatientStatus from "./utils/generatePatientStatus.js";
import { HEALTH_READING_INTERVAL } from "./constants.js";
import printOutput from "./utils/printOutput.js";

const output = [];

const foundPatientsId = getPatientsId();

//start of the cycle
foundPatientsId.forEach((id) => {
  const curPatientArr = getSinglePatientData(id);

  curPatientArr.sort((a, b) => new Date(a.time) - new Date(b.time));

  let healthChanged = false;
  let change = {};
  let last = {
    status: curPatientArr[curPatientArr.length - 1].value.status,
    temperatureC: curPatientArr[curPatientArr.length - 1].value.temperatureC,
    time: curPatientArr[curPatientArr.length - 1].time,
  };

  for (let i = 1; i < curPatientArr.length; i++) {
    const prev = curPatientArr[i - 1];
    const current = curPatientArr[i];
  
    const timeDiff = calcPatientTimeDiff(prev.time, current.time);
    const isReadingDiffHigher = timeDiff > HEALTH_READING_INTERVAL;
  
    const validStatusChange = detectStatusChange(prev.value.status, current.value.status);
  
    if (isReadingDiffHigher && validStatusChange) {
      healthChanged = true;
      change = {
        from: prev.value.status,
        to: current.value.status,
        temperatureC: current.value.temperatureC,
        changedOn: current.time,
      };
      break;
    }
  }

  const patientStatus = generatePatientStatus({
    patientId: id,
    healthChanged,
    ...change,
    ...last,
  });

  output.push(patientStatus);
});

printOutput(output);
