import { useState } from 'react';
import './LoanForm.css';
import Modal from './Modal'
export default function LoanForm(){
    const [loanInputs,setLoanInputs]=useState({
        name:'',
        phoneNumber:'',
        age:'',
        employee:false,
        salary:''
    });
    const[appModal,setAppModal]=useState(false)
    const [errorMessage,setErrorMessage]=useState(null);

    function handelFormSubmit(e){
        e.preventDefault();
        const{age}=loanInputs;
        const{phoneNumber}=loanInputs;
        //alert("Form submitted successfully!");
        setErrorMessage(null);
        if(age<18 || age>100){
            setErrorMessage("The age must be between 18 and 100");
        }else if(phoneNumber.length<10 || phoneNumber.length>12){
            setErrorMessage("The phone number must be between 10 and 12 digits");
        }
        setAppModal(true);
        setTimeout(()=>{
            setAppModal(false);
            if(appModal){
                setLoanInputs({
                    name: '',
                    phoneNumber: '',
                    age: '',
                    employee: false,
                    salary: ''
                }); 
            }
            // Reset loanInputs state after modal is hidden

        },3000); // Show modal when form is submitted
    }

    function HandelShowModal(){
        if(appModal){
            setAppModal(false);
        }
    }
    

    const btnIsDisabled=loanInputs.name===''||loanInputs.phoneNumber===''||loanInputs.age==='';

    return(
        <div onClick={HandelShowModal} className='flex' style={{}}>
            <form>
                <h1>Request Form</h1>
                <hr/>
                <label>Name: </label>
                <input value={loanInputs.name} onChange={(e)=>{
                    setLoanInputs({...loanInputs,name:e.target.value})
                }} />
                <label>Phone Number: </label>
                <input value={loanInputs.phoneNumber} onChange={e=>{
                    setLoanInputs({...loanInputs,phoneNumber:e.target.value})
                }} />
                <label>Age: </label>
                <input value={loanInputs.age} onChange={e=>{
                    setLoanInputs({...loanInputs,age:e.target.value})
                }}/>
                <label>Are you emloyee?</label>
                <input style={{height:'20px',marginTop:'20px'}} type='checkbox' checked={loanInputs.employee} onChange={e=>{
                    setLoanInputs({...loanInputs,employee:e.target.checked})
                }}/>
                <label>Salary:</label>
                <select value={loanInputs.salary} onChange={e=>{
                    setLoanInputs({...loanInputs,salary:e.target.value})
                }}>
                    <option>less than 500$</option>
                    <option>between 500$ and 2000$</option>
                    <option>above 2000$</option>
                </select>

                <input id={btnIsDisabled?"disabled":""} onClick={handelFormSubmit} className='btn' type='submit' disabled={btnIsDisabled}/>
            </form>
            
            {appModal && <Modal errorMessage={errorMessage}/>} ;{/* Render Modal only when appModal is true */}
        </div>
    );
}