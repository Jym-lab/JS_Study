# 4주차 자바스크립트 스터디

## 1. 클래스

자바스크립트에는 클래스가 필요가 없었다.

왜냐하면 **프로토타입 기반 객체지향 언어**이기 때문!

### 프로토타입

본디 클래스란 다른 객체의 원형이 되는 객체로 흔히 **’붕어빵 틀’**에 비유되곤 한다.

이를 사용하면 똑같은 객체를 몇개든 찍어낼 수 있고, 이렇게 만들어진 객체의 프로퍼티를 조금씩 수정할 수 있었다.

객체는 생성될 때 생성자라는 프로토타입 객체 멤버를 참조하고, 해당 객체가 갖는 속성이나 메소드들은 프로토타입이 가지고있다.

그래서 어떠한 객체를 생성할 때 프로토타입을 참조하면 똑같은 붕어빵을 여러개 찍어낼 수 있게된다.

이는 붕어빵이라는 레시피가 갖고있는 속성을 **상속**한다고 한다.

### 그래서 자바스크립트에서 클래스를 왜 쓰는건데?

자바스크립트의 클래스는 사실 프로토타입과 클로저를 조합한 **문법적 설탕(Syntactic sugar)**다.

그게 뭔 소리냐고? 클래스라고 정의하지만 사실 새로운 개념이 아니고 기존의 프로토타입과 똑같이 만들지만 선언하는 방법만 다르다는 거다

프로토타입은 함수지않냐고?

```jsx
class WhoAreYou{};

console.log(typeof WhoAreYou);
//function
```

맞다 클래스도 함수로 취급된다.

쓰는 이유는 간단하다. 프로토타입보다 문법이 간결하다.

### 1-1. 클래스 선언

클래스 선언방법은 우리가 아는 타 언어와 크게 다르지않다.

```jsx
class ImClass{
	sayHello(){
	console.log("난 클래스");
	}
};
//클래스 선언
const metoo = class {
	sayHello(){
		console.log("난 클래스 표현식");
	}
}
new ImClass().sayHello();//난 클래스
new metoo().sayHello();//난 클래스 표현식 
```

### 1-2. 클래스 생성자

클래스는 프로토타입과 똑같이 `new` 키워드를 사용해 생성자(constructor)의 영향을 받는다.

클래스는 constructor메소드를 선언하여 생성자를 정의한다.

```jsx
//프로토타입 함수의 경우
function myName(){
	this._name = '영민';
}
console.log(new myName());
//myName { _name: '영민' }

//클래스의 경우
class myName {
	constructor(){
		this._name = '영민';
	}
}
console.log(new myName());
//myName { _name: '영민' }
```

- 생성자 메소드는 두 개 이상 정의할 수 없다.
- 생성자 메소드를 정의하지 않을 경우 `constructor(){}` 와 똑같이 동작한다.

### 1-3 클래스 필드

클래스 몸체 안쪽에는 변수와 메소드만 선언이 가능하다.

단 변수의 경우 기존의 let, const같은 선언 대신 새로운 규칙이 적용된다.

```jsx
class Person{
	#name = '영민';//private형으로 선언
	age = 26; //클래스 필드 멤버 변수
	static job = 'student'; //static형 public변수
	static #iq = 120; //static형 private변수
	changeName(){
		this.#name = '현준'//내부에서 private변수 접근
		return this.#name
	}
}
const man = new Person();
console.log(man);//Person { age: 26 }
console.log(man.#name);//SyntaxError: Private field '#name' must be declared in an enclosing class
console.log(man.age); //26
console.log(man.changeName());//현준
```

이러면 private변수에 어떻게 접근할지 의문점을 갖게된다.

하지만 이미 다른 언어에서 class를 경험해본 사람이라면 이미 알고있는 흔한 방법이 있다

바로…

### 1-4. Getter와 Setter

```jsx
class Person{
	#name = '영민';//private형으로 선언
	get myName(){
		return this.#name;
	}
	set myName(name){
		this.#name = name;
	}
}
const man = new Person();
console.log(man.myName);
man.myName = '현준';
console.log(man.myName);
//영민
//현준
```

- getter와 setter는 함수가 아니다.
- get 키워드를 사용할 경우 반드시 무언가를 리턴 해야 한다.
- set 키워드를 사용할 경우 값을 할당하면 매개변수로 넘어간다.

## 2. 프로미스

프로미스에 대해 공부하기 위해선 자바스크립트의 특성 중 하나인 비동기 처리에 대한 선행지식이 필요하다.

### 2-1. 비동기 처리?

자바스크립트는 웹과 서버를 사용하는 언어다. 즉 서버와 서버, 서버와 클라이언트끼리의 통신을 담당한다.

만약에 DB서버의 데이터를 받아 스코어보드를 출력하는 작업을 해야한다고 가정해보자

작업은 아래와 같이 진행될 것이다.

1. 서버에 데이터 요청
2. 데이터 응답 받아 객체로 저장
3. 받은 객체를 스코어 보드에 출력

즉 서버에 요청을 한 뒤 **응답이 올 때까지 기다렸다가** 출력을 시켜야 한다는 것이다.

