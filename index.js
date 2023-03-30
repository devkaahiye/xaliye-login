import express from "express";
import colors from "colors";
import userRoutes from './routes/userRoutes.js'
import connectDB from "./config/db.js";
import dotenv from "dotenv";


dotenv.config();
connectDB();
const app = express();
const port = 3000;


app.use(express.json())
app.use('/api/users', userRoutes);



app.listen(port, () => {
  console.log(`Server is running on port ${port}`.yellow.underline);
});










//   app.get("/", async(req, res) => {
//     const users = await  User.find();

//     res.json(users);
// });



// app.post("/", async (req, res) => {
//   const user = new User({
//     name: req.body.name,
//     email: req.body.email,
//     password: req.body.password,
//   });

//   const createdUser = await user.save();
//   res.status(201).json(createdUser);
// });

// app.put('/:id', async(req, res)=>{
//     const {id} = req.params;

//     const user =await User.findByIdAndUpdate(id, req.body);
//     if (user) {
//       const updatedUser = await  User.findById(id);
//       res.json(updatedUser)
//     }
//     else{
//         res.status(404).json({message: 'User not found'})
//     } 
// })

// app.delete('/:id', async(req, res)=> {
//     const {id} = req.params;

//     const user =await User.findByIdAndDelete(id, req.body);
//     if (user) {
//       res.json({message: 'SucessFully Deleted'})
//     }
//     else{
//         res.status(404).json({message: 'User not found'})
//     } 

// })