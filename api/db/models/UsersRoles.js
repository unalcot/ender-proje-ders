const mongoose=require("mongoose");


const schema = mongoose.Schema({
    role_id:{
        type: mongoose.SchemaTypes.ObjectId,
        required:true
    },
    user_id:{
        type: mongoose.SchemaTypes.ObjectId,
        required:true
    },
    },{
        timestamps: {
            createdAt:"created_At",
            updatedAt:"updated_At"
        }
    });
        class UsersRoles extends mongoose.Model{
            
        }
        schema.loadClass(UsersRoles);
        module.exports=mongoose.model("users_roles",schema);