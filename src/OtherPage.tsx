import EntryPoint from "./components/EntryPoint";
import TransactionInput from "./Models/TransactionInput";

export const OtherPage=()=>{
        const _callBack=(any:any):void=>{
        }

        const close=()=>{

        }
        const payload:TransactionInput = {
                tx_ref: `test-${crypto.randomUUID()}`,
                amount: 1000,
                redirect_url: "api/v1",
                currency: "NGN",
                merchant_secret_key: "sk_test_2b00762f088e476b8d27e8a5c6319bbf",
                customer:{
                        phonenumber: "08137958136",
                        email: "xpressrules@gmail.com",
                        name: "Darlington Olelewe"
                },
                customizations: {
                        logo: "",
                        title: "My test store",
                        description: "description"
                },
                callBack:_callBack,
                close: close,
        }

    return(
        <div>
            <p>jakda;ldjssssssddddddddddddddjjjjjjjjjjjjjjjjnnnnnnnnbbbbbbbbb</p>
            <p>jakda;ldjssssssddddddddddddddjjjjjjjjjjjjjjjjnnnnnnnnbbbbbbbbb</p>
            <p>jakda;ldjssssssddddddddddddddjjjjjjjjjjjjjjjjnnnnnnnnbbbbbbbbb</p>
            <p>jakda;ldjssssssddddddddddddddjjjjjjjjjjjjjjjjnnnnnnnnbbbbbbbbb</p>
            <p>jakda;ldjssssssddddddddddddddjjjjjjjjjjjjjjjjnnnnnnnnbbbbbbbbb</p>
            <p>jakda;ldjssssssddddddddddddddjjjjjjjjjjjjjjjjnnnnnnnnbbbbbbbbb</p>
            <p>jakda;ldjssssssddddddddddddddjjjjjjjjjjjjjjjjnnnnnnnnbbbbbbbbb</p>
            <p>jakda;ldjssssssddddddddddddddjjjjjjjjjjjjjjjjnnnnnnnnbbbbbbbbb</p>
            <p>jakda;ldjssssssddddddddddddddjjjjjjjjjjjjjjjjnnnnnnnnbbbbbbbbb</p>
            <p>jakda;ldjssssssddddddddddddddjjjjjjjjjjjjjjjjnnnnnnnnbbbbbbbbb</p>
            <p>jakda;ldjssssssddddddddddddddjjjjjjjjjjjjjjjjnnnnnnnnbbbbbbbbb</p>
            <p>jakda;ldjssssssddddddddddddddjjjjjjjjjjjjjjjjnnnnnnnnbbbbbbbbb</p>
            <p>jakda;ldjssssssddddddddddddddjjjjjjjjjjjjjjjjnnnnnnnnbbbbbbbbb</p>
            <p>jakda;ldjssssssddddddddddddddjjjjjjjjjjjjjjjjnnnnnnnnbbbbbbbbb</p>
            <p>jakda;ldjssssssddddddddddddddjjjjjjjjjjjjjjjjnnnnnnnnbbbbbbbbb</p>
            <p>jakda;ldjssssssddddddddddddddjjjjjjjjjjjjjjjjnnnnnnnnbbbbbbbbb</p>
            <p>jakda;ldjssssssddddddddddddddjjjjjjjjjjjjjjjjnnnnnnnnbbbbbbbbb</p>
            <p>jakda;ldjssssssddddddddddddddjjjjjjjjjjjjjjjjnnnnnnnnbbbbbbbbb</p>
            <p>jakda;ldjssssssddddddddddddddjjjjjjjjjjjjjjjjnnnnnnnnbbbbbbbbb</p>
            <p>jakda;ldjssssssddddddddddddddjjjjjjjjjjjjjjjjnnnnnnnnbbbbbbbbb</p>
            <EntryPoint transactionInput={payload}/>

        </div>
    )
}

export default OtherPage