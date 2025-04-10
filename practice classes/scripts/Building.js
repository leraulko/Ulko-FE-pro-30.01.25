class Building {
    constructor(address) {
        this.address = address;
        this.apartments = new Map();
    }

    addApartment(apartment) {
        this.apartments.set(apartment.number, apartment);
    }

    getInfo() {
        console.log(`Building address: ${this.address}`);
        this.apartments.forEach(apartment => apartment.getInfo());
    }
}