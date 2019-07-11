import * as crypto from 'crypto';
// import * as mongodb from 'mongodb';

import makeUser, { UserInterface } from '../../model/user/user';

/**
 * vanilla js like factory function
 * data access layer 
 * register user
 * @param connectDb 
 */
export default async function registerUser(connectDb: () => Promise<any>) {
    const db = await connectDb();
    return async function register(user: UserInterface): Promise<UserInterface> {
        const validUser = makeUser(user, crypto);
        return await db
            .collection('users')
            .insert(validUser, {forceServerObjectId: true});
    };
}
