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
