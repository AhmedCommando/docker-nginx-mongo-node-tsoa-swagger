import { HttpResponseInterface } from './httpResponseHandler';

export enum HttpStatusCodeEnum {
    OK = 200,
    CREATED = 201,
    ACCEPTED = 202,
    NO_CONTENT = 204,
    BAD_REQUEST = 400,
    UNAUTHORIZED = 401,
    FORBIDDEN = 403,
    NOT_FOUND = 404
}

export default function sendHttpError (statusCode: number, errorMessage: string): HttpResponseInterface {
    return {
      headers: {
        'Content-Type': 'application/json'
      },
      statusCode,
      data: [],
      error: errorMessage
    };
}
