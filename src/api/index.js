const app = require('express')()
const cors = require("cors")
app.use(cors());

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json());
let collection=null;
const PORT = 5000;

const MongoClient = require('mongodb').MongoClient;

const url = "mongodb+srv://shipping_user3:amansahan@cluster0.tv7cz.mongodb.net/shipping-box-3?retryWrites=true&w=majority";

const client = new MongoClient(url, { useNewUrlParser: true,useUnifiedTopology: true });

client.connect(err => {
    if (err) {
        console.log("Error while connecting to Mongo");
        console.log(err);
    }
    console.log("connected to MongoDB");
  collection = client.db("shipping-box-3").collection("orders");
  // perform actions on the collection object
});

app.post('/create-order',async(req,res) =>{
    const data ={
        name: req.body.name,
        weight: req.body.weight,
        color: req.body.color,
        country: req.body.country,
        cost: req.body.cost,
    };

    try {
        await collection.insertOne(data)
        console.log("Inserted 1 document");
        res.status(200).send("ok");
    } catch (err) {
        console.log(err);
        res.send(err).status(500)
    }

})

app.get("/get-orders", async (req, res) => {
    try {
        const data = [];
        const cursor = await collection.find()

        await cursor.forEach(doc => {
            console.log(doc);
            data.push(doc)
        })
        res.send(data).status(200)
    } catch (err) {
        console.log(err);
        res.send(err).status(500)
    }
})

client.close();

app.listen(5000, () => {
    console.log("server is running on localhost:5000");
})