$(document).ready(() => {
    // This is the main javascript file

function setPlaceholderToForm() {
    try {
        const textfields = document.querySelectorAll('form .js-form-type-textfield');
        const email = document.querySelectorAll('form .js-form-type-email');
        const textarea = document.querySelectorAll('form .js-form-type-textarea');

        for (const item of textfields) {
            const label = item.querySelector('label');
            const input = item.querySelector('input');
            input.placeholder = label.innerText;
            label.remove();
        }

        for (const item of email) {
            const label = item.querySelector('label');
            const input = item.querySelector('input');
            input.placeholder = label.innerText;
            label.remove();
        } 

        for (const item of textarea) {
            const label = item.querySelector('label');
            const input = item.querySelector('textarea');
            input.placeholder = label.innerText;
            label.remove();
        } 
        
        return true;
    } catch (error) {
        return false;
    }
}

function loopThroughFunction() {
    let i = 0;
    let id = setInterval(loop, 200);
    function loop() {
        if (i > 10) {
            clearInterval(id);
        } else {
            i++;
            const loop = setPlaceholderToForm();
            if (loop === false) {
                i = 11;
            }
        }
    }
}

loopThroughFunction();
})