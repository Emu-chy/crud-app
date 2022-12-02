import { useState } from "react";
import { userDataType } from "../user-list/user.type";
import '../user-list/user-form.css'
type props = {
    backBtnHand: () => void;
    submitBtnHandler: (data: userDataType) => void;
};

const AddUser = (props: props) => {
    const { backBtnHand, submitBtnHandler } = props;

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");

    const nameHandle = (e: any) => {
        setName(e.target.value);
    };

    const emailHandle = (e: any) => {
        setEmail(e.target.value);
    };
    
    const submitClickBtnHnd = (e: any) => {
        e.preventDefault();
        const data: userDataType = {
            id: new Date().toJSON().toString(),
            name: name,
            email: email,
        };
        submitBtnHandler(data);
        backBtnHand();
    };

    return (
        <div>
            <form onSubmit={submitClickBtnHnd}>
                <div>
                    <label>Name </label>
                    <input type="text" value={name} onChange={nameHandle} placeholder="enter name" />
                </div>
                <div>
                    <label>Email </label>
                    <input type="text" value={email} onChange={emailHandle} placeholder="enter email" />
                </div>
                <div>
                    <button className="btn">Add</button>
                    <button className="btn2" onClick={backBtnHand}>Back</button>
                </div>
            </form>
        </div>
    );
};

export default AddUser;
