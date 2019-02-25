(function() {
    /* NETLIFY IDENTITY LOGIN/LOGOUT */
    if (window.netlifyIdentity) {
        window.netlifyIdentity.on("init", user => {
            if (!user) {
                window.netlifyIdentity.on("login", () => {
                    document.location.href = "/admin/";
                });
            }
        });
    }

    // Open the modal
    netlifyIdentity.open();

    // Get the current user:
    const user = netlifyIdentity.currentUser();

    // Bind to events
    netlifyIdentity.on('init', user => console.log('init', user));
    netlifyIdentity.on('login', user => console.log('login', user));
    netlifyIdentity.on('logout', () => console.log('Logged out'));
    netlifyIdentity.on('error', err => console.error('Error', err));
    netlifyIdentity.on('open', () => console.log('Widget opened'));
    netlifyIdentity.on('close', () => console.log('Widget closed'));

    // Close the modal
    netlifyIdentity.close();

    // Log out the user
    netlifyIdentity.logout();

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