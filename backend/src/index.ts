import mongoose from "mongoose";
import {app} from './app';

const port:string|undefined = process.env.PORT;
const startServer = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URL !);
        console.log("connected to db");
        app.listen(port,() => console.log("server running on port",port)
        )
    } catch (error) {
        console.log("faild to connect db");
        console.log(error);

    }
}
startServer();