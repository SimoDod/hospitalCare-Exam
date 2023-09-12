//time interval in ms
export const HEALTH_READING_INTERVAL = 3600000;

//GREEN to RED, GREEN to ORANGE, GRAY to ORANGE,
//GRAY to RED, ORANGE to RED, GREEN to GRAY
export const STATUS_CHANGES = [
  ["GREEN", "RED"],
  ["GREEN", "ORANGE"],
  ["GREEN", "GRAY"],
  ["GRAY", "ORANGE"],
  ["GRAY", "RED"],
  ["ORANGE", "RED"],
];

export const STATUS_TEMP_RELATION = {
  PURPLE: { low: 35, high: 36.1 },
  GREEN: { low: 36.2, high: 37.1 },
  ORANGE: { low: 37.1, high: 38.2 },
  RED: { low: 38.3, high: 41 },
  GRAY: {low: null, high: null}
};

export const STATUSES =  Object.keys(STATUS_TEMP_RELATION);