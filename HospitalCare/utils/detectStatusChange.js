import { STATUS_CHANGES } from "../constants.js";

const detectStatusChange = (
  changeFrom,
  changeTo,
  statusChanges = STATUS_CHANGES
) => statusChanges.some(
  ([from, to]) => changeFrom === from && changeTo === to
);

export default detectStatusChange;
