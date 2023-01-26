const fs = require("fs/promises");
const express = require("express");
const app = express();


app.get("/", (request, response) => {
    
    //-- promise-based
    async function sendHome() {
        try {
            const home = await fs.readFile("./index.html", { encoding: "utf8" });
            response.send(home);
        } catch (err) {
            console.log(err);
        }
    }
    sendHome();

});

// get movie controller
const movieController = require("./Controller/movie");


// listen to incoming 
app.listen(process.env.PORT || 3000, () => console.log("App available on http://localhost:3000"))