const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const SFH = require('cors');
const mongoose= require('mongoose');
const postsRoutes = require('./routes/posts');



// mongoose.connect('mongodb+srv://mohamed:77240080mM@cluster0-jhfe6.mongodb.net/node-angular?retryWrites=true&w=majority',
//   {   useUnifiedTopology: true,
//       useNewUrlParser: true,
//       useCreateIndex: true })
// .then(()=> {
//   console.log('Connected to DataBase!');
// })
// .catch(()=>{
//   console.log('Connection Faild !!');
// });


mongoose.connect("mongodb://localhost/hamadb" , { useNewUrlParser: true })
        .then( () => {
            console.log('Connected to the Database !');
        })
        .catch( () => {
            console.log('Connection failed !');
        })






app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false}));
app.use(SFH())







app.use(postsRoutes);
module.exports = app;
