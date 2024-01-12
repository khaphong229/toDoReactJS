import React from "react";

function TodoList(props) {
  console.log(props);
  const { data,onChoosenData } = props;
  return (
    <>
      {data.length > 0 ? (
        data.map((item) => (
          <div key={item.id} className="display-box-todo">
            <p>{item.title}</p>
            <p
              className={`${
                item.status === "todo"
                  ? "bg-red"
                  : item.status === "done"
                  ? "bg-green"
                  : item.status === "doing"
                  ? "bg-gold"
                  : item.status === "resolved"
                  ? "bg-blue"
                  : "bg-purple"
              } btn-status `}
            >
              {item.status.toUpperCase()}
            </p>
            <p>
              <button onClick={() => onChoosenData(item.id,'delete') }>Xóa</button>
              <button onClick={() => onChoosenData(item,'edit')}>Sua</button>
            </p>
          </div>
        ))
      ) : (
        <p>No data</p>
      )}
    </>
  );
}
export default TodoList;
