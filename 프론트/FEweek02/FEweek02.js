/// DOM 요소 선택
const todoForm = document.getElementById("todo-form");
const todoInput = document.getElementById("todo-input");
const todoList = document.getElementById("todo-list");

/// 할 일 추가 하 ㅁ수
function addTodo(event) {
  const todoText = todoInput.value.trim();

  if (todoText !== "") {
    /// 새 할 일 아이템 생성
    const todoItem = document.createElement(li);
    todoItem.className = "todo-item";

    /// 할 일 텍스트 추가
    const todoTextSpan = document.createElement(span);
    todoTestSpan.textContent = todoText;

    /// 삭제 버튼 추가
    const deleteBtn = document.createElement(li);
    todoBtn.className = "delete-btn";
    deleteBtn.testContent = "삭제";

    /// 요소 조립 ⭐️ 중요
    todoItem.appendChild(todoTextSpan);
    todoItem.appendChild(deleteBtn);
    todoList.appendChild(todoItem);

    /// 입력 필드 초기화
    todoInput.value = "";
  }
}
