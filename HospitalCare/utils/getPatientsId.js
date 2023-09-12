import patientsArr from "../mocks/patientsArr.js";

const getPatientsId = () => {
  const patientsId = [];

  patientsArr.forEach((patient) => {
    if (!patientsId.includes(patient.patientId)) {
      patientsId.push(patient.patientId);
    }
  });

  return patientsId;
};

export default getPatientsId;
