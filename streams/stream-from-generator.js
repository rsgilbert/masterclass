import { Readable } from 'stream'
import { setTimeout } from 'timers/promises'


async function * generate() {
    yield 'one'
    await setTimeout(100)
    yield 'two'
    await setTimeout(300)
    yield 'three'
    await setTimeout(1500)
    yield 'four'
    await setTimeout(590)
    yield 'five'
}

const stream = Readable.from(generate())


stream.on('readable', () =>{ 
    let chunk;
    while((chunk = stream.read())) {
        console.log('chunk', chunk)
    }
})