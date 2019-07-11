
export function hasNumber(text: string): boolean {
    // tslint:disable-next-line: no-multi-spaces
    return  /\d/.test(text);
}

export function isValidEmail(email: string): boolean {
    const valid = new RegExp(/^[^@\s]+@[^@\s]+\.[^@\s]+$/);
    return valid.test(email);
}
