import { Router, Request, Response, raw } from 'express';
import CONSTANTS from '../constants';
import { SignUp, SignIn } from '../interface/user';
import utils from '../utils';
import { User } from '../schema';
import { denCrypt } from '../utils/crypto';

export const signUp = async (req: Request, res: Response) => {
  try {
    const reqData: SignUp = req.body;
    const result = await User.create(reqData);
    return utils.sendResponse(
      res,
      CONSTANTS.CODE.SUCCESS,
      CONSTANTS.RESPONSE_MESSAGES.SUCCESS.SIGN_UP,
      reqData
    );
  } catch (e: any) {
    return utils.sendResponse(res, e.code, e.message);
  }
};
export const signIn = async (req: Request, res: Response) => {
  try {
    const reqData: SignIn = req.body;
    const result = await User.findOne(
      { email: reqData.email },
      { password: 1 }
    ).lean();
    if (!result || denCrypt(result.password) != reqData.password)
      return utils.sendResponse(
        res,
        CONSTANTS.CODE.NOT_FOUND,
        CONSTANTS.RESPONSE_MESSAGES.FAIL.WRONG_EMAIL_OR_PASSWORD
      );
    return utils.sendResponse(
      res,
      CONSTANTS.CODE.SUCCESS,
      CONSTANTS.RESPONSE_MESSAGES.SUCCESS.LOG_IN
    );
  } catch (e: any) {
    return utils.sendResponse(res, e.code, e.message);
  }
};
export const getUserByMetaData = async (req: Request, res: Response) => {
  try {
    const reqData = req.query;
    const result = await User.findOne(reqData);
    return utils.sendResponse(
      res,
      CONSTANTS.CODE.SUCCESS,
      CONSTANTS.RESPONSE_MESSAGES.SUCCESS.SIGN_UP,
      result
    );
  } catch (e: any) {
    return utils.sendResponse(res, e.code, e.message);
  }
};
