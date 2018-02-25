/* jshint esversion: 6 */
document.addEventListener('DOMContentLoaded',
    function(e) {
        /** 
         * Creating some tags for fav band - maybe move it into it's own module.
        */
        const taggableElement = document.getElementById('taggable');
        let inputElement = document.getElementById('fav-brands');
        let inputValue = "";

        taggableElement.addEventListener('click', (event) => {
            inputElement.focus();
            console.log(inputElement.focus());
            let clicked = event.target;
            if (clicked.classList.contains('tag')) {
                clicked.remove();
            }
        }, false);

        taggableElement.addEventListener('keydown', (event) => {
            if (event.keyCode == 13) {
                event.preventDefault();
            }
        }, false);

        taggableElement.addEventListener('keyup', (event) => {
            if (event.keyCode == 13) {
                tagged(inputElement);
            }
        }, false);

        function tagged(el) {
            inputValue = inputValue + el.value;
            el.insertAdjacentHTML('beforebegin', '<span class="tag">' + el.value + '</span>');
            el.value =  '';
        }

        /**
         * Creating an object for the user with all the details requested in the form
         */
        let keepInTouchForm = document.getElementById('keep-in-touch');

        keepInTouchForm.addEventListener('submit', function(e) {
            e.preventDefault();
            let userProfile = {};
            let fullName = document.getElementById('full-name').value;
            let emailAddress = document.getElementById('email-address').value;
            let dateOfBirth = document.getElementById('date-of-birth').value;
            let favouriteBrands = inputValue;
            let selectedCategory = document.getElementById('selected-category').value;

            userProfile.name = fullName;
            userProfile.email = emailAddress;
            userProfile.dateOfBirth = dateOfBirth;
            userProfile.favouriteBrands = favouriteBrands;
            userProfile.selectedCategory = selectedCategory;

            console.log (userProfile);

        });
    }
);

/**
 * TODO's
 * For "e-mail address" - add a simple check to see if they at least used a valid formated e-mail address, but definetly an e-mail verification would be advised if the e-mail field is required.
 * For "Date of birth" - add a js datepicker for consistency and enhanced functionality.
 * For "Favourite brands" - needs the data to be verified, don't insert duplicates, remove the closed tags from the value
 * For "Categorie" - implement a .js select for design/usability consistency.
 */