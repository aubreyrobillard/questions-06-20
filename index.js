
// mongo db store data as a binary representation of JSON. 
// what is that called? 


// There is a hierachy in mongodb. where do each of the following fall in line?  collection, database, document, 


//mongo db's atlas provided us with a connection string: 'mongodb+srv://davidyim85:<password>@tumeric.bb9imke.mongodb.net?retryWrites=true&w=majority'
// I want to update my connection string. my password is 'qwerty123' and i want a database called 'app_fruits', 
// what will my connection string be? 


// what is the popular npm package that provides an Object-Document Maping (ODM) layer for MongoDB?
// It simplifies the INTERACTION with MongoDB.


// what are the http verbs and what do they do? 


// Want to render an EJS page, which HTTP verbs have been using in class?
// keep in mind this is not limited to this http verb. It is just the way we've been teaching it in GA as an introduction to express and ejs


// Want to manipulate data which other three HTTP verbs were used?


// Want to retrieve data which HTTP verb was used? 


// Can you explain what this is doing? 
router.get("/", async (req, res) => {
    const fruits = await Fruits.find({});
    res.render("fruits/index.ejs", { fruits })
})


// Can you explain what this is doing? 
router.post("/", async (req, res) => {
    req.body.readyToEat = req.body.readyToEat === "on" ? true : false
    await Fruits.create(req.body)
    res.redirect("/fruit")
})