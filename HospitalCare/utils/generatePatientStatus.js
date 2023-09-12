const generatePatientStatus = ({
  patientId,
  healthChanged,
  from,
  to,
  temperatureC,
  changedOn,
  time,
  status
}) => {
  if (healthChanged) {
    return {
      patientId,
      healthChanged,
      change: {
        from,
        to,
        temperatureC,
        changedOn,
      },
    };
  } else {
    return {
      patientId,
      healthChanged,
      last: {
        status: status,
        temperatureC,
        time,
      },
    };
  }
};

export default generatePatientStatus;
