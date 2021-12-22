// JS 문자열 선언
// var str = 'hello';

// TS 문자열 선언
let str: string = 'hello';

// TS 숫자
let num: number = 10;

// TS 배열
let arr: Array<number> = [1, 2, 3];
let items: number[] = [1, 2, 3]; // number[] = Array<number>
let heroes: Array<string> = ['Capt', 'Thor', 'Hulk']

// TS 튜플 (배열의 인덱스에 따른 타입 지정)
let address: [string, number] = ['gangnam', 100];

// TS 객체
let obj: object = {};
// let person: object = {
//     name: 'thor',
//     age: 200
// };
let person: { name: string, age: number } = {
    name: 'capt',
    age: 100
};

// TS 진위값
let show: boolean = true;