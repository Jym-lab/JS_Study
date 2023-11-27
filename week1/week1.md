# 1주차 자바스크립트 스터디

# 1. ECMA스크립트와 자바스크립트의 차이

ECMAScript (줄여서 ES)란 ECMA-262라는 기술 규칙을 기반으로 작성된 언어

이렇게만 설명하면 나도 모르고 사람들도 모를 것 같아서 고민이 생겼다.

그래서 하나씩 차근차근 풀어가보기로 했다.

![Untitled](week1/Untitled.png)

### ECMA-262??

처음 든 생각은 “ECMA-262는대체 뭐지?” 였다.

그래서 찾아봤다.

[ECMA-262 - Ecma International](https://www.ecma-international.org/publications-and-standards/standards/ecma-262/)

![고마워요 구글 번역](week1/Untitled%201.png)

고마워요 구글 번역

대충 사이트를 둘러보니 ECMA 인터내셔널이라는 회사는 Standard(표준)을 정의하는 일을 하는 회사였다.

표준이라는건 다들 으레 알다시피 **사회적으로 모두가 동의하는 규격**들을 말한다.

태양력, 미터법, 표준어, 외래어 표기법 등등 이러한 표준들이 존재하고 이 규격에 맞춰 사람들끼리 소통하기 때문에 일이 효율적인 작업이 가능해진다.

### 그래서 ECMA-262가 뭔데?

정리해보자면 ECMA-262란 ECMA 인터내셔널에서 만든 표준 즉 프로그래밍 규칙(표준)이다.

그리고 이 규칙을 토대로 만든 언어가 바로 ECMAScript(ES)라는 것이다.

흔히 하는 비유로는 표준은 한국어고, 규칙은 문법(발음, 띄워쓰기, 맞춤법)을 말한다.

### JavaScript와의 연관성?

JavaScript는 **ECMAScript 사양을 준수하는 범용 스크립트 언어다.**

즉 ECMAScript는 스크립팅 언어를 만드는 설명서고 그 **설명서**를 바탕으로 만들어진 언어가 바로 JavaScript인 것이다.

### ES6는 어떻게 다르지?

ES6부터는 모던 자바스크립트라고 흔히들 부른다.

그 이유는 ES5와는 확연히 다른 차이가 존재하기 때문인데.

1. let과 const 키워드의 추가
2. Arrow function의 추가 (화살표 함수)
    1. 함수의 표현이 간결해짐
3. Default Parameter의 추가
    
    이런식으로 매개변수에 인자 값을 전달해주지 않아도 기본 값을 줄 수 있다.
    
    ```jsx
    const bmi = function(height = 184, weight = 84){
    	return weight / (height * height / 10000);
    }
    bmi()
    ```
    
4. Template literal의 추가

기존 자바스크립트에서 문자열에 변수 값을 추가해서 출력 할 경우 다음과 같았다.

`var txt = "안녕하세요" + name + " 입니다."`

하지만 백 틱`(`)`을 사용해서 번거롭게 작성하지 않을 수 있게 되었다.

`let txt = `안녕하세요${name} 입니다.``

참고로 백 틱을 이용하면 기존의 자바스크립트는 문자열에 개행을 추가할 경우 백슬래쉬 `(\)`를 추가 했었다.

하지만 이제는 그럴 필요가 없어졌다. 그냥 편하게 입력하면 된다.

1. 클래스

자바스크립트의 클래스는 ES6에 오면서 추가된 개념이다. 흔히 알고 있는 내용이라 굳이 더 파보지는 않았다. 나중에 다시 할 거기도 하고..

1. 분해할당
2. 프로미스
3. string 메서드
4. 모듈

설명이 없는 부분은 어차피 나중에 다시 공부해야할 부분이라 일단 이쯤에서 멈추기로 했다.

![머리아프다 그만해!!!](week1/Untitled%202.png)

머리아프다 그만해!!!

### TMI

이쯤 되니 JavaScript에 대해 좀 더 자세히 알아보고 싶어져서 찾아보았다.

JavaScript는 웹 브라우저에서 실행되는 프로그래밍 언어이다.

크롬, 사파리, 익스플로러, Opera 등등의 웹 브라우저에 각각의 인터프리터가 존재하는데, 각 브라우저마다 지원되는 ES가 다르다.

그래서 호환성 문제가 발생하기 쉬운데 이러한 문제를 해결하기 위해 Babel이라는 것을 사용하는데, 이 Babel은 **각자의 버전에서 작성된 JS를 ES5 버전으로 변환**시켜준다.

주요 브라우저는 대부분 ES5까지 지원하기 때문에 대부분의 호환성 문제를 해결할 수 있다.

# 2. 변수 선언식 var, let, const의 차이

var는 기존의 자바스크립트에서 사용하는 유일한 변수 선언 방식이었다.

ES6 스타일로 오게되면서 let(변수)와 const(상수)로 나누어졌다고 생각했다.

## var

현재는 var가 문제가 많아 거의 사용하진 않지만, 구형 브라우저와의 호환성 문제나, 호이스팅 특성을 사용해 변수를 미리 선언할 경우에만 사용한다고 한다.

### var: 중복 선언 가능

```jsx
var name = 'javascript';
console.log(name); //javascript

