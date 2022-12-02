import { useState } from "react";
import { Button, ButtonToolbar } from "rsuite";
import { defaultUserData, PageEnum, userDataType } from "../user-list/user.type";
import AddUser from "../add-user/AddUser";
import UserList from "../user-list/UserList";
import EditUser from "../edit-user/EditUser";
import "./home.css";

const Home = () => {
    const [userDataList, setUserDataList] = useState(defaultUserData as userDataType[]);
    const [showPage, setShowPage] = useState(PageEnum.list);
    const [editUserData, setEditUserData] = useState({} as userDataType);

    const addUserHnd = () => {
        setShowPage(PageEnum.add);
    };

    const clickBackBtnHand = () => {
        setShowPage(PageEnum.list);
    };

    const submitBtnClickHnd = (data: userDataType) => {
        setUserDataList([...userDataList, data]);
    };

    const deleteUser = (data: userDataType) => {
        // To Index from array i,e employeeList
        // Splice that
        // Update new record

        const indexToDelete = userDataList.indexOf(data);
        const tempList = [...userDataList];

        tempList.splice(indexToDelete, 1);
        setUserDataList(tempList);
    };

    const editUser = (data: userDataType) => {
        setShowPage(PageEnum.edit);
        setEditUserData(data);
    };

    const updateData = (data: userDataType) => {
        const filteredData = userDataList.filter((x) => x.id === data.id)[0];
        const indexOfRecord = userDataList.indexOf(filteredData);
        const tempData = [...userDataList];
        tempData[indexOfRecord] = data;
        setUserDataList(tempData);
    };

    return (
        <div>
            <header className="header">
                <h3>Todo Simple CRUD Application</h3>
            </header>
            <div className="container">
                {showPage === PageEnum.list && (
                    <>
                        <ButtonToolbar>
                            <Button onClick={addUserHnd} color="blue" appearance="primary">
                                Add New User
                            </Button>
                        </ButtonToolbar>
                        <UserList deleteHandler={deleteUser} editHandler={editUser} list={userDataList} />
                    </>
                )}
                {showPage === PageEnum.add && <AddUser submitBtnHandler={submitBtnClickHnd} backBtnHand={clickBackBtnHand} />}

                {showPage === PageEnum.edit && <EditUser data={editUserData} 
                updateClickHnd={updateData} />}
            </div>
        </div>
    );
};

export default Home;
