export default function modalAppear(validate) {
    const modals = document.querySelectorAll(".modal");
    // const modal = document.querySelector(".modal-md")
    const triggers = document.querySelectorAll(".trigger");
    const closeButtons = document.querySelectorAll(".close-btn");
    // const closeButtonMd = document.querySelector(".close-btn-md");
    // Change modal-content to Quote Request form when clicked
    const quotes = document.querySelectorAll(".button-primary.quote")
    const requestForm = document.querySelector('.container-form')

    // Need to add a Media Query to handle Modal on Tablet and Desktop seperate from Mobile
    const x = window.matchMedia("(min-width: 768px)")
    // const currentService = ""
    // const modalContents = document.querySelector('[data-service]');

    // function getService() {
    //     modalContents.forEach(modalContent)

    // }
    const form_inputs = [
        'name',
        'email',
        'phone',
        // 'message'
    ]

    function toggleModal() {
        modals.forEach(modal => {

            if (x.matches) { // Modal inside div -- tablet & desktop

                if (modal.parentElement.classList.contains('container')) {
                    modal.classList.toggle("show-modal");
                    modal.parentElement.classList.toggle("container-modal");
                    modal.querySelector(".modal-content").innerHTML = ''
                    modal.querySelector(".modal-image").remove()

                }
                // let footers = modal.querySelectorAll(".modal-footer")

                // footers.forEach(footer => {
                //     console.log(footer)

                //     if (footer.classList.contains('hide')) {
                //         console.log(footer)
                //         footer.classList.toggle('hide')
                //     }
                // })
                if (modal.querySelector(".modal-footer").classList.contains('hide')) {
                    modal.querySelector(".modal-footer").classList.toggle('hide')
                }

            } else { // Modal outside div -- mobile
                if (!modal.parentElement.classList.contains('container')) {
                    modal.classList.toggle("show-modal");
                    // modal.parentElement.classList.toggle("show-modal");
                }
                if (modal.querySelector(".modal-footer").classList.contains('hide')) {
                    modal.querySelector(".modal-footer").classList.toggle('hide')
                }
            }
        });
    }

    function windowOnClick(event) {
        modals.forEach(modal => {
            if (event.target === modal) {
                toggleModal();
            }
        });
    }

    triggers.forEach(trigger => {
        trigger.addEventListener("click", function () {
            // toggleModal();
            modals.forEach(modal => {
                if (x.matches) { // If media query matches use the .modal in the container
                    if (modal.parentElement.classList.contains('container')) {
                        modal.classList.toggle("show-modal")
                        // modalmd.innerHTML = modal.innerHTML
                        modal.parentElement.classList.toggle("container-modal")
                        modal.querySelector(".modal-content").outerHTML = trigger.innerHTML
                        modal.querySelector(".card-content").classList.add('modal-content')
                        modal.querySelector(".card-content").classList.remove('card-content')


                        modal.querySelector(".modal-content").dataset.service = trigger.dataset.service

                        // modal.querySelector(".modal-content").lastChild.innerHTML = document.querySelector(".modal-footer").innerHTML
                        // modal.querySelector(".long-desc").insertAdjacentHTML("afterend",document.querySelector(".modal-footer").outerHTML)
                        modal.getElementsByTagName("img")[0].src = '/img/' + trigger.dataset.folder + '/' + trigger.dataset.service + '_213x160.jpg'
                        wrapDiv(modal.getElementsByTagName("img")[0])
                        // modal.querySelector(".modal-content").innerHTML = trigger.getElementsByTagName("img")[0].outerHTML + modal.querySelector(".modal-content").innerHTML











                        // Worked sort of...
                        // let wrapper = document.createElement('div')
                        // wrapper.classList.add('modal-footer')
                        // wrapper.innerHTML = document.querySelector(".modal-footer").innerHTML
                        // el.parentNode.insertBefore(wrapper, el);
                        // wrapper.appendChild(el);


                        // Move Footer into the content instead of seperate
                        // modal.querySelector(".card-content").appendChild(document.querySelector(".modal-footer"))
                        // modal.querySelector(".card-content").appendChild(wrapper)
                        // modal.querySelector(".modal-footer").classList.add('form-group','form-submit')
                        // modal.querySelector(".modal-footer").classList.remove("modal-footer")

                        // destination.appendChild(source)


                        // if (trigger.classList.contains("horizontal")) {
                        //     modal.getElementsByTagName("img")[0].src = '/img/' + trigger.dataset.service + '_476x357.jpg'
                        // }
                    }
                    // }
                } else { // Small media use the .modal outside the container
                    if (!modal.parentElement.classList.contains('container')) {
                        modal.classList.toggle("show-modal")
                        // modal.parentElement.classList.toggle("show-modal")
                        modal.querySelector(".modal-content").innerHTML = trigger.innerHTML
                        modal.querySelector(".modal-content").dataset.service = trigger.dataset.service
                        modal.getElementsByTagName("img")[0].src = '/img/' + trigger.dataset.service + '_476x357.jpg'

                        // if (trigger.classList.contains("horizontal")) {
                        //     modal.getElementsByTagName("img")[0].src = '/img/' + trigger.dataset.service + '-sm.jpg'
                        // }
                    }
                    // add more images
                    // const img = document.createElement("img");
                    // img.src = "http://www.google.com/intl/en_com/images/logo_plain.png";
                    // modal.appendFirstChild(img)
                }
            });

        });
    });

    // function goback(e) {
    //     e.preventDefault()

    //     triggers.forEach(trigger => {
    //         const srv = modal.querySelector(".modal-content")
    //         if (trigger.dataset.service == srv.dataset.service) {
    //             srv.querySelector(".long-desc").innerHTML = trigger.querySelector(".long-desc").innerHTML
    //             if (modal.querySelector(".modal-footer").classList.contains('hide')) {
    //                 modal.querySelector(".modal-footer").classList.toggle('hide')
    //             }
    //         }
    //     })
    // }


    quotes.forEach(quote => {

        quote.addEventListener("click", function () {
            // toggleModal();
            // modal.classList.toggle("show-modal")
            modals.forEach(modal => {




                if (x.matches) {
                    if (modal.parentElement.classList.contains('container')) {
                        modal.querySelector(".long-desc").innerHTML = requestForm.innerHTML
                        const s = modal.querySelector(".service").innerHTML
                        modal.querySelector("input[type='hidden']").value = s
                        modal.querySelector(".modal-footer").classList.toggle('hide')

                        if (modal.querySelector(".modal-content").dataset.service == "disinfectants") {
                            modal.querySelector(".service-list").classList.toggle('hide')
                            modal.querySelector(".service-cert").classList.toggle('hide')
                        }
                        // modal.querySelector("quote-form").id = 'request-form'
                        validateInputs()
                        // readyForm()
                        submitForm()

                        const b = modal.querySelector(".go-back")
                        b.addEventListener('click', function (e) {
                            e.preventDefault()

                            triggers.forEach(trigger => {
                                const srv = modal.querySelector(".modal-content")
                                if (trigger.dataset.service == srv.dataset.service) {
                                    srv.querySelector(".long-desc").innerHTML = trigger.querySelector(".long-desc").innerHTML
                                    modal.querySelector(".modal-footer").classList.toggle('hide')

                                    if (srv.dataset.service == "disinfectants") {
                                        modal.querySelector(".service-list").classList.toggle('hide')
                                        modal.querySelector(".service-cert").classList.toggle('hide')
                                    }

                                }
                            })

                        })

                    }
                } else {
                    if (!modal.parentElement.classList.contains('container')) {
                        modal.querySelector(".long-desc").innerHTML = requestForm.innerHTML
                        const s = modal.querySelector(".service").innerHTML
                        modal.querySelector("input[type='hidden']").value = s
                        modal.querySelector(".modal-footer").classList.toggle('hide')

                        if (modal.querySelector(".modal-content").dataset.service == "disinfectants") {
                            modal.querySelector(".service-list").classList.toggle('hide')
                            modal.querySelector(".service-cert").classList.toggle('hide')
                        }

                        validateInputs()
                        // readyForm()
                        submitForm()

                        const b = modal.querySelector(".go-back")
                        b.addEventListener('click', function (e) {
                            e.preventDefault()

                            triggers.forEach(trigger => {
                                const srv = modal.querySelector(".modal-content")
                                if (trigger.dataset.service == srv.dataset.service) {
                                    srv.querySelector(".long-desc").innerHTML = trigger.querySelector(".long-desc").innerHTML
                                    modal.querySelector(".modal-footer").classList.toggle('hide')

                                    if (srv.dataset.service == "disinfectants") {
                                        modal.querySelector(".service-list").classList.toggle('hide')
                                        modal.querySelector(".service-cert").classList.toggle('hide')
                                    }


                                }
                            })

                        })



                    }
                }

            });
        });
    });

    // trigger.addEventListener("click", toggleModal);
    closeButtons.forEach(closeButton => {
        closeButton.addEventListener("click", toggleModal);
    });
    // closeButton.addEventListener("click", toggleModal);
    window.addEventListener("click", windowOnClick);
}

