import {createContext, ReactNode, useState} from "react";
import PaymentMethodType from "../Models/PaymentMethodType";

export const PaymentMethodContext = createContext<{state:PaymentMethodType, updateState:(newState:PaymentMethodType)=>void}>({state:'card',updateState:()=>null})

const PaymentMethodProvider = (props:{children:ReactNode})=>{
    const [state, setState] = useState<PaymentMethodType>('card');

    const updateState=(newState:PaymentMethodType)=>{
        setState(newState)
    }

    return (
        <PaymentMethodContext.Provider value={{state,updateState}}>
            {props.children}
        </PaymentMethodContext.Provider>
    )
}

export default PaymentMethodProvider;