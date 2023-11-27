# 2주차 자바스크립트 스터디

# 0. 객체 (Object)

객체는 자바스크립트의 자료형중 하나다. 복합된 값이라고도 하는데

여러 가지 값(기본 값이나 다른 객체)를 모아서 이름을 통해 저장하고 가져올 수 있게한다.

객체는 사실 우리가 일상에서 보는 것과 크게 다르지 않다.

![우리집 뚱냥이 코코](week2/Untitled.png)

우리집 뚱냥이 코코

우리집 고양이를 예시로 분석해보도록 하겠다.

| 이름 | 종족 | 나이 | 몸무게 |
| --- | --- | --- | --- |
| 코코 | 코리안 숏 헤어 | 6살 | 9kg |

이런식으로 우리집 고양이가 가진 이름이나 값(Parameter)을 프로퍼티라고 부른다.

객체는 단순 문자열과 값만 연결하는 것은 아니다.

자바스크립트 객체는 자신만의 프로퍼티를 가지는 것 외에도

**프로토타입**이라고 불리는 또 다른 객체에서 프로퍼티를 가져올 수도 있다.

이를 **프로토타입 상속**이라고 불리는데 자바스크립트의 중요한 기능 중 하나라고 한다.

### **객체 리터럴**

다음은 객체 리터럴를 사용하여 객체를 생성하는 코드다.

콜론`(:)`으로 구분한 `이름 : 값` 형식으로 되어있다.

객체 리터럴의 마지막 프로퍼티 뒤에 콤마`(,)` 를 사용할 수 있다.

미리 미리 작성해두면 문법 에러가 일어난 가능성이 낮아지므로 알아두면 좋다.

```jsx
const o = {
	hello: 'world',
	name: 'secret',
}
```

### new

MDN에서는 다음과 같이 정의할 수 있다고 한다.

```jsx
let o = new Object();

let o = new Object(undefined); // null

let o = new Object(true);

let o = new Object(Boolean())
//o = new Boolean(false)와 같음
```

new 연산자는 새 객체를 생성하고 초기화한다.

이런 형태로 사용하는 함수를 생성자라고 하고 새로 생성된 객체를 초기화한다.

### TMI

**단축 프로퍼티**

ES6 이후에는 같은 변수 명이면 콜론을 생략할 수 있다.

```jsx
let x = 1,
  y = 2;
const o = {
  x: x,
  y: y,
};

//위의 코드는 아래와 같이 수정이 가능합니다.
const o = {
  x,
  y,
};
```

**분해 연산자**

```jsx
const position = { x: 0, y: 0 };
const dimensions = { width: 100, height: 75 };

const rect = {...position, ...dimensions };

for(n) {
	const rect = {...position, ...dimensions }; // 2 * 2 * n
}
```

점 3개를 이용하면 기존 객체의 프로퍼티를 새 객체에 복사할 수 있다.

# 1. 표현식 / 문 / 연산자

## A. 표현식

자바스크립트에서 표현식은 `어떤 값으로 평가되는 구절`이다.

자바스크립트 코드에 포함된 상수도 단순하지만 표현식이라 부른다.

배열 표현식도 3단계로 나누어 표현이 가능한데

1.  arr`[` 배열을 여는 대괄호
2. 인덱스로 평가되는 표현식arr[`1`
3. 닫는 대괄호 arr[1`]`

종류를 정리해보면 다음과 같다.

1. 값(리터럴)
2. 변수
3. 객체 프로퍼티
4. 배열 요소
5. 함수 호출
6. 피연산자와 연산자의 조합 등

```jsx
4; // 숫자 4 라는 값으로 평가되기에 표현식입니다.
('hello'); // 문자 "hello" 라는 값으로 평가되기에 표현식입니다.
5 * 3; // 숫자 15 라는 값으로 평가되기에 표현식입니다.
```

### 함수 정의 표현식

```jsx
let counter = function (x, y){
	return x + y;
} //함수 정의 표현식이라 부른다
const test = 3;

function test (x, y){
	return x + y;
} //함수 선언문이라고 부른다.
```

### 프로퍼티 접근 표현식

자바스크립트에는 두 가지 **프로퍼티 접근 문법**이 있다.

**1) 대괄호 표기법 ( `expression[expression]` )**

표현식(객체나 배열) 뒤에 대괄호를 쓰고 그안에 다른 표현식을 쓰는 방법이다.

대괄호 표기법은 4가지로 사용할 수 있다.

```jsx
// 1. 스페이스나 구두점
const obj = {
  'white space': 3,
  'black.space': 4,
};
obj['black.space']; // => 4
obj['white space']; // => 3

// 2. 숫자인 경우 (배열)
const arr = [1, 2, 3, 4, 5];
arr[0]; // => 1
arr[3]; // => 4

// 3. 프로퍼티 이름이 고정되어 있지 않은 경우
const subject = {
  math: 30,
  eng: 10,
};
let key = prompt('어떤 점수를 확인해보시겠어요?', 'math');
subject[key]; // => 30

// 4. 계산결과를 추가할 경우
let a = ['o', 4, [5, 6]];
a[1 + 1]['1']; // => 6 ("1"이라는 값이 1로 변경되어 1번째 방의 값을 가져옵니다.)
```

**2) 점 식별자 문법( `expression.identifier` )**

