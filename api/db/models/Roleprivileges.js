const mongoose=require("mongoose");


const schema = mongoose.Schema({
    permissions:{type:String},
    role_id:{
        type: mongoose.SchemaTypes.ObjectId,
        required:true
    },
    created_by:{
        type: mongoose.SchemaTypes.ObjectId,
        required:true}

    },{
        versionKey:false,
        timestamps: {
            createdAt:"created_At",
            updatedAt:"updated_At"
        }
    });
        class Role_privileges extends mongoose.Model{

        }
        schema.loadClass(Role_privileges);
        module.exports=mongoose.model("role_privileges",schema);