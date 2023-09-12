import detectStatusChange from "./utils/detectStatusChange.js";
import groupPatientById from "./utils/groupPatientById.js";
import calcPatientTimeDiff from "./utils/calcPatientTimeDiff.js";
import generatePatientStatus from "./utils/generatePatientStatus.js";
import { HEALTH_READING_INTERVAL } from "./constants.js";
import sortPatients from "./utils/sortPatients.js";
import statusLastGenerator from "./utils/statusLastGenerator.js";
import statusChangeUpdater from "./utils/statusChangeUpdater.js";

const detectPatientsStatus = (foundPatientsId, patients) =>
  foundPatientsId.reduce((output, id) => {
    const curPatientArr = groupPatientById(id, patients);
    const sortedPatients = sortPatients(curPatientArr);

    let healthChanged = false;
    const change = {};
    const last = statusLastGenerator(sortedPatients);

    for (let i = 1; i < sortedPatients.length; i++) {
      const { value: prevValue, time: prevTime } = sortedPatients[i - 1];
      const { value, time } = sortedPatients[i];

      const timeDiff = calcPatientTimeDiff(prevTime, time);
      const isReadingDiffHigher = timeDiff >= HEALTH_READING_INTERVAL;

      const validStatusChange = detectStatusChange(
        prevValue.status,
        value.status
      );

      if (isReadingDiffHigher && validStatusChange) {
        healthChanged = true;
        statusChangeUpdater(change, prevValue, value, time);
      }
      healthChanged = false; // <--- depends on the document requirements
    }

    return [
      ...output,
      generatePatientStatus({
        patientId: id,
        healthChanged,
        ...change,
        ...last,
      }),
    ];
  }, []);

export default detectPatientsStatus;