```jsx
const ME = {
  name: 'yjoo',
  email: 'jym9809@gmail.com',
};
// ME는 객체를 가리키는 식별자(identifier)
// name이나 email은 프로퍼티를 가리키는 식별자를 뜻함
console.log(ME.name);//yjoo
console.log(ME.email)//jym9809@gmail.com
```

## B. 문( Door아님 ㅎ )

표현식은 자바스크립트의 `어떤 값으로 평가되는 구절` 이라면 문은 뭘까?

문은 `자바스크립트의 문장이나 명령어`라고 볼 수 있다.

```jsx
//변수 선언문
var x;

//할당문
x = 5;

//함수 선언문
function foo() {}

//조건문
if (x > 1) {
  console.log(x);
}

//반복문
for (var i = 0; i < 2; i++) {
  console.log(i);
}
```

예전에 컴파일러에 대해 잠깐 공부한 적이 있는데, 컴파일러는 코드 한줄 한줄을

더이상 나눌 수 없는 최소 단위까지 나누어서 코드를 실행한다.

이를 토큰이라고 부르는데 하나의 함수, 연산자, 변수 등이 이에 해당한다.

예를 들면 token = this;를 토큰 단위로 나누면 `token`, `=`, `this`, `;` 이런 식이다.

자바스크립트의 문은 이러한 토큰들이 모여 구성된다.

아마 토큰 단위를 거의 표현식이라고 하지 않을까 싶다.

```jsx
let sum = 15;//선언문
sum; //표현식
function square(){ return 2 * 2} //함수 선언문
square(); //표현식
for (let i = 0; i < 10; i++)() //반복문
```

## C. 연산자

연산자는 산술 표현식, 논리 표현식 에 사용되는 요소.

대부분의 연산자는 `+`나 `=` 처럼 부호로 표현된다

`delete`나 `instanceof` 같은 키워드로 표현되는 **키워드 연산자**도 있다!

### 산술 표현식

숫자를 조작하는 연산자에 관한 표현식이다.

1. `(**)`지수
2. `(*)`곱셈
3. `(/)`나눗셈
4. `(%)` 나머지
5. `(+)` `(-)` 덧셈과 뺄셈

사칙연산에도 우선순위가 있듯이, 산술 표현식도 우선순위가 있다.

`**` > `*`, `/`, `%` > `+`, `-` 나열하고 보니 그냥 사칙연산이랑 똑같은데?

### 논리 표현식

논리 연산자는 보통 boolean 값을과 함께 사용해서 boolean값을 반환한다

그러나 `&&`나 `||` 연산자는 비교 하는 두 값 중 하나를 반환한다.

따라서 둘 중 하나가 boolean이 아니라면 반환값이 boolean이 아닐수도 있다.

**&& 연산자(AND)**

`&&`연산자는 세 가지 용도로 사용할 수 있다.

1. boolean 타입의 비교 값을 사용할 경우

```jsx
name === '주영민' && person === true;
//이름이 주영민이고, 사람이라는 두 가지 조건을 모두 통과할 경우 true
```

1. true 나 false같은 값 사이에서 bool AND 연산자로 사용할 경우

말이 좀 어렵긴 한데 false가 아닌 `false 같은 값` 이 있다.

대표적으로 `null`, `undefined`, `0`, `-0`, `NaN`, `**””**`가 false의 대명사에 해당한다. 

```jsx
if (data && data.length > 0){
	//data가 undefined가 아니고 length가 0보다 크다는 두 가지 조건 모두 통과
}
```

1. 단축 평가로 사용할 경우 (?이게 무슨말)

`&&` 연산자는 왼쪽에 있는 값 부터 먼저 평가한다.

왼쪽에 있는 값이 false에 해당하는 값이라면, 오른쪽의 표현식을 평가하지도 않는다.

왼쪽 값이 true 같은 값이라면, 표현식의 전체적인 값은 오른쪽의 값이 된다.

이런 특성을 이용한 방법이 단축 평가라고 할 수 있다.

```jsx
if (2 > 5 && 3 > 1){
	//왼쪽 연산이 false이기에 오른쪽 연산은 하지 않는다.
}
```

