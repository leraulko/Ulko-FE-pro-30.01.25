class Resident {
    constructor(fullname, age) {
        this.fullname = fullname;
        this.age = age;
        this.apartmentNum = null;
    }

    setApartmentNum(number) {
        this.apartmentNum = number;
    }

    getInfo() {
        console.log(`${this.fullname} lives in apartment ${this.apartmentNum}`);
    }
}