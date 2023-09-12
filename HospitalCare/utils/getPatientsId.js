const getPatientsId = (patientsArr) =>
  patientsArr.reduce((patientsId, patient) => {
    if (!patientsId.includes(patient.patientId)) {
      return [...patientsId, patient.patientId];
    }
    return patientsId;
  }, []);

export default getPatientsId;