이용하면 이런 식의 개발이 가능하다

```jsx
const stop = () => {
	console.log('hello');
}
2 < 5 && stop();
//hello
```

실무에 적용한다면 이런식이 아닐까?

```jsx
const data = [];
const printHeader = () => {
  return <h1>Title</h1>;
};

data[0] && printHeader();
```

data[0]의 값만으로 if문을 쓰지 않고 printHeader를 호출할지 말지 결정할 수 있다.

---

# 2. 배열-비슷한-객체

자바스크립트에는 배열과 비슷한 객체가 존재한다.

이게 뭔소린고 하니 영어로 표기하면 array-like object

진짜 그냥 배열과 유사한 객체 사용법이란거다.

```jsx
const arrayLike = {
  0: 'math',
  1: 'english',
  2: 'science',
  length: 3,
};

console.log(arrayLike[0]); // => math
```

출력할 때 index를 사용하며 기존 배열과 비슷하게 동작하는 것을 알 수 있다.

하지만 배열과의 차이점이 존재한다.

![Untitled](week2/Untitled%201.png)

바로 배열의 `push()`, `indexOf()`, `forEach()` 같은 메서드들이 없다.

![Untitled](week2/Untitled%202.png)

### 근데 객체나 배열이 따로 존재하는데 이걸 왜 알아야하지?

놀랍게도 array-like object를 리턴하는 API가 간혹가다 종종있다.

이걸 모르면 어? 이거 배열 메서드가 작동안되지? 하는 순간이 온다는거다.

그때를 대비해서 알아두면 당황하지 않고 처리할 수 있다.

직접 선언해 사용하는 것은 권장하지 않는다.

---

# 3. Array

배열에 대해 좀 더 자세히 알아보자. 메서드들도 사용 할 줄 알아야지

### **배열 리터럴**

일반적으로 우리가 알고 있는 배열 선언식은 배열 리터럴이라 부르며

다음과 같이 사용한다.

```jsx
const empty = [];
const misc = [1.1, true, 'a'];
//타입이 다른 요소가 세 개 있고 콤마로 끝난 배열
```

그 와중 성긴배열이란 놈을 발견했다

```jsx
const 성긴_배열 = [1, , 3]; // 이게 바로 성긴 배열
성긴_배열[1]; // => undefined
```

**성긴 배열**은 배열 리터럴에 빈 값을 넣으면 index는 채워지지만

undefined가 리턴된다.

### 분해 연산자

이 내용은 예전에 했던 거지만 한번 더 다뤄보도록 하겠다.

```jsx
const a = [1, 2, 3]
const b = [0, ...a, 4]; //0, 1, 2, 3, 4
```

분해 연산자는 배열을 얕게 복사할 때 유용하다.

### **얕은 복사?**

얕은 복사는 참조 타입 데이터가 저장한 **메모리 주소 값**을 복사한 것을 의미한다.

이게 뭔 소리냐면, 원본의 데이터 주소만 복사했을 뿐, 값 자체를 새로 할당해서 복사한게 아니란 뜻이다.

그런 무슨 결과가 일어나냐고?

```jsx
const a = [1, 2, 3]
const b = a;

console.log(b); // 1, 2, 3
a.push(5);
console.log(b); // 1, 2, 3, 5
```

a에 값을 push했지만 b의 값도 바뀐다.

원본 데이터가 변경되었을 때 영향을 받는다는 소리다.

이에 반대되는 개념인 깊은 복사가 있는데 이건 나중에 다루도록 하겠다.

또한 분해 연산자는 모든 반복적인 객체에서 동작한다.

그래서 반복되는 문자열도 분해 연산자를 사용할 수 있다.

```jsx
const digits = [...'abcdefghijklmnop'];
console.log(digits);
//[
//  'a', 'b', 'c', 'd',
//  'e', 'f', 'g', 'h',
//  'i', 'j', 'k', 'l',
//  'm', 'n', 'o', 'p'
//]
```

### Array.of()

Array.of() 생성자를 사용할 때 숫자를 인자로 넘기면, 그 숫자의  index 배열이 생성된다.

```jsx
Array.of(); // []
Array.of(10) // [10]
```

근데 이거 좀 골때린다. 10을 넘긴다고 길이 10개짜리 배열이 나오는게 아니고

길이가 1인데, 10인덱스밖에 없다 ES6에선 이를 해결하는 메서드가 나왔다.

### Array.from()

첫 번째 인자로 이터러블 객체나 array-like object를 받아 새 배열을 만들어 반환한다.

```jsx
const original = new Array(1, 2, 3, 4, 5)
const copy = Array.from(original)
```

이게 알아두면 좋은 메서드인 이유는 array-like object를 진짜 배열로 만들어주는 방법이기 때문이다.

