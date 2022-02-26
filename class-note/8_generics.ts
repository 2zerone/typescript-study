// function logText(text) {
//     console.log(text);
//     return text;
// }

// logText(10); // 숫자 10
// logText('하이'); // 문자열 하이
// logText(true); // 진위값 true

// function logText<T>(text: T): T {
//     console.log(text);
//     return text;
// }

// logText<string>('하이');

// 실제로 함수를 정의할 때 타입을 비워놓은 상태에서 타입에 무엇이 들어갈 것인가를 호출한 시점에 정의하는 것 = 제네릭의 장점

function logText(text: string) {
    console.log(text);
    // text.split('').reverse().join(''); // string이기 때문에 가능
    return text;
}

function logNumber(num: number) {
    console.log(num);
    return num;
}

// function logText(text: string | number) {
//     console.log(text);
//     return text;
// }

// const a = logText('a');
// logText(10);
// const num = logNumber(10);
// logText(true);

function logText<T>(text: T): T {
    console.log(text);
    return text;
}

const str = logText<string>('abc')
str.split('')
const login = logText<boolean>(true);

// logText('a')
// logText(10)

// 인터페이스에 제네릭 선언하는 방법
// interface Dropdown {
//     value: string;
//     selected: boolean;
// }

// const obj: Dropdown = { value: '하이', selected: false };

interface Dropdown<T> {
    value: T;
    selected: boolean;
}

const obj: Dropdown<number> = { value: 10, selected: false };

// 제네릭의 타입 제한
// function logTextLength<T>(text: T[]): T[] {
//     console.log(text.length);
//     text.forEach(function (text) {
//         console.log(text);
//     })
//     return text;
// }
// logTextLength<string>(['hi', 'abc']);

// 제네릭의 타입nds  제한 2 - 정의된 타입 이용하기
interface LengthType {
    length: number;
}

function logTextLength<T extends LengthType>(text: T): T {
    text.length;
    return text;
}

logTextLength('a');
logTextLength(10); // 10 에는 기본적으로 length가 제공되지 않음
logTextLength({ leng: 10 });


// 제네릭 타입 제한 3 - keyof
interface ShoppingItem {
    name: string;
    price: number;
    stock: number;
}

function getShoppingItemOption<T extends keyof ShoppingItem>(itemOption: T): T {
    return itemOption;
}

// getShoppingItemOption(10);
// getShoppingItemOption<string>('a');
getShoppingItemOption('name');
