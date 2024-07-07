const { Readable } = require('stream')

class MyStream extends Readable {
    #count = 1;
    get count() { return this.#count;}
    
    _read(size) {
        // console.log('reading', size)
        setImmediate(()=>{
            this.push(this.#count + ' heyyy ...')
            this.#count++
          //  console.log('continuing', this.#count)
            if(this.#count > 10) this.push(null)
        })
        
    }
}

const st = new MyStream({highWaterMark: 5})

st.on('readable', ()=>{
    setTimeout(()=>{
        console.count('readable event')
        let chunk 
        while((chunk = st.read()) != null) {
            console.log(chunk.toString())
        }
    }, 1000)
    // console.count('readable event')
    // let chunk 
    // while((chunk = st.read()) != null) {
    //     console.log(chunk.toString())
    // }
})
// st.on('data', chunk => {
//     console.log(chunk.toString())
//     console.log('count is',st.count)
    
//     st.pause()
//     setTimeout(()=>st.resume(), 1000)
// })