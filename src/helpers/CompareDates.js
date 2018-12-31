import moment from 'moment'

export function compareDates (arrivalTime, departureTime) {
  departureTime = moment(departureTime, "DD-MM-YYYY")
  arrivalTime = moment(arrivalTime, "DD-MM-YYYY")

  console.log(departureTime > arrivalTime)

  return departureTime > arrivalTime
}