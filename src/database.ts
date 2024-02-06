import mongoose from "mongoose";

mongoose.set("strictQuery", false);
mongoose.connect('mongodb://127.0.0.1/test', {
    
})
.then( _db=> console.log('Database is connected'))
.catch( err => console.log(err)); 