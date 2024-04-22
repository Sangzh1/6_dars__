  const form = document.getElementById("form");
  const input = document.getElementById("todo-input");
  const list = document.getElementById("todo-list");

  form.addEventListener("submit", (event) => {
    event.preventDefault();

    const task = input.value;

    const li = document.createElement("li");
    li.textContent = task;

    const button = document.createElement("button");
    button.textContent = "X";
    button.addEventListener("click", () => {
      li.remove();
    });

    li.appendChild(button);
    list.appendChild(li);

    input.value = "";
  });