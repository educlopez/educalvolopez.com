export function getCurrentTime () {
  const newDate = new Date()
  let hours = newDate.getHours()
  let minutes = newDate.getMinutes()
  const ampm = hours >= 12 ? 'pm' : 'am'
  hours = hours % 12
  hours = hours || 12
  minutes = minutes < 10 ? '0' + minutes : minutes
  return `${hours}:${minutes} ${ampm}`
}
