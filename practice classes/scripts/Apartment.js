class Apartment {
  constructor(number, roomsAmount, residents = []) {
    this.number = number;
    this.roomsAmount = roomsAmount;
    this.residents = new Set();

    residents.forEach(resident => this.addResident(resident));
  }

  addResident(resident) {
    resident.setApartmentNum(this.number);
    this.residents.add(resident);
  }

  getInfo() {
    console.log(`Apartment number ${this.number} has: \nRooms: ${this.roomsAmount} | Residents: ${this.residents.size}`);
    this.residents.forEach(resident => resident.getInfo());
  }
}
