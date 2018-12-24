import { randint } from "./randint";

export const delay = (ms : number) => {
  return new Promise<void>(resolve => setTimeout(resolve, ms))
}

export const simulateNetworkDelay = () => {
  const ms = Math.random() > 0.66 ? randint(1000, 4000) : randint(400, 900) 
  return delay(ms)
}
