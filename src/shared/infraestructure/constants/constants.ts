export const BAD_REQUEST_RESPONSE = 'Bad request';
export const SUCCESSFUL_RESPONSE = 'Successful operation';
export const APPLICATION_JSON = 'application/json';
export const APPLICATION_MULTIPART = 'multipart/form-data';
export const CONTENT_TYPE = 'Content-Type';
export const HEADER_AUTHORIZATION = 'Authorization';

export enum HTTP_PETITION_METHODS {
  GET = 'GET',
  POST = 'POST',
  PUT = 'PUT',
  DELETE = 'DELETE',
}

export const AUTH_JWT_SECRET = 'JWTENVSECRET'; //Should be in the environment variables
