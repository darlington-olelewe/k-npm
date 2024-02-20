import {CustomerInfo, Customization} from "../TransactionInput";


export type InitializeRequestModel = {
    tx_ref:string,
    amount:string,
    currency: 'NGN',
    redirect_url: string,
    customer: CustomerInfo,
    customizations: Customization,
    "meta": null,
    "subaccounts": null,
    "payment_options": "",
    "bank_transfer_options": null,
    "payment_plan": null
}

export default InitializeRequestModel;