export const CompleteTodos = (props) => {
    const { completeTodos, onClickedBack } = props;
    return (
        <div className="complete_area">
        <p className="title">完了のTodo</p>
        <ul>
          {completeTodos.map((todo, index) => {
            return (
              <li key={`${todo}-${index}`}>
                <div className="list_row">
                  <p className="todo_item">{todo}</p>
                  <button onClick={() => onClickedBack(index)}>戻す</button>
                </div>
              </li>
            )
          })}

        </ul>
      </div>
    )
}