import "./SectionController.css"
import {useContext, useState} from "react";
import {Icons} from "../../assets";
import PaymentMethodType from "../../Models/PaymentMethodType";
import {PaymentMethodContext} from "../../context/PaymentMethodContext";

export const SectionController=()=>{
    const {state,updateState} = useContext(PaymentMethodContext);
    const [show, setShow] = useState(true);
    const handleSelected=(choice:PaymentMethodType ):void=>{
        updateState(choice);
        setShow(!show);
    }
    return(
        <div className={ "selection_controller_container"}>
            <h4 className={"selection_controller_h4"}>Select your preferred payment option</h4>
            <div>
                <div className={"selection_controller_options"}><Img src={Icons[state]}/> <p>{words.get(state)}</p> <span onClick={()=>setShow(!show)} className={"selection_controller_btn"}>{!show && <Img src={Icons['arrowUp']}/>}{show && <Img src={Icons['arrowDown']}/>}</span></div>
            </div>
            <div>
                { show &&
                    options.filter((e)=>{
                        return e !== state
                    }).map((choice,index)=>
                        <div key={index} className={"selection_controller_options_li"} onClick={()=>handleSelected(choice)}><Img src={Icons[choice]}/> <p>{words.get(choice)}</p> </div>
                    )
                }
            </div>

        </div>
    )
}
const Img=({src}:{src:string})=>{
    return <img srcSet={src} alt={`image for ${src}`} className={"section_controller_img"}/>
}
const words = new Map([["card", "Debit or Credit Card"], ["bank", "Internet Banking"], ["transfer", "Bank Transfer"],["ussd", 'USSD']]) as const;
const options = ['card','transfer','bank','ussd'] as const;
export default SectionController