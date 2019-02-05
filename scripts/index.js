(function() {
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

    /* SET SVG ICON SIZES */
    /* const desktop = window.matchMedia("(min-width: 992px)");
    const svgs = document.getElementsByTagName('svg');
    if (desktop.matches) {

    }
    else {
        svgs.map
    } */
}());