const printOutput = (output) => {
  output.forEach(
    (el) =>
      `${console.log(el)} ${console.log(
        el?.last ? el.last : el.change
      )} \n ${console.log("---------------------------------------")}`
  );
};

export default printOutput;
