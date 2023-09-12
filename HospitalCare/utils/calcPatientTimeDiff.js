import convertISOToMs from "./convertISOToMs.js";

const calcPatientTimeDiff = (time, nextTime) => {
    const curPatientTime = convertISOToMs(time);
    const nextPatientTime = convertISOToMs(nextTime);

    const timeDiff = nextPatientTime - curPatientTime;

    return timeDiff;
}
 
export default calcPatientTimeDiff;