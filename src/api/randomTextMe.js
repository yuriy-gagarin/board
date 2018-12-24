const apiUri = 'https://www.randomtext.me/api/gibberish/p-50/10-50'

export const getRandomText = async () => {
  const res = await fetch(apiUri)
  const json = await res.json()
  return json
}