하지만 서버 상태에 따라 응답이 오는 **시간이 얼마나 걸리는지** 또 **불발 되어 응답이 오지 않을지**는

**그 누구도 장담할 수 없다**

게다가 자바스크립트는 비동기 처리의 특성이 있다. 코드 실행 자체는 순서대로 가지만

특정 코드의 처리가 끝날 때 까지 기다려주지 않는다는 점이다. 

```jsx
console.log(1);
console.log(2);
setTimeout(()=> console.log(3), 5000);
console.log(4);
//1
//2
//4
//3
```

코드 순서상 3을 출력하는게 먼저지만 3이 출력된 건 5초 뒤

3이 출력 될 때까지 기다리지 않고 4를 먼저 출력해버린다.

그래서 상황에 따라 선택적으로 동기적 처리를 해야 하는 상황이 생긴다.

### 그럼 동기적 처리를 어떻게 해야하지?

바로 콜백 함수를 사용하는 것이다.

```jsx
function print(int){
	console.log(int);
}
console.log(1);
console.log(2);
setTimeout(()=> {console.log(3); print(4);}, 5000);
//1
//2
//3
//4
```

이런 식으로 시간이 걸리는 작업 이후에 사용할 함수를 미리 선언해두고 호출 시키는 방법이다.

이 방법에는 크나큰 문제가 있다.

다음에 또 동기적 처리를 해야 할 때 콜백 함수를 남용한다는 것이다.

```jsx
function print(func){
	func()
}
console.log(1);
console.log(2);
setTimeout(()=> {console.log(3); print(()=>console.log(4));}, 5000);
//1
//2
//3
//4
```

실로 미친 짓이다. 이딴 식의 코딩을 우리는 콜백 지옥이라고 부른다.

이딴 식의 코딩을 막기 위한 방법이 바로 우리가 공부하는 프로미스다.

프로미스를 사용하면 비동기 처리의 장점인 병렬 처리방식을 살리고

특정 작업만 동기적으로 처리할 수 있다.(응답을 기다렸다가 처리)

### Promise

프로미스는 다음과 같이 구성된다.

```jsx
new Promise((resolve, reject) => {
	//code
})
//resolve는 요청이 성공적일 때 실행되는 콜백 함수
//reject는 요청이 실패하면 실행되는 콜백 함수
```

Promise 객체는 state와 result를 담은 객체를 리턴하게 된다.

```jsx
const a = new Promise((resolve, reject) => {
	setTimeout(()=>{
		resolve('OK')
	}, 2000)
	//서버로 데이터를 요청해서 데이터 객체를 받아옴
	//resolve(data);
});
console.log(a);
setTimeout(()=> console.log(a), 2500);
//Promise { <pending> }
//Promise { 'OK' }
```

pending(대기)를 가지고 있다가 프로미스의 결과를 리턴하게 된다.

결과를 리턴 할 때 성공적인지 실패인지 구분하는 방법은 then과 catch를 사용한다.

```jsx
const a = new Promise((resolve, reject) => {
	setTimeout(()=>{
		//resolve('OK');
		reject('Fail');
	}, 2000)
});
a.then(
	function(result){
		console.log(result);
	},
	function(err){
		console.log(err);
	}
)
```

resolve와 reject중 호출 되는 쪽에 따라 결과가 실행된다.

하지만 이 경우는 가독성이 구리니까 꼭 catch문을 사용하도록 하자

```jsx
const a = new Promise((resolve, reject) => {
	setTimeout(()=>{
		//resolve('OK');
		reject('Fail');
	}, 2000)
});
a.then(
	function(result){
		console.log(result);
	}
).catch(
	function(err){
		console.log(err);
	}
)
```

위의 두 코드는 완전히 똑같이 동작한다.

## 3. async / await

async와 await은 기존의 프로미스를 개선하고 더욱 편리하게 쓰기 위한 문법이다.

### async

async 키워드는 function앞에 위치한다.

```jsx
async function Func(){
	return 1;
}
Func().then(result => console.log(result));
//1
```

async키워드가 붙은 함수는 항상 프로미스를 반환한다. 리턴 형태가 프로미스가 아니더라도

resolve된 프로미스로 감싸 반환시켜준다.

프로미스를 리턴해도 결과는 같다.

### await

await 키워드는 async 함수 안에서만 동작한다.

await 키워드가 존재한다면 프로미스가 처리될 때까지 기다린 후 결과를 반환한다.

```jsx
async function Func() {

  let promise = new Promise((resolve, reject) => {
    setTimeout(() => resolve("OK"), 1000)
  });

  let result = await promise; //프로미스가 끝나기까지 대기

  console.log(result); //OK
}
Func();
```

async함수 내에서만 동작하는 await키워드는 당연히 최상위인 글로벌 스코프에선 사용할 수 없다.

하지만 그럼에도 사용하려면 어떻게 해야할까?

```jsx
let promise = new Promise(resolve => {
	setTimeout(() => resolve("OK"), 1000)
});
(async() => {
	let response = await promise;
	console.log(response);
})();
//OK
```

