import mongoose from "mongoose";
import dotenv from 'dotenv'
dotenv.config();


 const Connection=()=>{
     const MONGOOB_URI='mongodb+srv://virat:aman>@cluster0.pjqsa.mongodb.net/?retryWrites=true&w=majority'
     mongoose.connect(MONGOOB_URI,{
          
     });
     mongoose.connection.on('connected', () => {
          console.log('Database connected Successfully');
      })
  
      mongoose.connection.on('disconnected', () => {
          console.log('Database disconnected');
      })
  
      mongoose.connection.on('error', (error) => {
          console.log('Error while connecting with the database ',error.message);
      })
     
}
export default Connection;