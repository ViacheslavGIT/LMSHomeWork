//2
const buttonCreateMessage = document.querySelector("#arrow");
const enterField = document.querySelector(".enter-field");
const listContainer = document.querySelector(".to-do-list");

buttonCreateMessage.addEventListener("click", () => {
  if (enterField.value) {
    const newMassageText = document.createElement("span");
    const buttonDeleteMassage = document.createElement("button");
    buttonDeleteMassage.classList.add("delete");
    buttonDeleteMassage.innerHTML = "x";
    buttonDeleteMassage.addEventListener("click", () => {
      buttonDeleteMassage.parentNode.remove();
    });

    newMassageText.classList.add("new-massage");
    newMassageText.innerHTML = enterField.value;
    newMassageText.append(buttonDeleteMassage);
    enterField.value = "";
    listContainer.prepend(newMassageText);
  } else return;
});
