
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

// query the form by ID tag
const theForm = document.getElementById('request-form');
// inputs.forEach(function (input) {
//     if (input.type === "submit") {
//         var progress = input
//     }
// })
console.log(theForm)

// submit handler
theForm.addEventListener('submit', (e) => {
    // on form submission, prevent default
    e.preventDefault();

    var inputs = theForm.elements

    for (i = 0; i < inputs.length; i++) {
        if (inputs[i].type === "submit") {
            // Update text input
            var progress = inputs[i]
            var loader = inputs[i].parentNode
        }
    }

    // progress.classList.add('loading')
    progress.disabled = true
    loader.classList.add('loading')


    new FormData(theForm);

    // Get the form data from the event object
    let data = serialize(theForm);
    // console.log(data)


    // submit the data via XHR
    //
    var request = new XMLHttpRequest();
    // request.open("POST", "inc/airtable.php");
    request.open("POST", "https://9fi9i56m0e.execute-api.us-east-1.amazonaws.com/dev/email/send")
    request.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8');
    // request.withCredentials = true;
    // Possible fix for Safari hangup
    request.setRequestHeader('cache-control', 'no-cache');

    request.send(data);

    request.onreadystatechange = function () {

        if (request.readyState === 4) {

            if (request.status === 200) {
                // if successful add success message from contact.php to form
                if (!request.statusText.includes('error')) {
                    var messageAlert = 'alert-success'
                } else {
                    var messageAlert = 'alert-danger'
                }
                var messageText = request.responseText;

                // let's compose Bootstrap alert box HTML
                // var alertBox = '<div class="alert ' + messageAlert + ' alert-dismissable"><button type="button" class="close" data-dismiss="alert" aria-hidden="true">&times;</button>' + messageText + '</div>';
                var alertBox = '<div class="alert ' + messageAlert + ' alert-dismissable" role="alert"><button type="button" class="close" data-dismiss="alert" aria-label="Close" aria-hidden="true">&times;</button>' + messageText + '</div>';

                // If we have messageAlert and messageText
                // if (messageAlert && messageText) {
                if (messageAlert && messageText) {

                    // inject the alert to .messages div in our form
                    var alert = theForm.querySelector('.messages');
                    // theForm.querySelector('.messages').innerHTML = alertBox;
                    alert.innerHTML = alertBox;

                    // reference the initialization object
                    // let alert = theForm.querySelector('.alert')
                    // var alertInit = alert.Alert;
                    alert.querySelector('[data-dismiss="alert"]').addEventListener("click", function () {
                        alert.firstChild.remove();
                        progress.disabled = false
                    });

                    // // apply the public method
                    // alertInit.close();
                    // empty the form
                    loader.classList.remove('loading')
                    theForm.reset()
                }

            } else {
                var err = 'An error occurred during your request: ' + request.status + ' ' + request.statusText;
                var alertBox = '<div class="alert alert-danger alert-dismissable"><button type="button" class="close" data-dismiss="alert" aria-label="Close" aria-hidden="true">&times;</button>' + err + '</div>';
                // Show an error message and explaination
                var alert = theForm.querySelector('.messages');
                alert.innerHTML = alertBox;

                alert.querySelector('[data-dismiss="alert"]').addEventListener("click", function () {
                    alert.firstChild.remove();
                    progress.disabled = false
                });
                // empty the form
                loader.classList.remove('loading')
                theForm.reset()
            }
        }
    };
});


// serializer for the form data
var serialize = function (form) {

    // Setup our serialized data
    var serialized = [];

    // Loop through each field in the form
    for (var i = 0; i < form.elements.length; i++) {

        var field = form.elements[i];

        // Don't serialize fields without a name, submits, buttons, file and reset inputs, and disabled fields
        if (!field.name || field.disabled || field.type === 'file' || field.type === 'reset' || field.type === 'submit' || field.type === 'button') continue;

        // If a multi-select, get all selections
        if (field.type === 'select-multiple') {
            for (var n = 0; n < field.options.length; n++) {
                if (!field.options[n].selected) continue;
                serialized.push(encodeURIComponent(field.name) + "=" + encodeURIComponent(field.options[n].value));
            }
        }

        // Convert field data to a query string
        else if ((field.type !== 'checkbox' && field.type !== 'radio') || field.checked) {
            serialized.push(encodeURIComponent(field.name) + "=" + encodeURIComponent(field.value));
        }
    }

    return serialized.join('&');

};