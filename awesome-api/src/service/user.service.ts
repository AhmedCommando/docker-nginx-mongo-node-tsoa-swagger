import connectDb from '../db';

import registerUser from '../data-access/user/registerUser';

/**
 * user service
 * will contain all service related to the user
 * register, login, getone, get many
 * 
 * the db is injected here for dependency of concern
 */
const userService = Object.freeze({
    registerUser: registerUser(connectDb)
});

export default userService;
