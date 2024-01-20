// function getRandomElement<T>(list: T[] ): T {
// 	const randIndex = Math.floor(Math.random() * list.length);
// 	return list[randIndex];
// }

const getRandomElemen = <T,>(list: T[]): T => {
  const randIndex = Math.floor(Math.random() * list.length);
  return list[randIndex];
};
