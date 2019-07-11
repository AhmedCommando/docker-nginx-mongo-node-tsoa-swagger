
import * as mongodb from 'mongodb';

const MongoClient = mongodb.MongoClient;

const client = new MongoClient('mongodb://mongo:27017', {useNewUrlParser: true});

export async function connectDb(): Promise<mongodb.Db> {
    if (!client.isConnected()) {
        await client.connect();
    }

    return await client.db(process.env.DB_NAME);
}

export default connectDb;
