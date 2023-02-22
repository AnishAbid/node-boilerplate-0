import {Router, Request, Response, raw} from 'express';
import CONSTANTS from "../constants";
import {SignUp,SignIn} from '../interface/user'
import utils from'../utils'
import {User} from '../schema'

export const signUp = async (req: Request,res: Response)=>{
    try {
        let reqData:SignUp = req.body
        let result = await User.create(reqData)
        return utils.sendResponse(res,CONSTANTS.CODE.SUCCESS,CONSTANTS.RESPONSE_MESSAGES.SUCCESS.SIGN_UP,reqData)
    }catch (e:any) {
        return utils.sendResponse(res,e.code,e.message)
    }
}
export const signIn = (req: Request,res: Response)=>{
    try {
        let reqData:SignIn = req.body
        return utils.sendResponse(res,CONSTANTS.CODE.SUCCESS,CONSTANTS.RESPONSE_MESSAGES.SUCCESS.SIGN_UP,reqData)
    }catch (e:any) {
        return utils.sendResponse(res,e.code,e.message)
    }
}
export const getUserByMetaData = async (req: Request,res: Response)=>{
    try {
        let reqData = req.query
        let result = await User.findOne(reqData)
        return utils.sendResponse(res,CONSTANTS.CODE.SUCCESS,CONSTANTS.RESPONSE_MESSAGES.SUCCESS.SIGN_UP,result)
    }catch (e:any) {
        return utils.sendResponse(res,e.code,e.message)
    }
}