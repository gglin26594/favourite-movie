import express from 'express';
import mongodb from "mongodb";

const app = express();
const dbUrl = "mongodb://localhost";

mongodb.MongoClient.connect (dbUrl, (err, client) => {
    if (err) throw err;
    const db = client.db("db");

    app.get("/api/movies", (req, res) => {
        db.collection("movies").find({}).toArray((err, movies) => {
            res.json({movies});
        })
    });

    app.use((req, res) => {
        res.status(404).json({
            errors: {
                global: "Resource Not Found..."
            }
        })
    });

    app.listen(8080, ()=>console.log("server is running at port 8080."));
});

