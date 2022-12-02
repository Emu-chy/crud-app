import React, { useState } from 'react';
import { userDataType } from '../user-list/user.type';

type props = {
    data: userDataType,
    updateClickHnd: (data: userDataType) => void;

}

const EditUser = (props: props) => {
    const { data, updateClickHnd } = props;

    const [name, setName] = useState(data.name);
    const [email,setEmail] = useState(data.email);

    const nameHandle = (e: any) => {
        setName(e.target.value);
    };

    const emailHandle = (e: any) => {
        setEmail(e.target.value);
    };

    const submitClickBtnHnd = (e: any) => {
        e.preventDefault();
        const updatedData: userDataType = {
          id: data.id,
          name: name,
          email: email
        };
        updateClickHnd(updatedData);
    }

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
                    <button className="btn">Update</button>
                </div>
            </form>
        </div>
    );
};

export default EditUser;