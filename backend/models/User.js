import mongoose from 'mongoose';
const { Schema } = mongoose;
// var jwt = require('jsonwebtoken');


const UserSchema = new Schema({
    username:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true,
        unique:true
    },
    password:{
        type:String,
        required: true
    },
    date:{
        type: Date,
        default: Date.now

    },
    // tokens:[
    //     {
    //         token:{
    //             type:String,
    //             required: true
    //         }
    //     }
    // ]

  });

//   UserSchema.methods.generateAuthToken= async function(){
//       try{
//           let token = jwt.sign({_id: this._id}, process.env.JWT_SECRET);
//           this.tokens= this.tokens.concat({token: token})
//          await this.save();
//          return token;
//       }catch(err){
//           console.log(err);
//       }
//   }
  const User= mongoose.model('user',UserSchema);

export default User;