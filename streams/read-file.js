import { createReadStream } from 'fs'


const rStream = createReadStream(import.meta.filename, { encoding: 'utf8'})

for await(let c of rStream) {
    console.log('>>', c)
}