export default function formatName(str) {
  return str.split(',').reverse().join(' ').trim()
}
