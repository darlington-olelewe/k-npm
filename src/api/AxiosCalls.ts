import axios from "axios";
import EndPoints from "./ApiAxiosEndpoints";
// import {CardPaymentModel, OtpModel} from "../Model/Models";
import {kangaruHeader as header} from "./headers";
import InitializeResponseModel from "../Models/response/InitializeResponseModel";
import ApiResponse from "../Models/ApiResponse";
import InitializeRequestModel from "../Models/requests/InitializeRequestModel";


class AxiosCalls {

    async initialize(key: string, initializeRequestModel: InitializeRequestModel){
        const customHeader = header(key);
        return await axios.post(EndPoints.initialize,initializeRequestModel,{headers:customHeader})
    }
    // async fetchDetailsOfTransaction(transactionId : string){
    //     return await axios.get(EndPoints.details+transactionId);
    // }
    //
    // async chargeCard(_cardPaymentModel:CardPaymentModel, auth:string){
    //     const customHeader = header(auth);
    //     return await axios.post(EndPoints.chargeCard,_cardPaymentModel,{headers:customHeader})
    // }
    //
    // async initializeTransaction(payload:any, auth:string){
    //     const customHeader = header(auth);
    //     return await axios.post(EndPoints.intialize,payload,{headers:customHeader})
    // }
    //
    // async chargeCardOTP(otpModel:OtpModel){
    //     const customHeader = header(otpModel.PBFPubKey);
    //     return await axios.post(EndPoints.otpValidation,otpModel,{headers:customHeader})
    // }
    //
    // async validateCharge(key:string, transId:string){
    //     const customHeader = header(key);
    //     return await axios.get(EndPoints.verifyTransaction+transId,{headers:customHeader})
    // }

}

export default new AxiosCalls();
