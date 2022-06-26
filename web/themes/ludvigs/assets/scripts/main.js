// This is the main javascript file

function setPlaceholderToForm() {
    console.log(1);
    const textfields = document.querySelectorAll('form .js-form-type-textfield');
    const email = document.querySelectorAll('form .js-form-type-email');
    const textarea = document.querySelectorAll('form .js-form-wrapper');

    for (const item of textfields) {
        const labels = item.querySelector('label');
        console.log(labels);
    }

}

setPlaceholderToForm();