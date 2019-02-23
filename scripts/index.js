'use strict';

/* HIGHLIGHT DAY OF THE WEEK IN SCHEDULE */
let weekday = new Date().getDay();
const weekdays = document.getElementById('weekdays').children;
weekdays.item(weekday).classList.add('buy-color', 'text-light');

/* DISABLE FORM SUBMISSION IF THERE ARE INVALID FIELDS */
window.addEventListener('load', function () {
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    let forms = document.getElementsByClassName('needs-validation');
    // Loop over them and prevent submission
    let validation = Array.prototype.filter.call(forms, function (form) {
        form.addEventListener('submit', function (event) {
            if (form.checkValidity() === false) {
                event.preventDefault();
                event.stopPropagation();
            }
            form.classList.add('was-validated');
        }, false);
    });
}, false);

/* SWITCH CONTENT BETWEEN ENGLISH AND SPANISH */
import Content from "./content.js";

let lang = navigator.language;
let html = document.getElementsByTagName('HTML')[0];
html.setAttribute('lang', lang);

let content = (lang == 'en-US') ? Content["en-US"] : Content.es;
setContent(content);

let langBtn = document.getElementById('lang-btn');
langBtn.innerText = (lang == 'en-US') ? 'To Spanish' : 'To English';
langBtn.addEventListener('click', e => {
    if (html.getAttribute('lang') == 'en-US') {
        langBtn.innerText = 'To English';
        html.setAttribute('lang', 'es');
        setContent(Content.es);
    }
    else {
        langBtn.innerText = 'To Spanish';
        html.setAttribute('lang', 'en-US');
        setContent(Content["en-US"]);
    }
});

function setContent(content) {
    /* SET INNER HTML */
    for (let text in content.text) {
        let el = document.getElementById(text);
        el.innerHTML = content.text[text];
    }

    /* SET PLACEHOLDERS */
    for (let attr in content.attr) {
        let elId = attr.split('-')[0];
        let el = document.getElementById(elId);
        el.setAttribute('placeholder', content.attr[attr]);
    }
}