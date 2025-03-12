class PosisiKarakterGame{
    constructor() {
        this.state = 'Berdiri';
        console.log('Posisi Default');
    }

    tombolW() {
        if (this.state === 'Berdiri') {
            this.state = 'Terbang';
            console.log('Posisi take off');

        } else if (this.state === 'Jongkok') {
            this.state = 'Berdiri';
            console.log('Posisi Berubah: Berdiri');

        } else if (this.state === 'Tengkurap') {
            this.state = 'Jongkok';
            console.log('Posisi Berubah: Jongkok')
        }
    }

    tombolS() {
        if (this.state === 'Berdiri') {
            this.state = 'Jongkok';
            console.log('Posisi Berubah: Jongkok');

        } else if (this.state === 'Jongkok') {
            this.state = 'Tengkurap';
            console.log('Posisi Berubah: Tengkurap');

        } else if (this.state === 'Terbang') {
            this.state = 'Berdiri';
            console.log('Posisi Berubah: Berdiri');
        }
    }

    tombolX() {
        if (this.state === 'Terbang') {
            this.state = 'Jongkok';
            console.log('Posisi Berubah: Landing')
        }
    }
}

module.export = { PosisiKarakterGame };