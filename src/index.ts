// const nums: number[] = []
// const nums: Array<number> = []
// const colors: Array<string> = []

// const inputEl = document.querySelector<HTMLInputElement>("#username");
// const btn = document.querySelector<HTMLButtonElement>(".login");

function numberIdentity(item: number): number {
	return item
}

function stringIdentity(item: string): string {
	return item
}

function booleanIdentity(item: boolean): boolean {
	return item
}

// function identity(item: any): any {
// 	return item
// }

function identity<Type>(item: Type): Type {
	return item
}

identity<string>('string');
identity<number>(100);
identity<boolean>(true);

const anotherIdentity = <T>(item: T): T => {
	return item;
}

type TColors = 'white' | 'black'

anotherIdentity<TColors>('white');

interface ICat {
	name: string;
	breed: string;
}

function getRandomElement<T>(list: T[] ): T {
	const randIndex = Math.floor(Math.random() * list.length);
	return list[randIndex];
}

getRandomElement<string>(['a', 'b', 'c', 'd']);
getRandomElement<number>([1, 2, 3, 4,])