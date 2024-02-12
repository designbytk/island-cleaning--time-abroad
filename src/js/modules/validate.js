function validateInputs() {
    const inputs = document.querySelectorAll('input, select')

    // cycles through each for input - check for html5 validation
    inputs.forEach(function (input) {

        function checkValidity(options) {
            const insertError = options.insertError //default false

            if (!input.validity.valid && input.validationMessage && input.classList.contains('form-control')) { //check html5 validation on required inputs and select * all required on this form

                if (insertError) { // see addEventListener's below

                    input.nextElementSibling.innerHTML = input.validationMessage // adds error message in existing empty <div>

                }
            } else { // reset error message on typing or selecting

                if (input.nextElementSibling) { //check for Sibling

                    input.nextElementSibling.innerHTML = ''
                }

            }

        }

        input.addEventListener('input', function () {
            // We can only update the error or hide it on input.
            // Otherwise it will show when typing.
            checkValidity({ insertError: false })
        })
        input.addEventListener('invalid', function (e) {
            // prevent showing the default display
            e.preventDefault()

            // We can also create the error in invalid.
            checkValidity({ insertError: true })
        })
    })

    // Format the Phone number as typed
    var p = document.getElementsByName('phone');
    p[0].addEventListener('keyup', function () {
        var v = p[0].value;
        var output;
        v = v.replace(/[^0-9]/g, '');
        var area = v.substr(0, 3);
        var pre = v.substr(3, 3);
        var tel = v.substr(6, 4);

        if (area.length < 3) {
            output = area;
        } else if (area.length == 3 && pre.length < 3) {
            output = "" + area + "-" + "" + pre;
        } else if (area.length == 3 && pre.length == 3) {
            output = "" + area + "" + "-" + pre + "-" + tel;
        }
        p[0].value = output;

    });
}