$(document).ready(function() {
    $('#contact-form').submit(function(event) {
        event.preventDefault(); // Evita que el formulario se envíe automáticamente

        var name = $('#name').val();
        var email = $('#email').val();
        var message = $('#message').val();
        var error = '';

        if(name.trim() == '') {
            error += 'Por favor ingresa tu nombre.<br>';
        }

        if(email.trim() == '') {
            error += 'Por favor ingresa tu email.<br>';
        }

        if(message.trim() == '') {
            error += 'Por favor ingresa tu mensaje.<br>';
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
