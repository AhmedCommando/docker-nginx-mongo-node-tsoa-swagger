
import * as mongodb from 'mongodb';

const MongoClient = mongodb.MongoClient;

/**
 * url is
 * mongodb://dockerImageName:PORT
 * the port better be served like the database name with process.env.DB_PORT
 */
const client = new MongoClient('mongodb://mongo:27017', {useNewUrlParser: true});

/**
 * connect to database if no connection is already established
 */
export async function connectDb(): Promise<mongodb.Db> {
    if (!client.isConnected()) {
        await client.connect();
    }

    return await client.db(process.env.DB_NAME);
}

export default connectDb;
