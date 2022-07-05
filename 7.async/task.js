class AlarmClock {
	constructor() {
		this.alarmCollection = [];
		this.timerId = null;
	}

	addClock(timeHHMM, func, id) {
		if (id === undefined) {
			throw new Error(
				"Невозможно идентифицировать будильник. Параметр id не передан"
			);
		}

		let isAlarmWithTheSameId = this.alarmCollection.some(
			(element) => element.id === id
		);
		if (isAlarmWithTheSameId === true) {
			console.error("Будильник с таким id уже существует");
		} else {
			this.alarmCollection.push({ id: id, timeHHMM: timeHHMM, callback: func });
		}
	}

	removeClock(id) {
		let oldLengthOfAlarmCollection = this.alarmCollection.length;
		this.alarmCollection = this.alarmCollection.filter(
			(element) => element.id !== id
		);
		let newLengthOfAlarmCollection = this.alarmCollection.length;
		return oldLengthOfAlarmCollection !== newLengthOfAlarmCollection;
	}

	getCurrentFormattedTime() {
		return new Date().toTimeString().slice(0, 5);
	}

	start() {
		let checkClock = (element) => {
			if (element.timeHHMM === this.getCurrentFormattedTime()) {
				element.callback();
			}
		};
		let enumerationOfAllAlarmsWithCheckClock = () =>
			this.alarmCollection.forEach(checkClock);
		if (this.timerId === null) {
			this.timerId = setInterval(enumerationOfAllAlarmsWithCheckClock, 10000);
		}
	}

	stop() {
		if (this.timerId !== null) {
			clearInterval(this.timerId);
			this.timerId = null;
		}
	}

	printAlarms() {
		console.log(
			`Печать всех будильников в количестве: ${this.alarmCollection.length}`
		);
		this.alarmCollection.forEach((element) =>
			console.log(`Будильник №${element.id} заведен на ${element.time}`)
		);
	}

	clearAlarms() {
		this.stop();
		this.alarmCollection = [];
	}
}