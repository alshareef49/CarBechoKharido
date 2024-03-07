import { MongoClient} from 'mongodb';
import { DB_NAME } from "../constants.js";

let db;
const connectDB = async ()=> {
    try {
        const client = await MongoClient.connect(`${process.env.MONGODB_URI}`);
        db = client.db(`${DB_NAME}`);
        await db.collection('users').createIndex({ user_email: 1 }, { unique: true });
        await db.collection('sold_vehicles').createIndex({ vehicle_id: 1 }, { unique: true });
        await db.collection('dealerships').createIndex({ dealership_email: 1 }, { unique: true });
        await db.collection('cars').createIndex({ car_id: 1 }, { unique: true });
        await db.collection('deals').createIndex({ deal_id: 1 }, { unique: true });
        await db.collection('admins').createIndex({ admin_id: 1 }, { unique: true });
        
        console.log('Connected to MongoDB');
    } catch (error) {
        console.error('Error connecting to MongoDB:', error);
        process.exit(1);
    }
}

export { connectDB, db }; 
