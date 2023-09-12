//time interval in ms
export const HEALTH_READING_INTERVAL = 3600000;

//GREEN to RED, GREEN to ORANGE, GRAY to ORANGE,
//GRAY to RED, ORANGE to RED, GREEN to GRAY
export const STATUS_CHANGES = [
  ["GREEN", "RED"],
  ["GREEN", "ORANGE"],
  ["GRAY", "ORANGE"],
  ["GRAY", "RED"],
  ["ORANGE", "RED"],
  ["GREEN", "GRAY"],
];
