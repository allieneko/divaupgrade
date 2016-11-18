$( document ).ready(function() {

    $('form').submit(function(event) {
        event.preventDefault();

        $.ajax({
            url: "http://formspree.io/betsie@gmail.com.com",
            method: "POST",
            data: {
                name: $('#js-name').val(),
                email: $('#js-email').val(),
                option: $('#js-survey').val(),
                message: $('#js-message').val()
            },
            dataType: "json"

        }).error(function(jqXHR, status, error){
            alert('Uh oh, something went wrong. Please try again.');
        }). success(function(data, status, jqXHR) {
            alert('Thank you for your message. We will get back to you soon.');
            $('form').find('#js-name,#js-email,#js-survey, #js-message').val('');
        });
    });

});
