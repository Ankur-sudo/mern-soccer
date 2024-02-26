import express,{ Application, Request ,Response } from 'express'
import cors from 'cors';
import "dotenv/config";


const app:Application = express();
app.use(express.json());

//here we will import routes
import gameRoute from './routes/gameRoute';



// here we will declare the routes path
app.get("/",(req: Request, res: Response) => {
    res.send({message:"it woeks"})
})
app.use("/api/games",gameRoute);
export{app}