// Задача №1. Печатное издание

class PrintEditionItem {
	constructor(name, releaseDate, pagesCount) {
		this.name = name;
		this.releaseDate = releaseDate;
		this.pagesCount = pagesCount;
		this.state = 100;
		this.type = null;
	}

	fix() {
		this.state = this._state * 1.5;
	}

	set state(newState) {
		if (newState < 0) {
			this._state = 0;
			return;
		}
		if (newState > 100) {
			this._state = 100;
			return;
		}
		this._state = newState;
	}

	get state() {
		return this._state;
	}
}

class Magazine extends PrintEditionItem {
	constructor(name, releaseDate, pagesCount) {
		super(name, releaseDate, pagesCount);
		this.type = "magazine";
	}
}

class Book extends PrintEditionItem {
	constructor(author, name, releaseDate, pagesCount) {
		super(name, releaseDate, pagesCount);
		this.author = author;
		this.type = "book";
	}
}

class NovelBook extends Book {
	constructor(author, name, releaseDate, pagesCount) {
		super(author, name, releaseDate, pagesCount);
		this.type = "novel";
	}
}

class FantasticBook extends Book {
	constructor(author, name, releaseDate, pagesCount) {
		super(author, name, releaseDate, pagesCount);
		this.type = "fantastic";
	}
}

class DetectiveBook extends Book {
	constructor(author, name, releaseDate, pagesCount) {
		super(author, name, releaseDate, pagesCount);
		this.type = "detective";
	}
}

/*
const picknick = new FantasticBook(
	 "Аркадий и Борис Стругацкие",
	 "Пикник на обочине",
	 1972,
	 168
);
 
console.log(picknick.author); //"Аркадий и Борис Стругацкие"
	 picknick.state = 10;
console.log(picknick.state); //10
	 picknick.fix();
console.log(picknick.state); //15
*/

// Задача №2. Библиотека

class Library {
	constructor(name) {
		this.name = name;
		this.books = [];
	}

	addBook(book) {
		let bookState = book.state;
		if (bookState > 30) {
			this.books.push(book);
		}
	}

	findBookBy(type, value) {
		let findedBook = this.books.find((element) => element[type] === value);
		if (findedBook === undefined) {
			return null;
		} else {
			return findedBook;
		}
	}

	giveBookByName(bookName) {
		let givenBook = this.findBookBy("name", bookName);
		if (givenBook === undefined) {
			return null;
		} else {
			this.books = this.books.filter((element) => element.name !== bookName);
			return givenBook;
		}
	}
}

/*
const library = new Library("Библиотека имени Ленина");
 
library.addBook(
  new DetectiveBook(
	 "Артур Конан Дойл",
	 "Полное собрание повестей и рассказов о Шерлоке Холмсе в одном томе",
	 2019,
	 1008
  )
);
library.addBook(
  new FantasticBook(
	 "Аркадий и Борис Стругацкие",
	 "Пикник на обочине",
	 1972,
	 168
  )
);
library.addBook(new NovelBook("Герберт Уэллс", "Машина времени", 1895, 138));
library.addBook(new Magazine("Мурзилка", 1924, 60));
 
console.log(library.findBookBy("name", "Властелин колец")); //null
console.log(library.findBookBy("releaseDate", 1924).name); //"Мурзилка"
 
console.log("Количество книг до выдачи: " + library.books.length); //Количество книг до выдачи: 4
library.giveBookByName("Машина времени");
console.log("Количество книг после выдачи: " + library.books.length); //Количество книг после выдачи: 3
*/

// Задача №3. Журнал успеваемости

class Student {
	constructor(name) {
		this.name = name;
	}

	addMark(mark, subjectName) {
		if (mark < 1) {
			return "Оценка должна быть от 1 до 5";
		} else if (mark > 5) {
			return "Оценка должна быть от 1 до 5";
		} else {
			if (this.marks === undefined) {
				this.marks = [mark, subjectName];
			} else {
				this.marks.push(mark, subjectName);
			}
		}
	}

	getAverageBySubject(subjectName) {
		let sum = 0;
		let result = 0;
		for (let i = 1; i < this.marks.length; i = i + 2) {
			if (subjectName == this.marks[i]) {
				sum = sum + this.marks[i - 1];
				result++;
			} else {
				result = result;
			}
		}
		if (sum == 0) {
			return "Несуществующий предмет";
		} else {
			return sum / result;
		}
	}

	getAverage() {
		let sum = 0;
		for (let i = 1; i < this.marks.length; i = i + 2) {
			sum = sum + this.marks[i - 1];
		}
		return sum / (this.marks.length / 2);
	}

	exclude(reason) {
		this.excluded = reason;
		delete this.subject;
		delete this.marks;
	}
}

/*
const student = new Student("Олег Никифоров", "male", 37);
student.addMark(5, "algebra");
student.addMark(5, "algebra");
student.addMark(5, "geometry");
student.addMark(4, "geometry");
student.addMark(6, "geometry"); // "Ошибка, оценка должна быть числом от 1 до 5"
student.getAverageBySubject("geometry"); // Средний балл по предмету geometry 4.5
student.getAverageBySubject("biology"); // Несуществующий предмет
student.getAverage(); // Средний балл по всем предметам 4.75
student.exclude("Исключен за попытку подделать оценки");
console.log(student);
*/