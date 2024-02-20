import React, {useContext} from "react";
import "./MainCheckoutPage.css"
import OrderSummary from "../OrderSummary/OrderSummary";
import SectionController from "../SectionController/SectionController";
import {PaymentMethodContext} from "../../context/PaymentMethodContext";


const Card = React.lazy(()=>import("../Sections/Card/Card"));
const Ussd = React.lazy(()=>import("../Sections/Ussd/Ussd"));
const Bank = React.lazy(()=>import("../Sections/Bank/Bank"))
const Transfer = React.lazy(()=>import("../Sections/Transfer/Transfer"))

export const MainCheckOutPage=()=>{
    const {state} = useContext(PaymentMethodContext);

    return(
        <div>
            <OrderSummary/>
            <SectionController/>

            {state == 'card' &&
                <React.Suspense>
                    <Card/>
                </React.Suspense>
            }
            {state == 'bank' &&
                <React.Suspense>
                    <Bank/>
                </React.Suspense>
            }
            {state == 'transfer' &&
                <React.Suspense>
                    <Transfer/>
                </React.Suspense>
            }
            {state == 'ussd' &&
                <React.Suspense>
                    <Ussd/>
                </React.Suspense>
            }


        </div>
    )
}
export default MainCheckOutPage