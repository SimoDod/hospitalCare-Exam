const printOutput = (output) => {
  return output.map((el) => {
    console.log(el);

    return JSON.stringify(el);
  });
};

export default printOutput;
