const mongoose = require("mongoose");

const Schema = mongoose.Schema;

    const WorkoutSchema = new Schema({
        day: {
            type: Date,
            default: Date.now()
        },

    // exercise schema
        exercises: [
            {
                type: {
                    type: String,
                },
                name: {
                    type: String
                },
                duration: {
                    type: Number
                },
                weight: {
                    type: Number
                },
                reps: {
                    type: Number
                },
                sets: {
                    type: Number
                },
                distance: {
                    type: Number
                }
            }
        ]
    },
    {
        toJSON: {
          // include any virtual properties when data is requested
          virtuals: true
        }
      }
    );
    // add duration to schema
    WorkoutSchema.virtual("totalDuration").get(function () {
      // sum of exercise duration
      return this.exercises.reduce((total, exercise) => {
        return total + exercise.duration;
      }, 0);

    })

const Workout = mongoose.model("Workout", WorkoutSchema )

module.exports = Workout;