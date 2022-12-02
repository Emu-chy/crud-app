
import { Button, ButtonToolbar, Table } from "rsuite";
import "./user.list.css";
import { userDataType } from "./user.type";

type props = {
    list: userDataType[];
    deleteHandler: (data: userDataType) => void;
    editHandler: (data: userDataType) => void;
};

const UserList = (props: props) => {
    const { list, deleteHandler, editHandler } = props;

    return (
        <div>
            <table>
                <tr>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Action</th>
                </tr>
                {list.map((user) => {
                    return (
                        <tr key={user.id}>
                            <td>{`${user.name}`}</td>
                            <td>{`${user.email}`}</td>
                            <td>
                                <div>
                                    <ButtonToolbar>
                                        <Button onClick={() => editHandler(user)} color="blue" appearance="primary">
                                            Edit
                                        </Button>
                                        <Button onClick={() => deleteHandler(user)} color="red" appearance="primary">
                                            Delete
                                        </Button>
                                    </ButtonToolbar>
                                </div>
                            </td>
                        </tr>
                    );
                })}
            </table>
            
        </div>
    );
};

export default UserList;
