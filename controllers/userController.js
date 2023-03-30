import expressAsync from 'express-async-handler';
import User from '../models/usersModel.js';



export const login = expressAsync(async (req, res) => {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
  
    if (user && (await user.password ==password)) {
      res.json({
        _id: user._id,
        name: user.name,
        email: user.email,
      });
    } else {
      res.status(500).json({ error: e.message });
    }
  });
  

export const createUser = expressAsync(async (req, res)=>{
    try {
        const user = new User({
            name: req.body.name,
            email: req.body.email,
            password: req.body.password,
          });
        
          const createdUser = await user.save();
          res.status(201).json(createdUser);
    } catch (error) {
        res.status(404).json({error: error.message})
    }
})

export const getAllUser = expressAsync(async(req, res)=> {
    try {
        const users = await  User.find();

        res.json(users);
    } catch (error) {
        res.status(404).json({error: error.message})
    }
})


export const updateUser = expressAsync(async (req, res) =>{
    try {
        const {id} = req.params;

    const user =await User.findByIdAndUpdate(id, req.body);
    if (user) {
      const updatedUser = await  User.findById(id);
      res.json(updatedUser)
    }
    else{
        res.status(404).json({message: 'User not found'})
    } 
    } catch (error) {
        res.status(500).json({error: error.message})
    }

})


export const deletUser = expressAsync(async(req, res)=> {
    try {
        const {id} = req.params;

    const user =await User.findByIdAndDelete(id, req.body);
    if (user) {
      res.json({message: 'SucessFully Deleted'})
    }
    else{
        res.status(404).json({message: 'User not found'})
    } 
    } catch (error) {
        res.status(500).json({error: error.message})
    }
})

