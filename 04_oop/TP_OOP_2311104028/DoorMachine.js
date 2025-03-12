class DoorMachine {
    constructor() {
        this.state = 'TERKUNCI';
        console.log('Pintu Terkunci');
    }

    bukaPintu() {
        if (this.state === 'TERKUNCI') {
            this.state = 'TERBUKA';
            console.log('Pintu Tidak Terkunci');
        }
    }

    kunciPintu() {
        if (this.state === 'TERBUKA') {
            this.state = 'TERKUNCI';
            console.log('Pintu Terkunci');
        }
    }
}
module.exports = { DoorMachine };