var name = 'react';
console.log(name); // react
```

var로 선언한 변수는 같은 이름으로 여러 번 선언이 가능하다.

이 경우 마지막으로 할당한 값이 저장된다. 필요할 때 마다 변수를 유연하게 사용할 수 있다는 장점…아닌 장점이 있지만.

중복 선언하는 실수를 해놓고 원인을 못찾는 결과로 이어질 수 있다.

디버깅 관점에서 굉장히 구리다. 이를 해결하기 위해 나온게 let과 const다.

### let: 중복 선언 불가, 재할당 가능

```jsx
let name = 'javascript'
console.log(name); //javascript

let name = 'react';
console.log(name); 
//Uncaught SyntaxError: Identifier 'name' has already been declared

name = 'vue';
console.log(name);
```

var와 달리 let은 이미 선언되었다는 에러메시지가 나온다.

하지만 재할당이 가능은 가능하다는 장점이 있다.

### const: 중복 선언 불가, 재할당 불가

```jsx
const name = 'javascript';
console.log(name); // javascript

const name = 'react';
console.log(name);
// Uncaught SyntaxError: Identifier 'name' has already been declared

name = 'vue';
console.log(name);
// Uncaught TypeError: Assignment to constant variable
```

let과 cosnt의 차이점은 재할당의 가능여부다.

const는 상수로써 한번 선언되고 나면 값이 변하지 않는다.

**하지만…**

재할당이 불가능한건 맞으나… 재할당만 불가능하다

왜냐하면 다음과 같은 코드가 가능하기 때문에..

```jsx
const list = ["A", "B", "C"]

  list = "D";
  console.log(list);
  // TypeError: Assignment to constant variable

  list.push("D");
  console.log(list); // ["A", "B", "C", "D"]
```

### 어떻게 사용하면 좋지?

let과 const를 주력으로 사용하는 것이 제일 좋다. var는 정말로 필요한 경우에만.

## Scope

스코프랑 참조가 가능한 범위를 뜻한다고 한다.

뭔 소린가 했더니. 전역변수와 지역변수의 차이정도로 생각하면 쉬운듯.

### let, const: 블록 레벨 스코프(block Scope)

여기서 말하는 블록이란 if, for, while, try/catch등 모두 중괄호`{…}` 로 묶어주게 된다.

이 중괄호를 기준으로 하나의 블록을 이루게 된다.

이 블록 내부에서 선언된 let과 const는 그 블록 안에서만 유효하다는 것이다.

var와 차이를 보면 된다.

```jsx
function func(){
	if (true){	
		var a = 5;
		console.log(a); //5
	}
	console.log(a); //5
}
console.log(a); //ReferenceError: a is not defined
```

```jsx
function func(){
	if (true){	
		let a = 5;
		console.log(a); //5
	}
	console.log(a); //ReferenceError: a is not defined
}
console.log(a); //ReferenceError: a is not defined
```

```jsx
let a = 5;
function mine(){
	console.log(a); //5
	{
		let a = 10;
		console.log(a); //10
	}
	console.log(a); //5
}
mine();
```

### var: 함수 레벨 스코프(function level scope)

함수 내에서 선언된 변수는 함수 내에서만 유효하다는 뜻이다.

함수 내부의 지역변수라고 보면 된다. 위의 예제를 보고 이해하면 되겠다.

# 3. 자바스크립트의 자료형

자바스크립트 자료형은 기본자료형과 특수자료형으로 나뉜다.

처음에 이걸 보고 과제를 어떻게 내면 좋을까 고민했다.

하지만 결국 객체나 함수는 나중에 다룰 내용이기도 하니, 기본 자료형 3개와 많이 접해봤을 배열을 알아오는 것으로 결정했다.

## 기본자료형

자바스크립트에서는 3가지 기본 자료을 지원한다.

### 문자열

문자열 자료형은 자바스크립트 내의 텍스트를 표시한다.

선언 방식은 `작은따옴표(')나 큰 따옴표(")` 로 묶으면 된다.

`let name = "안녕하세요"` 

### 숫자

우리는 C나 Java를 할 때 정수형과 실수형 자료형이 따로 있는 것을 배웠다.

흔히 int, float로 구분지어 왔으나 자바스크립트는 그런 구분이 없다.

단 프로그램에서 숫자가 나타나는 경우 그것을 **숫자 리터럴**이라 부른다.

종류가 몇 개 있다.

- 정수 리터럴 : 10진수 표기
- 16진수 리터럴 : 16진수 표기 0x로 시작함.
- 8진수 리터럴 : 8진수 표기 0으로 시작함 ex)010 → 8
- 부동 소수점 리터럴: 소수점이 포함되어 출력.

