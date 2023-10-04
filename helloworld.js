const http=require('http')
const fs=require('fs')
const server=http.createServer((req,resp)=>{
    resp.end('<h1>Hello Node!!!!</h1>\n')

})
server.listen(8000,()=>{
    console.log('listening to the port 8000')
})

const data=fs.readFileSync('./welcome.txt')
console.log(data.toString())