// Створити ladder (сходи) – об'єкт, який дозволяє підніматися вгору та спускатися:
// Змініть код методів up, down і showStep таким Таким чином, щоб їх виклик можна було зробити по ланцюжку, наприклад:


let ladder = {
    step: 0,

    up: function () {
        this.step++;
        return this;
    },
    down: function () {
        this.step--;
        return this;
    },
    showStep: function () {
        console.log(`Current step is: ${this.step}`);
        return this;
    }
};

ladder.up().up().down().showStep();