import patientsArr from "../mocks/patientsArr.js";

const getSinglePatientData = (id) => {
    return patientsArr.filter(patient => patient.patientId === id)
}
 
export default getSinglePatientData;