import express from 'express';
import mongodb from "mongodb";
import bodyParser from "body-parser";

const app = express();
app.use(bodyParser.json());
const dbUrl = "mongodb://localhost";


const validate = (data) => {
    let errors = {};
    if (data.title === "") {
        errors.title = "Movie title can NOT be empty.";
    }
    if (data.cover === "") {
        errors.cover = "Cover URL can NOT be empty.";
    }
    let isValid = Object.keys(errors).length === 0;

    return {errors, isValid};
}

mongodb.MongoClient.connect (dbUrl, (err, client) => {
    if (err) throw err;
    const db = client.db("db");

    app.get("/api/movies", (req, res) => {
        db.collection("movies").find({}).toArray((err, movies) => {
            res.json({movies});
        })
    });

    app.get("/api/movies/:id", (req, res) => {
        db.collection("movies").findOne(
            {_id: new mongodb.ObjectId(req.params.id)}, (err, movie) => {
                res.json(movie);
            }
        );
    });

    app.post("/api/movies", (req, res) => {
        const {errors, isValid} = validate(req.body);
        if(isValid) {
            const {title, cover} = req.body;
            db.collection("movies").insert({title, cover}, (err, result)=>{
                if(err) {
                    res.status(500).json({global: "Server Error"});
                } else {
                    res.json({movie: result.ops[0]});
                }
            });
        } else {
            res.status(400).json({errors});
        }
    });

    app.use((req, res) => {
        res.status(404).json({
            errors: {
                global: "Resource Not Found. Please try again later."
            }
        })
    }); 

    app.listen(8080, ()=>console.log("server is running at port 8080."));
});

