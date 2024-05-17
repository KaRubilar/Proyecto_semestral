$(document).ready(function() {
    $('#contact-form').submit(function(event) {
        event.preventDefault(); // Evita que el formulario se envíe automáticamente

        var name = $('#name').val();
        var email = $('#email').val();
        var message = $('#message').val();
        var error = '';

        if(name.trim() == '') {
            error += $('#nombre').after('<div class="error-message">Por favor ingresa tu nombre.</div>');
        }

        if(email.trim() == '') {
            error += $('#celular').after('<div class="error-message">Por favor ingresa tu direccion de email.</div>');
        }

        if(message.trim() == '') {
            error += $('#mensaje').after('<div class="error-mensaje">Por favor ingresa un mensaje.</div>');

        }

        if(error != '') {
            $('#mensaje-error').html(error);
        } else {
            // Aquí puedes enviar el formulario o realizar otras acciones
            $('#mensaje-error').html('');
            alert('Formulario enviado correctamente.');
        }
    });
});
