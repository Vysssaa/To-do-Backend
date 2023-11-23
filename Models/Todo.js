const mongoose=require('mongoose')

const TodoSchema= new mongoose.Schema({
    task: String,
    description: String,
    done: {
        type: Boolean,
        default: false 
    }
})

const TodoModel=mongoose.model("Tasks",TodoSchema)
module.exports=TodoModel