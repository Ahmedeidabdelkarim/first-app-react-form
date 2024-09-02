import './LoanForm.css';
export default function Modal({errorMessage=null}){
    return(
        <div id="modal">
            <div id='modal-content'>
                <h1 style={{color:errorMessage?"red":"green"}}>
                    {/* The Form Has Been Submited Successfully */}
                    {errorMessage!=null?errorMessage:"The Form Has Been Submited Successfully"}
                </h1>
            </div>
        </div>
    )
}