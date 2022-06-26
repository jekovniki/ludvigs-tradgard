// This is the main javascript file

function setPlaceholderToForm() {
    console.log(1);
    const textfields = document.querySelectorAll('form .js-form-type-textfield');
    const email = document.querySelectorAll('form .js-form-type-email');
    const textarea = document.querySelectorAll('form .js-form-wrapper');

    for (const item of textfields) {
        const label = item.querySelector('label');
        const input = item.querySelector('input');
        input.placeholder = label.innerText;
    }
    for (const item of email) {
        const label = item.querySelector('label');
        const input = item.querySelector('input');
        input.placeholder = label.innerText;
    } 
    for (const item of textarea) {
        const label = item.querySelector('label');
        const input = item.querySelector('textarea');
        input.placeholder = label.innerText;
    } 
}

setPlaceholderToForm();