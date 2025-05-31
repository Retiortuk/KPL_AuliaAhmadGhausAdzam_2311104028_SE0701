import { Subject } from "./Subject.js";
import { Observer } from "./Observer.js";

const subject = new Subject();

const observer1 = new Observer("Observer 1");
const observer2 = new Observer("Observer 2");

subject.attach(observer1);
subject.attach(observer2);

// Simulasi perubahan state
subject.setState("Data 1");
// Output: Observer 1 menerima update: Data 1
//         Observer 2 menerima update: Data 1

subject.setState("Data 2");
// Output: Observer 1 menerima update: Data 2
//         Observer 2 menerima update: Data 2