const form_inputs = [
    'first',
    'last',
    'email',
    'emailics',
    'phone',
    'residence',
    'service'
]

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
    const p = document.getElementsByName('phone');
    p[0].addEventListener('keyup', function () {
        let v = p[0].value;
        var output;
        v = v.replace(/[^0-9]/g, '');
        const area = v.substr(0, 3);
        const pre = v.substr(3, 3);
        const tel = v.substr(6, 4);

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

// REPLACED by submitForm() > serverless endpoint vs. php
function readyForm() {
    // query the form by ID tag
    let theForm = document.getElementById('request-form');

    console.log(theForm)

    // submit handler
    theForm.addEventListener('submit', (e) => {
        // on form submission, prevent default
        e.preventDefault();

        let progress = theForm.querySelector('input[type="submit"]')
        let loader = progress.parentElement
        // for (const i = 0; i < el.length; i++) {
        //     if (el[i].type === "submit") {
        //         // Update text input
        //         const progress = el[i]
        //         const loader = el[i].parentNode
        //     }
        // }
        console.log(progress + "+" + loader)
        // progress.classList.add('loading')
        progress.style.opacity = ".15"
        loader.classList.add('loading')


        new FormData(theForm);

        // Get the form data from the event object
        let data = serialize(theForm);
        console.log(data)

        // submit the data via XHR
        const request = new XMLHttpRequest();
        // request.open("POST", "inc/quote-request.php");
        request.open("POST", "https://9fi9i56m0e.execute-api.us-east-1.amazonaws.com/dev/email/send", true)
        // request.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8');
        request.setRequestHeader('Content-Type', 'application/json');

        request.send(data);

        request.onreadystatechange = function () {

            if (request.readyState === 4) {

                if (request.status === 200) {
                    // if successful add success message from contact.php to form
                    // if (!request.statusText.includes('error')) {
                    //     const messageAlert = 'alert-success'
                    // } else {
                    //     const messageAlert = 'alert-danger'
                    // }
                    const messageText = request.responseText;


                    // alert box HTML

                    // If we have messageAlert and messageText
                    if (messageText) {

                        // inject the alert to .messages div in our form
                        const alert = theForm.querySelector('.quote-text');
                        let submit = theForm.querySelector('[type="submit"]');
                        let formgroups = theForm.querySelectorAll('.form-group');

                        // theForm.querySelector('.messages').innerHTML = alertBox;
                        alert.innerHTML = messageText;
                        // submit.setAttribute("disabled", "");

                        formgroups.forEach(group => {
                            if (!group.classList.contains("form-submit")) {
                                group.remove()
                            } else {
                                group.querySelector('[type="submit"]').remove()
                                group.querySelector('[type="reset"]').remove()
                            }
                        })

                        // let j = formgroups[0].getElementsByTagName('input')
                        // console.log(j)
                        // j.forEach(k => {
                        //     k.remove()
                        // })
                        // reference the initialization object
                        // let alert = theForm.querySelector('.alert')
                        // const alertInit = alert.Alert;
                        // alert.querySelector('[data-dismiss="alert"]').addEventListener("click", function () {
                        //     alert.firstChild.remove();
                        //     progress.disabled = false
                        // });

                        // // apply the public method
                        // alertInit.close();
                        // empty the form
                        loader.classList.remove('loading')
                        // progress.style.remove()
                        theForm.reset()
                        document.location.search = "request=submitted"
                    }

                } else {
                    const err = 'An error occurred during your request: ' + request.status + ' ' + request.statusText;
                    const alertBox = '<div class="alert alert-danger alert-dismissable"><button type="button" class="close" data-dismiss="alert" aria-label="Close" aria-hidden="true">&times;</button>' + err + '</div>';
                    // Show an error message and explaination
                    const alert = theForm.querySelector('.messages');
                    alert.innerHTML = alertBox;

                    alert.querySelector('[data-dismiss="alert"]').addEventListener("click", function () {
                        alert.firstChild.remove();
                        progress.disabled = false
                    });
                    // empty the form
                    loader.classList.remove('loading')
                    // progress.style.remove()

                    theForm.reset()
                }
            }
        };
    });
}

function submitForm(payload) {
    const url = 'https://9fi9i56m0e.execute-api.us-east-1.amazonaws.com/dev/email/send'
    let form = document.getElementById('request-form');
    form.addEventListener('submit', function (e) {
        e.preventDefault()
        // submit.disabled = true

        // progress spinner
        let progress = form.querySelector('input[type="submit"]')
        let loader = progress.parentElement

        console.log(progress + "+" + loader)
        // progress.classList.add('loading')
        progress.style.opacity = ".15"
        loader.classList.add('loading')


        const payload = createPayload(form)
        // post to endpoint
        post(url, payload, function (err, res) {
            if (err) {
                error_msg(err, form, loader)
            } else {
                success(form, loader)
            }
        })
    })
}

function post(url, body, callback) {
    var req = new XMLHttpRequest();
    req.open("POST", url, true);
    req.setRequestHeader("Content-Type", "application/json");
    req.addEventListener("load", function () {
        if (req.status < 400) {
            callback(null, JSON.parse(req.responseText));
        } else {
            callback(new Error("Request failed: " + req.statusText));
        }
    });
    req.send(JSON.stringify(body));
}

// Handle successful form submission
function success(form, loader) {
    const success_msg = `Thank you for sending us a message! We'll get in touch with you shortly`

    // inject the alert to .messages div in our form
    const alert = form.querySelector('.quote-text');
    // let submit = form.querySelector('[type="submit"]');
    let formgroups = form.querySelectorAll('.form-group');

    alert.innerHTML = success_msg;

    formgroups.forEach(group => {
        if (!group.classList.contains("form-submit")) {
            group.remove()
        } else {
            group.querySelector('[type="submit"]').remove()
            group.querySelector('[type="reset"]').remove()
        }
    })

    // remove the loader
    loader.classList.remove('loading')

    // reset form text inputs
    // form_inputs.forEach((input) => {
    //     form[input].value = ''
    // })

}

// Handle errors form submission
function error_msg(err, form, loader) {
    console.log(err)
    
    // Create a new element, for example, a <p> element
    const el = document.createElement("div");

    // Set the content of the new element
    el.textContent = `There was an error with sending your message. Please try again or contact us by email.`
    el.style.padding = '1rem'
    // el.style.backgroundColor = '#1a93dc'
    el.style.border = '1px solid #1a93dc'
    el.style.borderRadius = '5px'
    el.style.marginTop = '1rem'
    
    // Set the class name of the new element
    el.className = "help-block with-errors";

    // Add the new element to the form
    // form.appendChild(el);
    
    // Append the new element as a child of the parent element
    const first = form.firstChild;
    // form.appendChild(el);
    form.insertBefore(el, first)

    // remove the loader
    loader.classList.remove('loading')
    // reset form text inputs
    form_inputs.forEach((input) => {
        form[input].value = ''
    })
}

function createPayload(form) {
    // Setup payload for each page

    console.log(form_inputs)

    const payload = {
        date: (new Date()).toString()
    }

    form_inputs.forEach(input => {
        payload[input] = form[input].value
    })

    console.log(payload)

    return payload
}
// serializer for the form data
function serialize(form) {

    // Setup our serialized data
    const serialized = [];

    // Loop through each field in the form
    for (let i = 0; i < form.elements.length; i++) {

        const field = form.elements[i];

        // Don't serialize fields without a name, submits, buttons, file and reset inputs, and disabled fields
        if (!field.name || field.disabled || field.type === 'file' || field.type === 'reset' || field.type === 'submit' || field.type === 'button') continue;

        // If a multi-select, get all selections
        if (field.type === 'select-multiple') {
            for (let n = 0; n < field.options.length; n++) {
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

}

function wrapDiv(el) {
    let wrapper = document.createElement('div')
    wrapper.classList.add('modal-image')
    el.parentNode.insertBefore(wrapper, el);
    wrapper.appendChild(el);
}



const Payload = { "date": "Mon Sep 18 2023 15:56:09 GMT-0400 (Eastern Daylight Time)", "first": "Theodore", "last": "Langston", "email": "", "emailics": "tlangston@mac.com", "phone": "203-002-0393", "residence": "owner" }