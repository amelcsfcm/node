const gpass=require('generate-password')

var password=gpass.generate(
    {length:8,
     numbers:false,
     uppercase:false

    }
)
console.log(password)