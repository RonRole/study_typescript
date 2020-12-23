interface Effector<T> {
    affected() : T[];
}

class DualEffector<T> implements Effector<T> {

    private item : T

    constructor(item: T) {
        this.item = item
    }

    affected() : T[] {
        return [this.item, this.item]
    }
}

const reverseString = (input : string) : string => {
    return input.split('').reverse().join('')
}

const dualSawai = new DualEffector<string>("sawai").affected()
const dualNormal = new DualEffector<number>(36).affected()

console.log(dualSawai.map(reverseString).join('-'))