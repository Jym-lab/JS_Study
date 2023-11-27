# 5주차 자바스크립트 스터디

# 1. 이터레이터

### 1-1. 이터러블

이터러블 객체란 반복가능한 객체를 뜻하는 것으로 Symbol.iterator 메서드를 소유한 객체를 말한다.

자바스크립트에선 기본적으로 Symbol.iterator메서드를 소유한 객체를 다음과 같이 정의한다.

| Array(배열) | 배열의 각 요소를 순회 |
| --- | --- |
| String(문자열) | 문자열의 각 문자를 순회함 |
| TypedArray(타입화 배열) | ArrayBuffer를 기반으로 하는 정적 크기의 배열(Int8Array, Uint8Array, Uint8ClampedArray, Int16Array |
| Map | 키-값 쌍으로 저장하는 자료형 |

이 외에도 Set이나 Arguments 객체가 있지만 중요한건 아니니 일단 넘어가고

이터러블 객체라는건 이터레이터 메서드를 가진 객체를 말하고

그러 `for…of`문법을 사용할 수 있다는 뜻이다.

### 1-2. 이터레이터

이터레이터 메서드의 구성은 다음과 같다.

1. next 메서드
2. next 메서드는 다음 객체를 리턴한다. `{ value: 값, done: true/false }` 

```jsx
const arr = [1, 2];
const iter = arr[Symbol.iterator]();

console.log(iter.next());
//{value: 1, done: false}
console.log(iter.next());
//{value: 2, done: false}
console.log(iter.next());
//{value: undefined, done: true}
```

next 메서드가 리턴하는 객체를 이터레이터 객체라고 한다.

for of는 이터레이터 객체를 호출하여 이터러블 객체를 순회한다.

### 1-3. 기존 반복문들과의 차이점

`for` 부터 살펴보자면 되게 간단하다. `for`문은 기본적으로 반복 끝 값을 지정해줘야 한다.

length를 사용하면 간단하지만 이 문법조차 길다.

그래서 `for…in` 반복문을 가장 많이 사용하게 되는데

`for…in` 의 경우 열거형(Enumerater) 데이터는 모두 순회할 수 있다. 즉 객체라면 뭐든지 순회가 가능하다.

배열도 객체기에 순회가 가능하지만, 문제가 하나 있다.

바로 index 값을 객체의 key값으로 보고 순회한다는 점.

그래서 index를 출력시킨다.

```jsx
const arr = [1, 2, 3];
for (let a in arr){
	console.log(a);
} 
//0
//1
//2
```

그래서 보통 `forEach`를 사용해서 배열을 순회했지만, `forEach`에는 한 가지 문제가 있다.

바로 **배열에서만 사용 가능한 메서드**라는 점

위에서도 언급했다시피 이터러블 객체는 배열만 존재하는 것이 아니다.

게다가 `forEach`는 반복 순회중 `break`나 `return`으로 사용 종료가 불가능하다.

그래서 `for of`문을 사용하는 것이다.

# 2. 제너레이터

제너레이터는 좀 더 정확하게 설명하자면 이터러블을 생성해내는 함수다.

생각보다 간단한 개념인데. `for…of` 를 사용할 수 있는 객체를 리턴시킨다.

다음과 같이 정의한다.

```jsx
function *generaterFunc(){
	yield 1;
	yield 2;
	return 3;
}

const generater = generaterFunc();
console.log(generater);//Object [Generator] {}
console.log(generater.next());//{ value: 1, done: false }
```

즉 return문이 사용되었다고 해서 3이라는 데이터를 반환하는 것이 아니라 Generater 객체를 반환한다.

해당 객체를 이터러블 객체기도 하다.

제너레이터 함수는 일반 함수와 다르게 독특하게 작동한다.

함수의 코드 블록을 한번에 실행하는 것이 아니라 일시 중지했다가 필요한 시점에서 재시작 할 수 있다.

사용된 yield문이 중단 지점을 지정한다.

# 3. 웹 브라우저와 자바스크립트

## 3-1. HTTP / HTTPS

HTTP는 클라이언트와 서버 간 통신을 위한 프로토콜을 의미한다.

결국 프로토콜이란 통신을 하기 위한 약속을 의미하고

HTTP는 80포트로 요청을 보내는 규칙을 말하고 HTTPS는 443포트로 요청을 보내는 규칙이다.

요청을 보냈을 때 응답에 대한 약속도 있는법. 마치 스파이가 암호로 대답하듯이 말이다.

![이러한 통신 규칙은 꽤 쉽게 예시를 찾아볼 수 있다.](week5/Untitled.png)

이러한 통신 규칙은 꽤 쉽게 예시를 찾아볼 수 있다.

응답으로는 우리가 흔히 아는 200, 400, 401, 402, 403, 404 에러 같은 숫자 코드를 응답한다.

통신이 어떻게 이루어졌는지 그 결과를 요청한 클라이언트에게 보내는 것이다.

### 그래서 둘의 차이는?

간단하다. HTTP는 문제가 하나 있었다.

바로 데이터를 있는 그대로 보낸다는것

**잉? 그게 뭐가 문제지?**

문제는 데이터를 주고 받을 때 일어나는 통신을 바로 제 3자가 훔쳐볼 수 있다는 것이다.

민감한 개인정보라도 주고 받는다면 뭐… 말이 더 필요하겠는가?

이를 해결하기 위해 등장한 것이 바로 HTTPS다.

데이터 암호화가 추가되어 통신을 사용하는데 암호화 방식 두 가지를 모두 사용한다.

1. 대칭키 암호화
2. 비대칭키 암호화

내용만 보면 두 가지가 상반되는 건데 두 가지를 모두 사용한다는 것이 의문스러울 수 있다.

> 통신 흐름도.
> 
> 1. 클라이언트(브라우저)가 서버로 최초 연결 시도를 함
> 2. 서버는 공개키를 클라이언트(브라우저)에게 넘겨줌
> 3. 브라우저는 공개키의 유효성을 검사하고 세션키를 발급함
> 4. 브라우저는 세션키를 보관하며 추가로 서버의 공개키로 세션키를 암호화하여 서버로 전송함
> 5. 서버는 개인키로 암호화된 세션키를 해석하여 세션키를 얻음
> 6. 클라이언트와 서버는 동일한 세션키를 공유하므로 데이터를 전달할 때 세션키로 암호화/복호화를 진행함

같은 흐름으로 진행된다. 즉 데이터는 대칭키 암호화로 주고받지만.

대칭키 자체를 비대칭키 암호화로 주고받는다.

## 3-2. 웹 스토리지와 쿠키(Web Storage and Cookie)

웹 스토리지는 서버와 클라이언트가 통신할 때 주고 받는 데이터를 서버나 DB에 저장하지 않고 브라우저에 저장하는 기술이다.

웹 스토리지의 종류는 두가지가 있다.

### 로컬 스토리지

- 특정 웹 사이트를 탭으로 여러개를 띄워도 동일한 데이터를 공유한다.
- 브라우저를 종료한 뒤 다시 실행해도 데이터가 남아있다.
- 따로 삭제하지 않으면 영구적으로 데이터가 보존된다.

### 세션 스토리지

- 웹 페이지의 세션이 종료되면(브라우저 종료) 데이터가 지워진다.
- 각각의 탭과 창마다 데이터가 격리되어 보관된다.

## 쿠키(Cookie)

웹 서버가 브라우저에게 응답과 함께 넘겨 저장해뒀다가

브라우저의 요청을 처리하던 중,

쿠키의 정보가 필요할 때

브라우저에 요청해서 다시 서버로 받는 문자열 정보를 말한다.

참고로 쿠키보다는 웹 스토리지를 많이 쓰는 추세다~~~

# QUIZ

[JSONPlaceholder - Free Fake REST API](https://jsonplaceholder.typicode.com/)

```jsx
async function api() {
	try {
		result = await fetch('https://jsonplaceholder.typicode.com/todos/').then(res => res.json());
	}
	catch (error){
		console.log(error);
	}
	console.log(result);
}

api();
```

![Untitled](week5/Untitled%201.png)

```jsx
( async function api() {
	try {
		result = await fetch('https://jsonplaceholder.typicode.com/comments/1').then(res => res.json());
	}
	catch (error){
		console.log(error);
	}
	console.log(result);
	}
)();
```

![Untitled](week5/Untitled%202.png)

```jsx
( async function api() {
	try {
		result = await fetch('https://jsonplaceholder.typicode.com/albums/1').then(res => res.json());
	}
	catch (error){
		console.log(error);
	}
	console.log(result);
	}
)();
```

![Untitled](week5/Untitled%203.png)

```jsx
( async function api() {
	try {
		result = await fetch('https://jsonplaceholder.typicode.com/photos').then(res => res.json());
	}
	catch (error){
		console.log(error);
	}
	console.log(result);
	}
)();
```

![Untitled](week5/Untitled%204.png)