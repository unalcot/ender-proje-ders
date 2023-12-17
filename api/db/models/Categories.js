const mongoose=require("mongoose");


const schema = mongoose.Schema({
    is_active:{type:Boolean, default:true},
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
        class Categories extends mongoose.Model{

        }
        schema.loadClass(Categories);
        module.exports=mongoose.model("categories",schema);2