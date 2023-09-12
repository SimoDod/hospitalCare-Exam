const generatePatientStatus = ({
  patientId,
  healthChanged,
  from,
  to,
  changeTemperatureC,
  temperatureC,
  changedOn,
  time,
  status,
}) => {
  const patientStatus = {
    patientId,
    healthChanged,
  };

  if (healthChanged) {
    patientStatus.change = {
      from,
      to,
      temperatureC: changeTemperatureC,
      changedOn,
    };
  } else {
    patientStatus.last = {
      status,
      temperatureC,
      time,
    };
  }

  return patientStatus;
};

export default generatePatientStatus;
