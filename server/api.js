var mongoClient =  require("mongodb").MongoClient;
var express = require("express");
var cors = require("cors");
const { MongoDBCollectionNamespace } = require("mongodb");

var ConnectionString = "mongodb://localhost:27017";

var app = express();
app.use(express.urlencoded({
    extended:true
}));

app.use(cors(("*")));

app.use(express.json());
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', 'http://localhost:3000');
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    next();
  });

app.get("/products",(req,res)=>{
    mongoClient.connect(ConnectionString).then(clientObject=>{
        var database = clientObject.db("shopper");
        database.collection("products").find({}).toArray().then(documents=>{
            res.send(documents);
           
            res.end();
        })
    })
});

app.get("/details/:id",(req,res)=>{
    var id = parseInt(req.params.id);
    mongoClient.connect(ConnectionString).then(clientObject=>{
        var database = clientObject.db("shopper");
        database.collection("products").find({ProductId:id}).toArray().then(documents=>{
            res.send(documents);
            res.end();
        })
    })
});

app.post("/addproducts",(req,res)=>{
    mongoClient.connect(ConnectionString).then(clientObject=>{
        var database = clientObject.db("shopper");
        var product = {
            "ProductId":req.body.ProductId,
            "Name":req.body.Name,
            "Price":parseFloat(req.body.Price),
            "Stock":(req.body.Stock=="true")?true:false
        };
        database.collection("products").insertOne(product).then(result=>{
            console.log("Record Inserted");
            res.redirect("/products");
            res.end();
        })
    })
})

app.put("/updateproduct",(req,res)=>{
    mongoClient.connect(ConnectionString).then(clientObject=>{
        var database = clientObject.db("shopper");
        var findQuery ={ProductId:parseInt(req.body.ProductId)}
        var updateQuery = {$set : {Name:(req.body.Name),Price:(req.body.Price),Stock:(req.body.Stock=="true")?true:false}}

        database.collection("products").updateOne(findQuery,updateQuery).then(result=>{
            console.log("Record Updated");
            console.log(result);
            res.send("/products");
            res.end();
        })
    })
})

app.delete("/deleteproduct/:id",(req,res)=>{
    var id = parseInt(req.params.id);
    mongoClient.connect(ConnectionString).then(clientObject=>{
        var database = clientObject.db("shopper");
        database.collection("products").deleteOne({ProductId:id}).then(result=>{
            console.log("Record Deleted");
            res.send("/products");
            res.end();
        })
    })
})

app.listen(1010);
console.log(`Server Sarted : http://127.0.0.1:1010`);