export const IncompleteTodos = (props) => {
    const {incompleteTodos, onClickedComplete, onClickedDelete} = props;
    return (
        <div className="incomplete_area">
        <p className="title">未完了のTodo</p>
        <ul>
          {incompleteTodos.map((todo, index) => {
            return (
              <li key={`${todo}-${index}`}>
                <div className="list_row">
                  <p className="todo_item">{todo}</p>
                  <button onClick={() => onClickedComplete(index)}>完了</button>
                  <button onClick={() => onClickedDelete(index)}>削除</button>
                </div>
              </li>
            )
          })}
        </ul>
      </div>
    )
}