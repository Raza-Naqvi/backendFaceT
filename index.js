import express from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import users from "./Controller/userController";
// import event from "./src/routes/event.js";
// import admin from "./src/routes/admin.js";
// import eventProvider from "./src/routes/eventProvider.js";
// import friends from "./src/routes/friends.js";
import cors from "cors";
// import * as socketConfig from "./src/funcs/socket.config.js";
// import * as cronJ from "./src/funcs/cronJob.js";
// for require statements
// import { createRequire } from "module";
// const require = createRequire(import.meta.url);

const app = express();
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

app.use("/user", users);
// app.use("/event", event);
// app.use("/admin", admin);
// app.use("/eventProvider", eventProvider);
// app.use("/friends", friends);

mongoose
    .connect(
        "mongodb+srv://Project:12345@cluster0.mlr16.mongodb.net/faceT?retryWrites=true&w=majority",
        {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        }
    )
    .then((result) => {
        console.log(`connected with mongoose & server is up running`);
        app.listen(process.env.PORT || 8080);
    })
    .catch((err) => console.log(err));