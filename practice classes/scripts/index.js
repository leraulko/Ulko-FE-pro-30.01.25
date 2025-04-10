const jane = new Resident(`Jane Doe`, 24);
const john = new Resident(`John Doe`, 29);


const apt65 = new Apartment(65, 2, [jane, john]);
const apt66 = new Apartment(66, 1, [new Resident(`Maya Bishop`, 32)]);


const myBuilding = new Building(`Yaroslavska 18 str.`);
myBuilding.addApartment(apt65);
myBuilding.addApartment(apt66);

myBuilding.getInfo();