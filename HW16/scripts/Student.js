function Student(firstName, lastName, birthYear, marks) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.birthYear = birthYear;
    this.marks = marks;
    this.attendaceArr = new Array(25).fill(null);

    this.present = function() {
        let index = this.attendaceArr.indexOf(null);
        if (index !== -1) {
            this.attendaceArr[index] = true;
        }
    }

    this.absent = function() {
        let index = this.attendaceArr.indexOf(null);
        if (index !== -1) {
            this.attendaceArr[index] = false;
        }
    }

    this.getStudentAge = function() {
        let studentAge = new Date().getFullYear() - this.birthYear;
        console.log(`${this.firstName} is ${studentAge} years old`);
        return studentAge;
    }

    this.getAvarageMark = function() {
        if (this.marks.length === 0) return 0;
        return this.marks.reduce((acc, mark) => acc + mark, 0) / this.marks.length;
    }

    this.getAttendanceRate = function() {
        let validPresence = this.attendaceArr.filter(presence => presence !== null);
        if (validPresence.length === 0) return 0;
        return validPresence.filter(presence => presence === true).length / validPresence.length;
    }

    this.summary = function() {
        let avarageMark = this.getAvarageMark();
        let attendanceRate = this.getAttendanceRate();
        
        if (avarageMark > 90 && attendanceRate > 0.9) {
            console.log('Great!');
        } else if(avarageMark > 90 || attendanceRate > 0.9) {
            console.log('Good, but could be better.');
        } else {
            console.log('Too bad.');
        }
    }
}

