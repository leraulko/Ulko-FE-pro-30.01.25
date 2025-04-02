const valeriia = new Student('Valeriia', 'Ulko', 2001, [100, 90, 95, 92, 100, 88, 97, 99, 100]);

valeriia.present();
valeriia.present();
valeriia.present();
valeriia.absent();
valeriia.present();
valeriia.present();



valeriia.getStudentAge();

console.log('Average mark:' + valeriia.getAvarageMark());

valeriia.summary();


const olhasMarks = [88, 89, 80, 85, 100];
const olha = new Student('Olha', 'Solodchuk', 1992, olhasMarks);

olha.absent();
olha.present();
olha.present();
olha.present();
olha.absent();

olha.getStudentAge();

console.log('Average mark:' + olha.getAvarageMark());

olha.summary();