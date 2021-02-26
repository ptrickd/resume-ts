/***********EmailJS**************/
(function () {
    // https://dashboard.emailjs.com/admin/integration
    emailjs.init('user_4PbAdNkZ2FVzqZnxKfavh');
})();
window.onload = function () {
    function checkEmail(email) {
        const regex = /\w+[@][a-z]+[.][a-z]+/;
        if (email.search(regex) === 0) {
            return true;
        }
        return false;
    }
    document.getElementById('commentForm').addEventListener('submit', function (event) {
        event.preventDefault();
        // generate a five digit number for the contact_number variable
        this.contact_number.value = Math.random() * 100000 | 0;
        // these IDs from the previous steps
        emailjs.sendForm('service_fks03gi', 'template_ucv4um9', this)
            .then(function (response) {
                console.log('SUCCESS!', response.status, response.text);
            }, function (error) {
                console.log('FAILED...', error);
            });
        const nameValue = $('#name').val();
        const emailValue = $('#email').val();
        const commentValue = $('#commentBox').val();
        let check = true;

        if (!nameValue) {
            $('#name').addClass('needed');
            $('#labelName').addClass('needed');
            check = false;
        } else {
            $('#name').removeClass('needed');
            $('#labelName').removeClass('needed');

        } if (!emailValue) {
            $('#email').addClass('needed');
            $('#labelEmail').addClass('needed');
            if (check) {
                check = false;
            }
        } else {
            $('#email').removeClass('needed');
            $('#labelEmail').removeClass('needed');
        }
        if (!commentValue) {

            $('#commentBox').addClass('needed');
            $('#labelCommentBox').addClass('needed');
            if (check) {
                check = false;
            }
        } else {
            $('#commentBox').removeClass('needed');
            $('#labelCommentBox').removeClass('needed');
        }
        let message = '';
        if (!check) {
            message = '<h4>You need to fill all the fields.</h4>';

        } else if (!checkEmail(emailValue)) {
            message = '<h4>Need a valid email address</h4>';

        } else {
            message = '<h4>Thanks for your comments.</h4>';
            $('#name').val('');
            $('#email').val('');
            $('#commentBox').val('');


        };
        $('#answerBtnSend').html(message);
        $('#commentModal').modal('show');
    })



};


/*************JQuery*************/
$(function () {

    /************************media query ***************/
    function checkMedia() {
        const mediaQueryList = window.matchMedia('(max-width: 600px)');

        if (mediaQueryList.matches) {
            /* the viewport is 600 pixels wide or less */
            // $('#side-bar').addClass('align-items-center')
            $('#col2').removeClass('col-2')
            $('#col10').removeClass('col-10')
            $('#side-int-link').remove()
        }
    };
    $('body').ready(checkMedia());
    $(window).resize(checkMedia());

    //****************** *************************/
    $('.btn').popover({
        container: 'body',
        trigger: "hover"
    })
    $('.nav-link').popover({
        container: 'body',
        trigger: "hover"
    })
    /********code slow down scrolling**********/
    $(".btn-lnk").on('click', function (event) {
        // console.log(this.css())
        if (this.hash !== "") {
            // Prevent default anchor click behavior
            event.preventDefault();
            // Store hash
            var hash = this.hash;
            // Using jQuery's animate() method to add smooth page scroll
            // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 800, function () {
                // Add hash (#) to URL when done scrolling (default click behavior)
                window.location.hash = hash;
            });
        } // End if
    });
    /********clean form onclick reset button**********/
    $('#btn-reset').on('click', function (event) {
        event.preventDefault();
        $('#name').val('');
        $('#email').val('');
        $('#commentBox').val('');
        $('#name').removeClass('needed');
        $('#labelName').removeClass('needed');
        $('#email').removeClass('needed');
        $('#labelEmail').removeClass('needed');
        $('#commentBox').removeClass('needed');
        $('#labelCommentBox').removeClass('needed');
    });

    // $('#btn-send').on('click', function (event) {

    $('.project-lnk').on('click', function (event) {
        event.preventDefault();

        const contentToReturn = $(this).parentsUntil('#projects').clone();
        contentToReturn.removeClass('row col-md-4');
        contentToReturn.find('.project-lnk').addClass('hide');
        contentToReturn.children('ul').removeClass('hide');


        $('#modalPlaceholder').html(contentToReturn);

    });




})