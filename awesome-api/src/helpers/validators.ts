
/**
 * validator checks if string contains a number
 * @param text 
 */
export function hasNumber(text: string): boolean {
    // tslint:disable-next-line: no-multi-spaces
    return  /\d/.test(text);
}

/**
 * validator checks if string is in an email format
 * @param email 
 */
export function isValidEmail(email: string): boolean {
    const valid = new RegExp(/^[^@\s]+@[^@\s]+\.[^@\s]+$/);
    return valid.test(email);
}
