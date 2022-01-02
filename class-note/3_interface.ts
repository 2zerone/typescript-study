interface User {
    age: number;
    name: string;
}

// 변수에 인터페이스 활용
var seho: User = {
    age: 33,
    name: '세호'
}

// 함수에 인터페이스 활용
function getUser(user: User) {
    console.log(user);
}

const capt = {
    name: '캡틴',
    age: 100
}
getUser(capt);
// 함수의 스펙(구조)에 인터페이스 활용
interface SumFunction {
    (a: number, b: number): number;
}

var sum: SumFunction;
sum = function(a: number, b: number): number {
    return a + b;
}

// 인덱싱
interface StringArray {
    [index: number]: string;
}

const arr: StringArray = ['a', 'b', 'c'];
// arr[0] = 10; error

// 딕셔너리 패턴
interface StringRegexDictionary {
    [key: string]: RegExp;
}

var obj: StringRegexDictionary = {
    // sth: /abc/,
    cssFile: /\.css$/, // 모든 css 확장자로 끝나는 파일들을 불러오는 정규식
    jsFile: /\.js$/, // 모든 js 확장자로 끝나는 파일들을 불러오는 정규식
}

Object.keys(obj).forEach(function(value) {});

// 인터페이스 확장
interface Person {
    name: string;
    age: number;
}
interface Person {
    name: string;
    age: number;
    language: string;
}