익명 함수로 감싸준뒤 async 키워드와 함께 사용해주면 끝이다.

### async와 await을 사용한 예제 코드!

```jsx
const f1 = () => {
	return new Promise((res, rej) => {
		setTimeout(() => {
			res("1번 함수 호출 완료");
		}, 1000);
	});
};

const f2 = (message) => {
	console.log(message)
	return new Promise((res, rej) => {
		setTimeout(() => {
			res("2번 함수 호출 완료");
		}, 2000);
	});
};

const f3 = (message) => {
	console.log(message)
	return new Promise((res, rej) => {
		setTimeout(() => {
			res("3번 함수 호출 완료");
		}, 3000);
	});
};

(async ()=> {
	const result1 = await f1();
	const result2 = await f2(result1);
	const result3 = await f3(result2);
	console.log(result3);
})();
```

2번 함수에 함정을 만들어 놨는데 몇 명이나 피해갈지 기대가 된다….

# Quiz

## 01 - Callback Hell 🔥

```jsx
function randomFail() {
	if (Math.random() < 0.2) throw "제작 실패..!(월급이 삭감되었다 ㅜㅜ)";
  }

function makeDough() {
	console.log("반죽 만들기 시작!");
	return new Promise((resolve, reject) => {
	setTimeout(() => {
		try {
		  randomFail();
		  resolve();
		  console.log("반죽 완성!")
		} catch (error) {
		  console.log("반죽 만들기 실패...");
		  reject(error);
		}
	  }, 3000);
	});
}
  
function firstFermentation() {
	console.log("1차 발효 시작!");
	return new Promise((resolve, reject) => {
		setTimeout(() => {
		  try {
			randomFail();
			resolve();
			console.log("1차 발효 성공!")
		  } catch (error) {
			console.log("1차 발효 실패...");
			reject(error);
		  }
		}, 5000);
	});
}

function shape() {
	console.log("성형 하기 시작!");
	return new Promise((resolve, reject) => {
		setTimeout(() => {
		  try {
			randomFail();
			resolve();
			console.log("성형 하기 성공!")
		  } catch (error) {
			console.log("성형 하기 실패...");
			reject(error);
		  }
		}, 4200);
	});
}

function secondFermentation() {
	console.log("2차 발효 시작!");
	return new Promise((resolve, reject) => {
		setTimeout(() => {
		  try {
			randomFail();
			resolve();
			console.log("2차 발효 성공!")
		  } catch (error) {
			console.log("2차 발효 실패...");
			reject(error);
		  }
		}, 2000);
	});
}

function fry() {
	console.log("튀기기 시작!");
	return new Promise((resolve, reject) => {
		setTimeout(() => {
		  try {
			randomFail();
			resolve();
			console.log("튀기기 성공!")
		  } catch (error) {
			console.log("튀기기 실패...");
			reject(error);
		  }
		}, 5000);
	});
}

  // 꽈배기 제작
async function make() {
	try {
	  await makeDough();
	  await firstFermentation();
	  await shape()
	  await secondFermentation();
	  await fry();
	  console.log("꽈배기 만들기 성공!")
	} catch (error) {
	  console.log(error);
	}
}

make();
```

내가 의도한 정답은 이거였는데 과연 몇명이나 맞췄을까?

## 02 - 스파게티 스토리

```jsx
function boilNoodles() {
	console.log("면 삶기 시작");
	return new Promise((resolve) => {
	  setTimeout(() => {
		console.log("면 삶기 완료");
		resolve();
	  }, 10000);
	});
}

function processB1() {
	console.log("브로콜리 대치기 시작");
	return new Promise((resolve) => {
		setTimeout(() => {
		  console.log("브로콜리 대치기 완료");
		  resolve();
		}, 1000);
	  });
}
function processB2() {
	console.log("마늘과 양파 볶기 시작");
	return new Promise((resolve) => {
		setTimeout(() => {
		  console.log("마늘과 양파 볶기 완료");
		  resolve();
		}, 2000);
	  });
  }
function processB3() {
	console.log("베이컨과 햄 볶기 시작");
	return new Promise((resolve) => {
		setTimeout(() => {
		  console.log("베이컨과 햄 볶기 완료");
		  resolve();
		}, 2000);
	});
}
function processB4() {
	console.log("야채와 소스 볶기 시작");
	return new Promise((resolve) => {
		setTimeout(() => {
		  console.log("야채와 소스 볶기 완료");
		  resolve();
		}, 3000);
	});
  }
  
async function processB() {
	await processB1();
	await processB2();
	await processB3();
	await processB4();
	console.log("B 작업 모두 완료");
}
  
function mixAllTogether() {
	console.log("면까지 넣고 다 같이 볶기 시작");
	return new Promise((resolve) => {
	  setTimeout(() => {
		console.log("스파게티 완성");
		resolve();
	  }, 3000);
	});
}
  
async function makeSpaghetti() {
	const tasks = [boilNoodles(), processB()];
	await Promise.all(tasks);
	await mixAllTogether();
}

makeSpaghetti();
```