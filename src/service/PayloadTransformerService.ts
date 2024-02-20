import TransactionInput from "../Models/TransactionInput";
import InitializeRequestModel from "../Models/requests/InitializeRequestModel";

export class PayloadTransformerService{


    transformToInitialPayload(transactionInput:TransactionInput):InitializeRequestModel{
        return {
            tx_ref: transactionInput.tx_ref,
            amount: ""+transactionInput.amount,
            currency: transactionInput.currency,
            redirect_url: transactionInput.redirect_url,
            customer: transactionInput.customer,
            customizations: transactionInput.customizations,
            meta: null,
            subaccounts: null,
            payment_options: '',
            bank_transfer_options: null,
            payment_plan: null
        }
    }
}
export default new PayloadTransformerService();