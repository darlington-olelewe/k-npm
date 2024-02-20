import "./CheckOutPage.css"
export const CheckOutPage=(props:{_toggle:()=>void})=>{
    return (
        <div className={"first_snip_container"}>

            <div className={"first_snip_inner_container"}>
                <p className={"first_snip_p"}>Payment Method</p>
                <button className={"first_snip_btn"} onClick={props._toggle}>Checkout with KangarU</button>
            </div>

        </div>
    )
}
export default CheckOutPage;