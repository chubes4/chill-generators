jQuery(document).ready(function($) {
    // Dynamically generate the email capture pop-up HTML
    $('body').append('<div id="email-capture-popup" style="display:none;">' +
        '<h3>Subscribe to Vote</h3>' +
        '<input type="email" id="email-input" placeholder="Enter your email">' +
        '<button id="submit-email">Submit</button>' +
        '</div>');

    var userEmail = ''; // To store the user's email

    $('.vote-button').on('click', function() {
        if (!userEmail) {
            // Show email capture pop-up
            $('#email-capture-popup').show();
        } else {
            // Existing code for voting
            handleVote(userEmail);
        }
    });

    $('#submit-email').on('click', function() {
        userEmail = $('#email-input').val();
        $('#email-capture-popup').hide();
        handleVote(userEmail);
    });

    function handleVote(emailAddress) {
        var blockId = $('.vote-button').closest('.image-voting-block').data('block-id');
        $.ajax({
            url: chillVoting.ajaxurl,
            type: 'POST',
            data: {
                action: 'handle_image_vote',
                block_id: blockId,
                email_address: emailAddress
            },
            success: function(response) {
                if (response.success) {
                    alert(response.data.message);
                } else {
                    alert('An error occurred.');
                }
            }
        });
    }
});
