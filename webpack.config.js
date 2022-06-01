const path = require('path')
module.exports={
    entry:'./file.js',
    mode:'development',
    output:{
        filename:'bundle.js',
        path:path.resolve(__dirname,'dist'),
    },
    watch:true
}