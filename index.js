
// mongo db store data as a binary representation of JSON. 
// what is that called? 
    // BSON? "binary JSON"

// There is a hierachy in mongodb. where do each of the following fall in line?  collection, database, document, 
    // Database => database => document

//mongo db's atlas provided us with a connection string: 'mongodb+srv://davidyim85:<password>@tumeric.bb9imke.mongodb.net?retryWrites=true&w=majority'
// I want to update my connection string. my password is 'qwerty123' and i want a database called 'app_fruits', 
// how can i update my connection string to make the above possible?
        // 'mongodb+srv://davidyim85:qwerty123@tumeric.bb9imke.mongodb.net/app_fruits?retryWrites=true&w=majority'

// what is the popular npm package that provides an Object-Document Maping (ODM) layer for MongoDB?
// It simplifies the INTERACTION with MongoDB.
    // Mongoose?

// what are the HTTP verbs? 
    //  GET, POST, DELETE, PATCH, PUT

// Want to render an EJS page, which HTTP verb have been using in class?
    // GET
// as you advance outside of this course keep in mind that serving up EJS is limited to this one HTTP verb. 
// It is just the way we've been teaching it in GA as an introduction to express and ejs


// Want to manipulate data which other three HTTP verbs were used in class?
    // DELTE, POST, PUT


// Want to retrieve data which HTTP verb was used? 
    // GET


// Can you explain what this is doing? 
router.get("/", async (req, res) => {
    const fruits = await Fruits.find({});
    res.render("fruits/index.ejs", { fruits })
})

    // this function is searching for a specific fruits using the fruits object (which holds an array) and displaying that fruit's index html page on the screen.


// Can you explain what this is doing? 
router.post("/", async (req, res) => {
    req.body.readyToEat = req.body.readyToEat === "on" ? true : false
    await Fruits.create(req.body)
    res.redirect("/fruit")
})

    // this function is creating a form to create a new fruit and then redirecting back to the main fruit page once it's submitted 