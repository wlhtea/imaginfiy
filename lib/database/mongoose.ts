import mongoose,{Mongoose} from 'mongoose';

const MOONGODB_URL = process.env.MONGODB_URL;
interface MongooseConnection{
    conn: Mongoose| null;
    promise: Promise<Mongoose> | null;

}

let cached : MongooseConnection = (global as any).mongoose|| {};

if(!cached){
    cached = (global as any).mongoose = {
        conn: null,
        promise: null
    }
}

export const connectToDatabase = async () => {
    if(cached.conn){
        return cached.conn;
    }
    
    if(!MOONGODB_URL) throw new Error('You must provide a MongoDB URI');
    cached.promise = cached.promise || mongoose.connect(MOONGODB_URL,{dbName : 'WlhTeaDatebase',bufferCommands:false});

    cached.conn = await cached.promise;
    return cached.conn;
}