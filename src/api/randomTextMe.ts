import { RandomTextMeResponse } from "../types";

const apiUri = 'https://www.randomtext.me/api/gibberish/p-150/5-15'

export const getRandomText = async () => {
  const res = await fetch(apiUri)
  const json : RandomTextMeResponse = await res.json()
  return json
}
