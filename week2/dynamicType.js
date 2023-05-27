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
