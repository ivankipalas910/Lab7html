document.addEventListener("DOMContentLoaded", () => {
  const table = document.getElementById("editTable");

  table.addEventListener("click", (event) => {
    const cell = event.target;
    if (cell.tagName === "TD" && !cell.querySelector("input")) {
      const oldText = cell.textContent;
      cell.innerHTML = `
        <input type="text" value="${oldText}">
        <button class="saveBtn">Зберегти</button>
      `;

      const input = cell.querySelector("input");
      const button = cell.querySelector(".saveBtn");

      button.addEventListener("click", () => {
        cell.textContent = input.value;
      });
    }
  });
});
