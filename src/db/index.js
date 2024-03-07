import { MongoClient} from 'mongodb';
import { DB_NAME } from "../constants.js";

let db;
const connectDB = async ()=> {
    try {
        const client = await MongoClient.connect(`${process.env.MONGODB_URI}`);
        db = client.db(`${DB_NAME}`);
        console.log('Connected to MongoDB');
    } catch (error) {
        console.error('Error connecting to MongoDB:', error);
        process.exit(1);
    }
}

export { connectDB, db }; 
