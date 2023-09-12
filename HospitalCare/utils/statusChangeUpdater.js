const statusChangeUpdater = (
  change,
  prevValue,
  { status, temperatureC },
  time
) => {
  change.from = prevValue.status;
  change.to = status;
  change.changeTemperatureC = temperatureC;
  change.changedOn = time;
};

export default statusChangeUpdater;
