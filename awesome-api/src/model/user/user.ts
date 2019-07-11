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
        return {firstName, lastName, email, userName, password: cryptPassword(password)};
    }

    function validateName(label: 'first' | 'last', name: string): void {
        if (name.length < 3 || hasNumber(name)) {
            throw new TypeError(
                `A user's ${label} name must be a string and have at least 3 characters long.`
            );
        }
    }

    function validateEmail (email: string): void {
        if (!isValidEmail(email)) {
            throw new TypeError('Invalid user email address.');
        }
    }

    function validatePassword(password: string): void {
        if (!password || password.length < 6) {
            throw new Error('Invalid password. should have at least 6 characters');
        }
    }

    function normalize (user: UserInterface): UserInterface {
        return {
            firstName: upperFirst(user.firstName),
            lastName: upperFirst(user.lastName),
            email: user.email.toLowerCase(),
            userName: user.userName,
            password: user.password
        };
    }

    function cryptPassword(password: string): string {
        const salt = crypto.randomBytes(16).toString('hex');
        return crypto.pbkdf2Sync(password, salt, 10000, 512, 'sha512').toString('hex');
    }
}

export interface UserInterface {
    _id?: string;
    firstName: string;
    lastName: string;
    email: string;
    userName: string;
    password: string;
}
