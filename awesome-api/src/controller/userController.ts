import { Controller, Route, Get, Tags, Post, Body, Response } from 'tsoa';
import * as crypto from 'crypto';

import makeUser, { UserInterface } from './../model/user/user';
import serviceHandler from '../service';
import logger from '../utils/winston-logger';
import sendHttpError, { HttpStatusCodeEnum } from '../helpers/httpErrorHandler';
import { createToken } from '../helpers/token-helper';
import { HttpResponseInterface } from '../helpers/httpResponseHandler';

@Route('user')
@Tags('UserController')
export class UserController extends Controller {
  
  userService = serviceHandler.userService;

  @Get()
  hello(): {} {
    return {message: 'Hello user!'};
  }

  @Response<HttpResponseInterface>('Unexpected error')
  @Post()
  async registerUser(@Body() user: UserInterface): Promise<any> {
    try {
        const validUser = makeUser(user, crypto);
        const registerUser = await this.userService.registerUser;
        registerUser(validUser)
          .then((response: any) => {
            const responseUser = response.ops[0];
            console.error(response);
            console.error(responseUser);
            const registerResponse: RegisterLoginResponseInterface = {
              user: responseUser,
              token: createToken(responseUser._id)
            };

            this.setStatus(HttpStatusCodeEnum.CREATED);
            return <RegisterLoginResponseInterface>(registerResponse);
          })
          .catch((error: Error) => {
            console.error(error);
            this.setStatus(HttpStatusCodeEnum.BAD_REQUEST);
            return sendHttpError(HttpStatusCodeEnum.BAD_REQUEST, error.message);
          });
    } catch (error) {
      logger.error(error);
      this.setStatus(HttpStatusCodeEnum.BAD_REQUEST);
      return sendHttpError(HttpStatusCodeEnum.BAD_REQUEST, error.message);
    }
  }
}

interface RegisterLoginResponseInterface {
  user: UserInterface;
  token: string;
}