**NaN**

Not a Number라는 뜻을 가졌는데, 일단 자료형은 숫자다.

근데… 자료형이 숫자인데 숫자 연산이 불가능해서 표기가 불가할경우 NaN을 리턴한다.

예를 들면 이렇다.

```jsx
console.log("숫자가 아닙니다"/2); //NaN
console.log(typeof("숫자가 아닙니다"/2)); //number

//번외편
console.log(isNaN("3")); //숫자로 자동형변환 되서 false..
```

### boolean

boolean 자료형은 참과 거짓의 값을 가진다.

일반적으로 Null이나 Undefined 값은 false취급한다.

if문에 변수를 집어넣어서 true or false를 구분하는 문구가 꽤 자주 쓰이는 편이다.

### 배열

자바스크립트의 배열도 우리가 흔히아는 array 그것이다.

배열을 선언하는 방법에는 두가지가 있다.

**대괄호`[]`를 사용하여 배열 선언하기**

```jsx
const arr1 = [];
const arr2 = ['white', 'black', 'red'];

console.log(`arr: ${arr1}, 길이 ${arr1.length}`);
//arr: , 길이 0
console.log(`arr2: ${arr2}, 길이 ${arr2.length}`);
//arr2: white,black,red, 길이 3
```

여기서 꽤 재밌는건 다른 언어와 달리 배열안에 다양한 타입의 값이 들어갈 수 있었다.

```jsx
const arr = ['apple', 1, true, [100, 200]];
console.log(`arr: ${arr}, 길이 ${arr.length}`);
//arr: apple,1,true,100,200, 길이 4
```

그리고 배열안에 배열을 또 선언했는데[100, 200] 이놈들을 한개로 본다.

**new Array()를 사용하여 배열 선언하기**

```jsx
const arr = new Array();
const arr2 = new Array(3);
const arr3 = new Array('black', 'white', 'red');
console.log(`arr: ${arr}, 길이 ${arr.length}`);
//arr: , 길이 0
console.log(`arr2: ${arr2}, 길이 ${arr2.length}`);
//arr2: ,,, 길이 3
console.log(`arr3: ${arr3}, 길이 ${arr3.length}`);
//arr3: black,white,red, 길이 3
```

이런식으로 정수 값을 넘기면 길이가 3인 빈 배열을 선언

파라미터로 값을 넘기면 해당 값이 포함된 배열이 선언된다.

# 4. 분해 할당

분해 할당은 ES6 스타일 문법으로 배열이나 객체의 값을 분해하여 쉽게 변수에 저장할 수 있도록 하는 문법이다.

아직 객체에 대해서는 공부하지 않았으니까 배열로만 한번 공부해봤다.

```jsx
const [name, age] = ["Julias", 20];
console.log(name); //Julias
console.log(age); //20
```

이런식으로 배열 ["Julias", 20]이 분해되어 각각 name과 age가 저장된다.

당연히 이런 활용도 가능하다. 배열을 미리 선언하는 방식이다.

