export interface HttpResponseInterface {
    headers: {};
    statusCode: number;
    data: {};
    error?: string;
}

export default function sendHttpResponse (statusCode: number, body: []): HttpResponseInterface {
    return {
      headers: {
        'Content-Type': 'application/json'
      },
      statusCode,
      data: body
    };
}
