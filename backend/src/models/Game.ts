// import { Game } from './Game';
import { Schema, model } from 'mongoose';

export interface Game {
    address: string;
    numberOfpeople: number;
    date:Date;
    time:string;
    fildNumber: number;
}
const GameSchema = new Schema<Game>({
    address: {type: String,required: true },
    numberOfpeople: {type: Number,required: true },
    date: {type: Date ,required: true },
    fildNumber: {type: Number,required: true },
});
export default model<Game>('Game',GameSchema)