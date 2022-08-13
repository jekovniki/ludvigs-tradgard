(function (Drupal, drupalSettings, once) {
    Drupal.behaviors.myBehavior = {
      attach: function (context, settings) {
        once('myBehavior', 'html', context).forEach( function () {
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

            function addNavigationClass() {
                const select = document.querySelector('.header-navigation div+div');
                select.classList.add('navigation');
            }
            function addMobileMenuEvent() {
                const select = document.querySelector('.header-navigation .mobile-menu');
                select.setAttribute("onclick", "showMobileMenu()");
                handleMobileDropdown(['#block-ludvigs-main-menu', '#block-gardening', '#block-treesforest', '#block-facility',
                '#block-groundwork', '#block-product', '#block-authenticateduser']);
            }
            loopThroughFunction();
            addNavigationClass();
            addMobileMenuEvent();
        })
      }
    }
  } (Drupal, drupalSettings, once));


function showMobileMenu() {
    const select = document.querySelector('.header-navigation div.navigation');
    select.classList.toggle('show');
}

function handleMobileDropdown(array) {
    array.forEach(element => {
        const selectMenu = document.querySelector(`.header-navigation ${element}`);
        const selectAllChilds = selectMenu.querySelectorAll('ul li ul li');
        console.log('selectAllChilds', selectAllChilds);

        if (selectAllChilds.length > 0) {
            const parentMenu = selectMenu.querySelector('li');
            console.log('parentMenu', parentMenu);
            parentMenu.classList.add('has-children');
        }
    });
}