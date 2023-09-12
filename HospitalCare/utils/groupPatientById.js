const groupPatientById = (id, patients) =>
patients.filter((patient) => patient.patientId === id);

export default groupPatientById;
