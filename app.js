const express = require('express');
const app = express();
const port = 3000
const blogRouter = require("./routers/blog")
app.use(express.static('public'));

app.use(express.json());

app.get('/', (req, res) => {
    res.send("mia app su postman")
})

app.use("/blogs", blogRouter)

app.listen(port, () => {
    console.log(`server in ascolto sulla porta ${port}`);
})
