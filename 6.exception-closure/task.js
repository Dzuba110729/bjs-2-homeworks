// Задача №1.

function parseCount(someValue) {
	let parsed = Number.parseInt(someValue);
	if (isNaN(parsed)) {
		throw new Error("Невалидное значение");
	} else {
		return parsed;
	}
}

function validateCount(someValue) {
	try {
		let parsed = parseCount(someValue);
		return parsed;
	} catch (error) {
		return error;
	}
}

// Задача №2.

class Triangle {
	constructor(a, b, c) {
		if (a + b < c || a + c < b || b + c < a) {
			throw new Error("Треугольник с такими сторонами не существует");
		} else {
			this.a = a;
			this.b = b;
			this.c = c;
		}
	}

	getPerimeter() {
		return this.a + this.b + this.c;
	}

	getArea() {
		let p = 0.5 * (this.a + this.b + this.c);
		let rootValue = p * (p - this.a) * (p - this.b) * (p - this.c);
		let area = Math.sqrt(rootValue);
		return +area.toFixed(3);
	}
}

function getTriangle(a, b, c) {
	try {
		return new Triangle(a, b, c);
	} catch (error) {
		return {
			getArea: () => "Ошибка! Треугольник не существует",
			getPerimeter: () => "Ошибка! Треугольник не существует",
		};
	}
}
