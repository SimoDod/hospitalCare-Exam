//if the last status must not be updated
//when the interval is higher between two last readings
//then we can make it this way

const statusLastGenerator = (sortedPatients) => {
  const [{ value, time }] = [...sortedPatients].reverse();

  return {
    status: value.status,
    temperatureC: value.temperatureC,
    time: time,
  };
};

export default statusLastGenerator;
