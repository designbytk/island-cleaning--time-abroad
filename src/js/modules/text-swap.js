// Text Swap function for the Hero Headline
export default function textSwap() { // Declare a function
    // Globals
    const list = document.querySelector('.insert-list').querySelectorAll('li')
    // Utilizes the <ins> tag as insertion point
    const ins = document.querySelector('ins')
    const rem = ' Cleaning Service'

    for (var i = 0, len = list.length; i < len; i++) {

        (function (i) {
            setTimeout(function () {
                if (i != len - 1) { // Not at the end of the item list * standard Function
                    // Remove 'Cleaning Services' from list item
                    var item = list[i].innerText.replace(rem, '')
                    ins.innerHTML = item
                   
                } else {
                    var item = list[i].innerText.replace(rem, '')
                    ins.innerHTML = item
                    // Re-intialize
                    i = 0;
                    // Run the Function again; loop continuous
                    setTimeout(function () {
                        textSwap()
                    }, 2200)
                }
            }, 1800 * i)
        })(i);


    }
}


