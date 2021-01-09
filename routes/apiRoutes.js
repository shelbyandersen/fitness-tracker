const db = require ("../models");


module.exports = function(app){
app.get("/api/workouts", (req,res)=>{
    db.Workout.find({})
    .then(workouts=>{
        res.json(workouts)
        console.log(workouts)
    })
    .catch(err=>console.log(err))
})

app.get("/api/workouts/range", (req,res)=>{
    db.Workout.find({})
    .then(workouts=>{
        res.json(workouts)
    })
})

app.post("/api/workouts", ({body},res)=>{
    db.Workout.create(body)
    .then((workout)=>{
        res.json(workout)
    })
    .catch((err)=>console.log(err))
})

app.put("/api/workouts/:id", (req,res)=>{
    db.Workout.findOneAndUpdate(
        {_id: req.params.id},
        {$push: {exercises: req.body}}
        ).then((workout)=>{
            res.json(workout);
        }).catch((err)=>{
            console.log(err);
            res.json({
                error:true,
                data: null,
                message: ""
            })
        })
})

}