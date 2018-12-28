import * as randomTextApi from '../api/randomTextMe'

export function createRandomTextGenerator() {
  const textBuffer = []

  async function pushText() {
    const rawText = (await randomTextApi.getRandomText()).text_out
    const pieces = rawText.replace(/(<p>|<\/p>)/g, '').split('\r')
    for (let piece in pieces) {
      textBuffer.push(pieces[piece])
    }
  }

  async function * generator() {
    while (true) {
      if (textBuffer.length > 0) {
        let string = textBuffer.shift()
        if (!string) continue
        yield string
      } else {
        await pushText()
        continue
      }
    }
  }

  return generator()
}
