import { Readable } from 'stream'
import { setTimeout as sleep } from 'timers/promises'


async function* generate() {
    yield 'hey'
    await sleep(100)
    yield '. How are you?'
    await sleep(400)
    yield('Is everything okay?')
}

// console.log('g',(await generate().next()).value)
async function consume(iterator) {
    let strings = 'X'
    for await(let chunk of iterator) {
        console.log('chunk', chunk)
        strings += chunk
    }
    return strings;
}

// console.log(await consume(generate()))


class MyStream extends Readable {
    #count = 1;
    get count() { return this.#count;}
    
    _read(size) {
        // console.log('reading', size)
        setTimeout(()=>{
            this.push(this.#count + ' heyyy ...')
            this.#count++
          //  console.log('continuing', this.#count)
            if(this.#count > 10) this.push(null)
        }, 1000)
        
    }
}

const st = new MyStream()

for await(let c of st) {
    console.log(String(c))
}