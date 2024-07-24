//built SSE from scratch https://www.youtube.com/watch?v=4HlNv1qpZFY&t=450s
const app = require("express")();

app.get("/", (req,res) => res.send("hello!"));

//to unlock SSE at the backend, we need a special request
//this is the most important step
app.get("/stream", (req, res) => {
    res.setHeader("Content-Type", "text/event-stream");
    //these are the events
    res.write("data: " + "hello!!!\n\n "); 
})
app.listen(8000)
console.log("listening on Port 8000")