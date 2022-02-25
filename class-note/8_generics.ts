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