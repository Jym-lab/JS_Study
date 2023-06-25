const stackCreate = () => ({
	arr: []
  });

const stackEmpty = stack => {
	let count = 0;
	for (element in stack.arr){
		count++;
	}
	return count === 0;
};

const stackPush = (stack, data) => stack.arr = [data, ...stack.arr];

const stackPeek = stack => {
	if (!stackEmpty(stack))
		return stack.arr[0];
}

const stackPop = stack => {
	if (stackEmpty(stack))
		return undefined;
	let count = 0;
	const newArr = [];
	for (element in stack.arr){
		count++;
	}
	for (let i = 1; i < count; i++){
		newArr[i - 1] = stack.arr[i];
	}
	stack.arr = newArr;
}

newStack = stackCreate();

stackPush(newStack, 10);
console.log(newStack);
stackPush(newStack, 20);
console.log(newStack);
stackPush(newStack, 30);
console.log(newStack);
stackPop(newStack);
console.log(newStack);

console.log(stackPeek(newStack));
