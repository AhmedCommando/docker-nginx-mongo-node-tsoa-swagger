import connectDb from '../db';

import registerUser from '../data-access/user/registerUser';

/* import { User } from '../model/user/user';

export default async function userService(db: any): Promise<any> {
    const userDb: mongodb.Db = await db();
    return Object.freeze({
        register
    });

    async function register(user: User): Promise<any> {
        const result = await userDb
            .collection('users')
            .insertOne(user);
        return result;
    }
}
*/
const userService = Object.freeze({
    registerUser: registerUser(connectDb)
});

export default userService;
