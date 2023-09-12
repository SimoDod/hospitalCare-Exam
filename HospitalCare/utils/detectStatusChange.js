import { STATUS_CHANGES } from "../constants.js";

const detectStatusChange = (changeFrom, changeTo) => {
    return STATUS_CHANGES.some(([from, to]) => {
        return changeFrom === from && changeTo === to
    })
}
 
export default detectStatusChange;