import { useDispatch, useSelector } from "react-redux";
import { Table } from "reactstrap";
import { getUpdate, remove } from "../store/slices/todoSlice";

export default function TodoList() {
  const { todos } = useSelector((state) => state.todo);
  const dispatch = useDispatch();

  const handleEdit = (index) => () => {
    dispatch(getUpdate(index));
  };
  const handleDelete = (index) => () => {
    dispatch(remove(index));
  };

  return (
    <Table striped>
      <thead>
        <tr>
          <th>#</th>
          <th>Todo</th>
          <th colSpan={2}></th>
        </tr>
      </thead>
      <tbody>
        {todos.map((todo, index) => (
          <tr key={index}>
            <th scope="row">{index}</th>
            <td>{todo}</td>
            <td>
              <span onClick={handleEdit(index)}>EDIT</span>
            </td>
            <td>
              <span onClick={handleDelete(index)}>DELETE</span>
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
}
