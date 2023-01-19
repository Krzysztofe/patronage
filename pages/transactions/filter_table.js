export const filterTable = (rows, input, cell) => {
  rows.forEach((row, idx) => {
    const match = new RegExp(input.value, "i").test(cell[idx].textContent);
    !match ? (row.style.display = "none") : (row.style.display = "flex");
  });
};
