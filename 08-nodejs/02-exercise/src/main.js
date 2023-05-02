import express from "express";
const webServer = express();
const PORT = 3001;
const HOSTNAME = "127.0.0.1";

// code down below
webServer.get("/", (request, response) => {
  response.send("This is Root Route")
});
  
webServer.get("/news", (request, response) => {
  const array = [];
  const news1 = {
    name: "news 1",
    detail: "details 1",
  }
});

webServer.get("/users", (request, response) => {});

webServer.get("/me", (request, response) => {});

webServer.get("/helth-check", (request, response) => {});

webServer.listen(PORT, HOSTNAME, () => {
  console.log(`Server is running on http://${HOSTNAME}:${PORT}`)
});
