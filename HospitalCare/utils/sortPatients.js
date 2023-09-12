import convertISOToMs from "./convertISOToMs.js";

const sortPatients = (patients) => {
  const sortedPatients = patients.sort(
    (a, b) => convertISOToMs(a.time) - convertISOToMs(b.time)
  );

  return [...sortedPatients];
};

export default sortPatients;
