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
