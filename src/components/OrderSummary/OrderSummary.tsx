import "./OrderSummary.css"
import {useEffect, useState} from "react";
export const OrderSummary=()=>{
    // const {state} = useContext(DefaultContext)

    // const orderInfo = {
    //     merchant: state.rawTransactionInfo?.merchantName,
    //     description: state.paymentGatewayRequest?.customizations.description,
    //     amount: state.rawTransactionInfo?.amount,
    //     charge: 0.0,
    //     total: state.rawTransactionInfo?.amount
    // }
    const [orderInfo, setOrderInfo] = useState({})
    useEffect(()=>{
        setTimeout(()=>{
            setOrderInfo(prevState => {
                return {
                    merchant: 'Darlington Stores',
                    description: 'New FG approved prices',
                    amount: 2000,
                    charge: 0.0,
                    total: 2000
                }
            })
        },5000)
    },[])

    return (<div>
        <h4 className={"order_summary_order_title"}>Order Summary</h4>

        {/*{*/}
        {/*    orderInfo?.total > 0 && <ul className={"order_summary_order_ul"}>*/}
        {/*        <li><span>Merchant Name</span> <span>{orderInfo?.merchant}</span></li>*/}
        {/*        <li><span>{orderInfo?.description}</span> <span>N {orderInfo?.amount}</span></li>*/}
        {/*        <li><span>Charges</span> <span>N {orderInfo?.charge}</span></li>*/}
        {/*        <li><span className={"order_summary_bold_span"}>Total Amount</span> <span className={"order_summary_bold_span"}>N {orderInfo.total}</span></li>*/}
        {/*    </ul>*/}
        {/*}*/}
        {/*{*/}
        {/*    orderInfo != {} && <OrderSummaryLoading/>*/}
        {/*}*/}

    </div>)
}
export default OrderSummary