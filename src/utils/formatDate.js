import { nbsp } from '../constants'

export function formatDate (dateString) {
  const date = new Date(dateString)
  const pad = (n) => n < 10 ? '0' + n : '' + n
  return (
    date.toLocaleDateString().replace(/\s/g, nbsp) + nbsp +
    pad(date.getHours()) + ':' + pad(date.getMinutes()) + ':' + pad(date.getSeconds())
  )
}
