import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button, Col, Form, FormGroup, Input, Label } from "reactstrap";
import { add, closeUpdate, saveUpdate } from "../store/slices/todoSlice";
import { useEffect } from "react";

const initialState = { todo: "" };

export default function TodoForm() {
  const [data, setData] = useState(initialState);

  const { index, todos } = useSelector((state) => state.todo);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!isNaN(index)) {
      setData({
        todo: todos[index],
      });
    }
  }, [index, todos]);

  const handleChangeValue = (event) => {
    setData({
      [event.target.name]: event.target.value,
    });
  };

  const handleAddTodo = () => {
    dispatch(add(data.todo));
    setData(initialState);
  };
  const handleUpdateTodo = () => {
    dispatch(saveUpdate({ todo: data.todo, index }));
    setData(initialState);
  };
  const handleCloseUpdateTodo = () => {
    dispatch(closeUpdate());
    setData(initialState);
  };

  return (
    <Form>
      <FormGroup row>
        <Label for="todo" sm={2}>
          Todo
        </Label>
        <Col sm={10}>
          <Input
            value={data.todo}
            onChange={handleChangeValue}
            id="todo"
            name="todo"
            placeholder="Add your todo"
            type="text"
          />
        </Col>
      </FormGroup>
      <FormGroup check row>
        <Col
          sm={{
            offset: 2,
            size: 10,
          }}
        >
          {!(index + 1) ? (
            <Button color="primary" onClick={handleAddTodo}>
              Add todo
            </Button>
          ) : (
            <>
              <Button color="primary" onClick={handleUpdateTodo}>
                Update todo
              </Button>
              <Button onClick={handleCloseUpdateTodo}>X</Button>
            </>
          )}
        </Col>
      </FormGroup>
    </Form>
  );
}
