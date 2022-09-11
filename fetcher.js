const request = require('request');
const fs = require('fs');
const link = process.argv[2]
const path = process.argv[3]
// console.log(data[2], data[3])

request(`${link}`, (error, response, body) => {

  try {
    fs.writeFileSync(`${path}`, body)

    const size = fs.stat(`${path}`, (err, stats) => {
        if(err){
            
        }else{
            console.log(`Downloaded and saved ${stats.size} bytes to ${path}`)

        }
    })
} catch (error) {
    
}
})

