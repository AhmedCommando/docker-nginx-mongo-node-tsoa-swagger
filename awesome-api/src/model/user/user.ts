import { hasNumber, isValidEmail } from '../../helpers/validators';
import upperFirst from '../../helpers/upperFirst';

export default function makeUser(user: UserInterface, crypto: any): Readonly<UserInterface> {
    const validUser: UserInterface = validate(user);
    return Object.freeze(normalize(validUser));

    function validate(model: UserInterface): UserInterface {
        const {firstName, lastName, email, userName, password} = model;
        validateName('first', firstName);
        validateName('last', lastName);
        validateEmail(email);
        validatePassword(password);
        return {firstName, lastName, email, userName, password};
    }

    /**
     * validate first and last name
     * @param label 
     * @param name 
     */
    function validateName(label: 'first' | 'last', name: string): void {
        if (name.length < 3 || hasNumber(name)) {
            throw new TypeError(
                `A user's ${label} name must be a string and have at least 3 characters long.`
            );
        }
    }

    /**
     * validate email
     * @param email 
     */
    function validateEmail (email: string): void {
        if (!isValidEmail(email)) {
            throw new TypeError('Invalid user email address.');
        }
    }

    /**
     * validate password
     * @param password 
     */
    function validatePassword(password: string): void {
        if (!password || password.length < 6) {
            throw new Error('Invalid password. should have at least 6 characters');
        }
    }

    /**
     * normalize user
     * @param user 
     */
    function normalize (user: UserInterface): UserInterface {
        return {
            firstName: upperFirst(user.firstName),
            lastName: upperFirst(user.lastName),
            email: user.email.toLowerCase(),
            userName: user.userName,
            password: cryptPassword(user.password)
        };
    }

    /**
     * crypt password with nodejs crypto library
     * @todo change this and move it from here, maybe use bcrypt
     * @param password 
     */
    function cryptPassword(password: string): string {
        const salt = crypto.randomBytes(16).toString('hex');
        return crypto.pbkdf2Sync(password, salt, 10000, 512, 'sha512').toString('hex');
    }
}

/**
 * user interface
 */
export interface UserInterface {
    firstName: string;
    lastName: string;
    email: string;
    userName: string;
    password: string;
}
