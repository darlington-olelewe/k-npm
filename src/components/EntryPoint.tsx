import {KangarUPage} from "./KangarUPage/KangarUPage";
import TransactionInput from "../Models/TransactionInput";

export const EntryPoint =(props:{transactionInput:TransactionInput})=>{
    return(
        <div>
           <KangarUPage transactionInput={props.transactionInput}/>
        </div>
    )
}
export default EntryPoint