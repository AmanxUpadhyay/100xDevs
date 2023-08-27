const express = require("express");
const app = express();
const port = 3000;

/* My First Express Server which will return the current date and time */
function getDateAndTime() {
    const date = new Date();
    const day = date.getDay();
    const hour = date.getHours();
    const minute = date.getMinutes();

    const days = [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
    ];
    const dayName = days[day];

    const time = `${dayName} and Time is: ${hour}:${minute}`;
    return time;
}

/* This function will handle the request */
function handleFirstRequest(_req, res) {
    const time = getDateAndTime();
    res.send(`Hey Stranger! Today is ${time}`);
}

/* This code is defining the route and the function that will handle the request */
app.get("/", handleFirstRequest);

/* This function is called when the server is started */
function startedServer() {
    console.log(`Example app listening at http://localhost:${port}`);
}

/* This code is starting the http server */
app.listen(port, startedServer);
