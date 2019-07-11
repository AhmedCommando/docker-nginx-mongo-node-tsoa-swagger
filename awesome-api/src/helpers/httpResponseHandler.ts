/**
 * Http response interface
 */
export interface HttpResponseInterface {
    headers: {};
    statusCode: number;
    data: {};
    error?: string;
}

/**
 * http success response helper
 * @param statusCode int
 * @param body 
 */
export default function sendHttpResponse (statusCode: number, body: []): HttpResponseInterface {
    return {
      headers: {
        'Content-Type': 'application/json'
      },
      statusCode,
      data: body
    };
}
