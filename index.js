class Form {
    static addField(el) {
        if (el.classList.contains("add-new")) {
            const div = document.createElement("div");
            div.innerHTML = `
        <input />
        <input type="submit" value="++" class="add-new" />
        <input type="submit" value="--" class="remove" />
        <br />
        <br />
         `;
            el.parentElement.insertAdjacentElement("afterend", div);;
        }
    }

    static removeField(el) {
        if (el.classList.contains("remove")) {
            el.parentElement.remove();
        }
    }
}

// add
document.querySelector("#fields").addEventListener("click", e => {
    e.preventDefault();

    Form.addField(e.target);
});

// remove
document.querySelector("#fields").addEventListener("click", e => {
    Form.removeField(e.target);
});