export function createId(): number {
  const random = Math.random();
  return Number(random.toString(16).substr(2));
}

export const getRandomInt = (min: number, max: number) => Math.floor(Math.random() * (max - min + 1) + min);
