export class Observer {
    constructor(name) {
        this.name = name;
    }

    update(subject) {
        console.log(`${this.name} menerima update: ${subject.getState()}`);
    }
}
