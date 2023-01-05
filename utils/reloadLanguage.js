export const reloadLanguage = (elements) =>{
    elements.forEach(element => {
        element.addEventListener("click", () => {
          window.location.href = element.getAttribute("href");
          window.location.reload();
        });
      });
}
