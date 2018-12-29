// INPUT DATE FORMAT: DD-MM-YYYY
export function dateToTimestamp (date) {
  date = date.replace(/-/g, '/');
  return new Date(date).getTime()
}
