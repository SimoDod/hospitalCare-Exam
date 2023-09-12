const convertISOToMs = (isoStr) => {
  const date = new Date(isoStr);

  const timestamp = date.getTime();

  return timestamp;
};

export default convertISOToMs;
