import React, { useState } from "react";
import TodoList from "../todoList/TodoList";

function FormTodo() {
  const [formData, setFormData] = useState({
    id: null,
    title: "",
    status: "",
  });
  const [listTodo, setListTodo] = useState([]);
  const [valFilterSelect, setValFilterSelect] = useState("all");
  const handleChange = (e) => {
    const { value, name } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  const handleSubmit = () => {
    if (formData.id) {
      const newData = listTodo.map((item) =>
        formData.id === item.id ? formData : item
      );
      setListTodo(newData);
    } else {
      setListTodo([
        ...listTodo,
        {
          ...formData,
          id: Date.now(),
        },
      ]);
    }

    setFormData({
      id: null,
      title: "",
      status: "",
    });
  };
  console.log(listTodo);
  // const onDelete = (id) => {
  //   const newData = listTodo.filter((i) => i.id !== id);
  //   setListTodo(newData);
  // };

  // const onEdit = (item) => {
  //   setFormData(item);
  // };

  const handleChangeFilter = (events) => {
    const valFilterSelect = events.target.value;
    console.log(valFilterSelect, "xxx");
    setValFilterSelect(valFilterSelect);
  };
  return (
    <div>
      <h1>Thêm công việc</h1>
      <div className="box-input">
        <input
          type="text"
          name="title"
          placeholder="Thêm công việc"
          onChange={handleChange}
          value={formData.title}
        />
        <select onChange={handleChangeFilter}>
          <option value="all">All</option>
          <option value="todo">Todo</option>
          <option value="done">Done</option>
          <option value="doing">Doing</option>
          <option value="resolved">Resolved</option>
          <option value="reOpen">reOpen</option>
        </select>
      </div>
      <div className="box-radio">
        Status
        <input
          type="radio"
          value="todo"
          name="status"
          onChange={handleChange}
          checked={formData.status === "todo"}
        />
        Todo
        <input
          type="radio"
          value="done"
          name="status"
          onChange={handleChange}
          checked={formData.status === "done"}
        />
        Done
        <input
          type="radio"
          value="doing"
          name="status"
          onChange={handleChange}
          checked={formData.status === "doing"}
        />
        Doing
        <input
          type="radio"
          value="resolved"
          name="status"
          onChange={handleChange}
          checked={formData.status === "resolved"}
        />
        Resolved
        <input
          type="radio"
          value="reOpen"
          name="status"
          onChange={handleChange}
          checked={formData.status === "reOpen"}
        />
        reOpen
      </div>
      <button onClick={handleSubmit}> {formData.id ? "sửa" : "thêm"}</button>
      {/* <TodoList data={listTodo} onDelete={onDelete} onEdit={onEdit} /> */}
      <TodoList
        data={listTodo.filter(item=>item.status===valFilterSelect || valFilterSelect==="all")}
        onChoosenData={(data, type) => {
          if (type === "delete") {
            const newData = listTodo.filter((i) => i.id !== data);
            setListTodo(newData);
          } else {
            setFormData(data);
          }
        }}
      />
    </div>
  );
}
export default FormTodo;
