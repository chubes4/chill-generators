jQuery(document).ready(function($) {
  // Rapper name form submission
  $('#rapper-name-form').on('submit', function(event) {
    event.preventDefault();

    var formData = {
      'input': $('input[name="input"]').val(),
      'style': $('select[name="style"]').val(),
      'gender': $('select[name="gender"]').val(),
      'number_of_words': $('select[name="number_of_words"]').val()
    };

    $.ajax({
      type: 'POST',
      url: '/wp-admin/admin-ajax.php',
      data: {
        action: 'rapper_name_generator',
        formData: formData
      },
      success: function(response) {
        console.log(response);
        $('#generated-output').html(response.data);
      }
    });
  });

  // Band name form submission
  $('#band-name-form').on('submit', function(event) {
    event.preventDefault();

    var formData = {
      'input': $('input[name="input"]').val(),
      'genre': $('select[name="genre"]').val(),
      'number_of_words': $('select[name="number_of_words"]').val(),
      'first-the': $('input[name="first-the"]').is(':checked'),
      'and-the': $('input[name="and-the"]').is(':checked')
    };

    $.ajax({
      type: 'POST',
      url: '/wp-admin/admin-ajax.php',
      data: {
        action: 'band_name_generator',
        formData: formData
      },
      success: function(response) {
        console.log(response);
        $('#generated-output').html(response.data);
      }
    });
  });

  // Remove preventDefault on checkbox click
  $('form input[type="checkbox"]').on('click', function(event) {
    // Allow default behavior to toggle checkbox
  });
});