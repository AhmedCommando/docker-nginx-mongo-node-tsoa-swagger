import * as jwt from 'jsonwebtoken';

/**
 * create authentication token iwth jwt
 * @param userId 
 */
export function createToken(userId: string): string {
    console.error('userId', userId);
    return jwt.sign({user: userId}, process.env.JWT_KEY, {expiresIn: 60 * 60});
}

/**
 * verify token if still valid else throw error
 * @param token user auth token
 */
export function verifyToken(token: string): any {
    try {
        return jwt.verify(token, process.env.JWT_KEY);
    } catch (error) {
        return new Error('User cannot be verified');
    }
}
