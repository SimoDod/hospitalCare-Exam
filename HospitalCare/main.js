import detectPatientsStatus from "./detectPatientStatus.js";
import getPatientsId from "./utils/getPatientsId.js";
import printOutput from "./utils/printOutput.js";
import patients from "./mocks/patients.js";

const foundPatientsById = getPatientsId(patients);

const output = detectPatientsStatus(foundPatientsById, patients);

printOutput(output);
