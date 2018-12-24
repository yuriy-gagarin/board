export const randint = (from, to) => {
  from = Math.ceil(from)
  to = Math.floor(to)
  return Math.floor( Math.random() * (to - from + 1) ) + from
}