두번째 인자로는 함수를 넘길 수 있다.

1번째 인자의 배열을 함수에 전달하고 반환 값을 배열에 저장한다.

```jsx
const a = Array.from([1, 2, 3], (x) => x + x); // => [2, 4, 6]
```

동적 배열을 생성할 땐 이 방법이 제일 좋다고 한다.

무엇보다  코드가 간단해진다고.

### 성긴 배열

이놈 그냥 지나치려고 했는데 너무 신경쓰였다.

그래서 찾아봤다.

성긴 배열은 **인덱스가 연속적이지 않은 배열**이라고 한다.

```jsx
const a = [1, , , 5];
// 요소 개수: 2
// length: 4
console.log(a[1]); // => undefined
```

대부분의 자바스크립트 배열은 성기지 않은 배열이지만…

성긴 배열을 다루게 된다면 기억하자. 이건 undefined로 꽉 찬 빽빽한 배열이 취급이다.

---

# 4. 타입 변환

자바스크립트의 타입 변환에는 두가지 방법이 있다.

**명시적 타입 변환**과 **암묵적 타입 변환**이 바로 그것이다.

### 명시적 타입 변환

---

명시적으로 타입을 변환하는 가장 단순한 방법은 `자료형()` 의 형태다.

```jsx
Boolean([]); // => true
String(false); // => "false"
Number('3'); // => 3
```

자료형 함수들은 모두 new와 함께 생성해서 생성자로 사용할 수 있다.

이 것을 Wrapper 객체라고 하는데, 지금은 사용하지 않는다.

### 암묵적 타입 변환

---

암묵적 타입 변환은 자바스크립트가 필요에 따라 자동으로 형 변환시키는 것을 말한다.

특정한 타입으로 정의가 불가능한 타입 또는 string인자를 받는데 number타입을 넘겼을 때 (예상치 못한 타입)

사용 가능한 타입으로 바꿔준다고 보면된다.

```jsx
console.log(3 * "3"); //9
console.log(1 + "2" + 1); //121
console.log(true + true); // 2
console.log(10 - true); // 9

const foo = {
	valueOf: () => 2
}
console.log(3 + foo) // 5
console.log(4 * foo) // 8

const bar = {
	toString: () => "promise is a boy :)"
}

console.log(1 + bar) // "1 promise is a boy :)"

console.log(4 * []) // 0
console.log(4 * [2]) // 8
console.log(4 + [2]) // "42"
console.log(4 + [1, 2]) // "41, 2"
console.log(4 * [1, 2]) // NaN

console.log("string" ? 4 : 1) // 4
console.log(undefined ? 4 : 1) // 1
```

이 자동 형 변환 규칙에도 우선순위가 있다.

`+` 연산자는 숫자보다 문자열이 우선된다. 그래서 대부분 문자열로 변환된다.

그 외 연산자에는 숫자가 우선된다. 그래서 숫자로 변환된다.

---

# Quiz

1. TimeWrap

```jsx
const month = [5];
let day = [17];

const timeWarp = (newMonth, newDay) => {
  month[0] = newMonth;
  day[0] = newDay;

}

timeWarp(5, 10); 
console.log(month, day);
timeWarp(7, 20);
console.log(month, day);
```

사실 이 문제는 말장난에 가까운 문제였다.

이 방법 외에도 블록 스코프를 이용한 방법, push 메서드를 사용하는 방법이 있다.

1. Time to Change!

```jsx
const dynamicType = {
  value: undefined,
  type: undefined,
  put(value) {
    if (typeof value === "object") {
      if (Array.isArray(value))
        this.type = "array";
      else
        this.type = "object";
    } else {
      this.type = typeof value;
    }
    this.value = value;
  },
  change(newType) {
    if (this.type !== undefined) {
      switch (newType) {
        case "String":
          this.value = String(this.value);
          break;
        case "Number":
          this.value = Number(this.value);
          break;
        case "Object":
          this.value = { value: this.value };
          break;
        case "Array":
          this.value = [this.value];
          break;
        default:
          console.log("Unsupported type");
      }
    }
  },
  printType() {
    if (Array.isArray(this.value)) {
      console.log(`${this.value}, array`);
    } else if (typeof this.value === "object") {
      console.log(`${this.value.value}, ${typeof this.value}`);
    } else {
      console.log(`${this.value}, ${typeof this.value}`);
    }
  }
};

dynamicType.put(42);
dynamicType.change("Array");
dynamicType.printType();
```

출력 결과만 잘 나온다면 모두 정답인 코드다.

내 코드가 무조건 정답인 것은 아니다

[코드 보기](https://github.com/Jym-lab/JS_Study/tree/master/week2)