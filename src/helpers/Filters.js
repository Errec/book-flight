export function getZeroPad (n) {
  return (parseInt(n, 10) >= 10 ? '' : '0') + n
}