```jsx
const array = [1, 2, 3];
const [a, b, c] = array;
console.log(a, b, c);// 1 2 3
```

그리고 가장 많이 쓰이는 `…` 문법인데 이건 배열로 저장하는 방식이다.

```jsx
const array = [1, 2, 3];
const [...NewArr] = array;
console.log(NewArr); //[1, 2, 3]

const [a, ...rest] = array;
console.log(a) //1
console.log(rest) //[2, 3]
```

이런식으로 배열의 각 요소를 하나하나 저장하는 방식이 아니라 한줄로 저장하는게 가능하다는 것이다.

C에서는 for문 굴려서 했는데…

# 5. 호이스팅과 TDZ

자바스크립트의 모든 선언에는 호이스팅이 일어난다고 한다.

호이스팅이란 코드를 실행하기 전 변수/함수/클래스 선언이 **스코프의 최상단으로 끌어 올려진 것 같은 현상**을 말한다(최상단으로 오는 것이 아님 먼저 읽을 뿐)

### var, 함수선언문의 경우

```jsx
console.log(a); //undefined

var a = 5;

foo(); //bar

function foo(){
	console.log("bar");
}
```

변수 a가 선언되기 전에 참조하였음에도 에러가 발생하지 않는다.

왜냐하면 자바스크립트 내부에서 미리 변수를 선언했기 때문이다. 이를 우리는 호이스팅이라 부른다.

함수도 마찬가지로 선언되기 전에 호출되었지만 에러가 발생되지 않았다.

### let, const, 함수표현식의 경우

```jsx
console.log(a);
//ReferenceError: Cannot access 'a' before initialization

let a = 5;

foo();
//ReferenceError: Cannot access 'foo' before initialization
const foo = function(){
	console.log("bar");
}
```

호이스팅에 영향을 받지 않는 모습을 보여주는데, 호이스팅이 발생하지 않는 것이 아니라. TDZ에 빠졌기에 발생하는 현상이다.

그에 따른 증거로 아에 변수 선언과 함수표현식을 빼버리면

`Cannot access`가 아닌 `is not defined` 메시지가 나온다.

따라서 값을 참조할 수 없게 되어 이런 상황 때문에 호이스팅에 영향을 받지 않는 것 처럼 보인다.

### TDZ가 뭔데?

TDZ에 빠져 호이스팅이 진행되지 않는다는건 무슨 말일까?

let과 const의 생명주기는 선언→초기화→할당순으로 진행된다.

var는 조금 다르게 선언(초기화)→ 할당 순으로 진행된다.

즉 이 싸이클에 따라 호이스팅이 진행되면 var는 선언(초기화)까지, let은 선언까지만 호이스팅에 의해 진행된다.

즉 var는 undefined상태가 되고, let은 **선언은 됐지만** 메모리 할당을 받지않은 상태가 되어 not access상태라는 것.

다시 TDZ 이야기로 돌아와서 TDZ는 스코프의 시작 지점부터 초기화 시작 지점까지의 구간을 말한다.

즉 TDZ에 빠진다는 건 let과 const가 생명주기에 의해 선언만 된 구간에 빠졌다는 것이고, 이에 따라 초기화가 진행되지 않았으니 **호이스팅이 진행되지 않은 것 처럼 보인다**는 뜻이었다.

# QUIZ

1. 안녕 JS!

```jsx
console.log("Hello JS!");
```

1. helloSomeone

```jsx
function helloSomeone(value){
	if (typeof value === "string"){
		if (value === "")
			console.log("Who are you?");
		else
			console.log(`Hello ${value}!`);
	}
	else if (typeof value === "number")
	{
		if (value > 0)
			console.log(`My age is ${value}`);
		else if (value < 1)
			console.log(`I am Benjamin Button!`);
		else if (isNaN(value))
			console.log(`Age is just a number`);
	}
	else if (!value)
		console.log(`I am null and void`);
	else if (typeof value === "undefined")
		console.log(`Nobody can define me!`);
}
helloSomeone("42");
helloSomeone("");
helloSomeone(null);
helloSomeone(42);
helloSomeone(-1);
helloSomeone(NaN);
helloSomeone(undefined);
```

==은 value가 같은지만 검사한다. 즉 3 == “3”도 true로 리턴해버린다.

하지만 ===을 사용하면 데이터 타입까지 검사한다.

[week1.zip](week1/week1.zip)