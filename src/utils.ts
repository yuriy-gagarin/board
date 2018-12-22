import { nbsp } from './constants'

export function formatDate (dateString : string) : string {
  const date = new Date(dateString)
  const pad = (n : number) : string => n < 10 ? '0' + n : '' + n
  return (
    date.toLocaleDateString().replace(/\s/g, nbsp) + nbsp +
    pad(date.getHours()) + ':' + pad(date.getMinutes()) + ':' + pad(date.getSeconds())
  )
}
