import { randint } from "./randint";

export const delay = (ms) => {
  return new Promise(resolve => setTimeout(resolve, ms))
}

export const simulateNetworkDelay = () => {
  const ms = Math.random() > 0.66 ? randint(1000, 4000) : randint(400, 900) 
  return delay(ms)
}
