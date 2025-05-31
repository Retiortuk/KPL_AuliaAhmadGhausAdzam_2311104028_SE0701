export class Subject {
    constructor() {
        this.observers = [];
        this.state = null;
    }

    attach(observer) {
        this.observers.push(observer);
    }

    detach(observer) {
        this.observers = this.observers.filter(obs => obs !== observer);
    }

    notify() {
        this.observers.forEach(observer => observer.update(this));
    }

    setState(state) {
        this.state = state;
        this.notify();
    }

    getState() {
        return this.state;
    }
}
