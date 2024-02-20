const baseUrl = "http://sandbox.mykangaru.com/";
const EndPoints = {
    details: `${baseUrl}collections/get-global-transaction-details?reference=`,
    initialize : `${baseUrl}financial-service/api/v1/collections/initialize-payment-fw`,
    chargeCard : `${baseUrl}collections/charge-fw`,
    otpValidation: `${baseUrl}collections/validate-charge-fw`,
    verifyTransaction: `${baseUrl}collections/verify-transaction-status?reference=`
}
export default EndPoints;
