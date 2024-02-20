import MainLayout from "../MainLayout/MainLayout";
import React, {useEffect, useState} from "react";
import "./KangarUPage.css"
import {Icons} from "../../assets";
import {ToastModel} from "../../Models/ToastModel";
import TransactionInput from "../../Models/TransactionInput";
import PaymentMethodProvider from "../../context/PaymentMethodContext";
import AxiosCalls from "../../api/AxiosCalls";
import PayloadTransformerService from "../../service/PayloadTransformerService";
const MainCheckoutPage = React.lazy(()=>import("../MainCheckOutPage/MainCheckOutPage"))
const CheckOutPage = React.lazy(()=> import("../CheckOutPage/CheckOutPage"));
export const KangarUPage =(props:{transactionInput:TransactionInput})=>{
    const {cancel} = Icons;
    const [toggle, setToggle] = useState(true);
    const flipToggle=()=>{
        setToggle(!toggle)
    }
    // {text: "here is a sample toast let us see how it goes from here", color:'toast_green'}
    const notice:ToastModel = null
    const [initialized, setInitialized] = useState(false);
    useEffect(()=>{

        const request = PayloadTransformerService.transformToInitialPayload(props.transactionInput);
        console.log("this is the actual request")
        console.log(request);

        if(!initialized) {
            AxiosCalls.initialize(props.transactionInput.merchant_secret_key, request)
                .then(response => {

                    if (response.status === 200) {
                        console.log("this is the actual response")
                        console.log(response.data.data);
                        setInitialized(true);
                    }

                })
                .catch(e => {
                    console.log("this is the actual error")
                    console.log(e)
                })
        }
    },[props.transactionInput.merchant_secret_key])

    return(
        <PaymentMethodProvider>
        <div className={"kang_parent_container"}>
            <div className={"kang_right_notification_bar"}>

                { notice !== null &&
                    <div className={notice?.color}>{notice?.text}</div>
                }
                <img className={"kang_cancel"} src={cancel} alt={"cancel Icon"}/>
            </div>
            <MainLayout>
                {toggle &&
                    <React.Suspense>
                        <CheckOutPage  _toggle={flipToggle}/>
                    </React.Suspense>
                }
                {!toggle &&
                    <React.Suspense>
                        <MainCheckoutPage/>
                    </React.Suspense>
                }
            </MainLayout>
        </div>
        </PaymentMethodProvider>
    )
}
