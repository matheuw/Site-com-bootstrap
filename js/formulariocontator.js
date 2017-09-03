
    $('#formualario-contator').submit(function (e) {
    e.preventDefault();

    if ($('#enviar').val() == 'Enviando...'){
            return(false);
        }

    $('#enviar').val('Enviando...');

    if($('#mensagem').val() != null &&  $('#nome').val() != null && $('#email').val() != null &&  $('#assunto').val() != null && $('#assunto').val() != null &&  $('#mensagem').val() != null){
        var nome = $('#nome').val();
        var email = $('#email').val();
        var assunto =  $('#assunto').val();
        var mensagem = $('#mensagem').val();
        var metodo = $('#metodo').val();

    $.ajax({
        url:'formulariocontator.php',
        type: 'POST',
        dataType:'html',
        data: {
            'metodo' :metodo,
            'nome' : nome,
            'email' :email ,
            'assunto' :assunto,
            'mensagem' : mensagem

        },
        success(){

            $('#sucesso').modal('show');

            $('#fecha').on('click',function () {
                $('#contatarandroid').modal('hide');
            });

            $('#enviar').val('Enviar');
            $('#nome').val('');
            $('#email').val('');
            $('#assunto').val('');
            $('#mensagem').val('');


        },

        error() {
           alert("erro ");
            $('#enviar').val('Enviar');
          document.getElementById("fecha").onclick(true);

        }

    });
    }else {
        alert("não recebeu nada");
    }

});
    $('#formualario-contatorweb').submit(function (e) {
        e.preventDefault();

        if ($('#enviarweb').val() == 'Enviando...'){
            return(false);
        }

        $('#enviarweb').val('Enviando...');

        if($('#mensagemweb').val() != null &&  $('#nomeweb').val() != null && $('#emailweb').val() != null &&  $('#assuntoweb').val() != null &&  $('#mensagemweb').val() != null){
            var nome = $('#nomeweb').val();
            var email = $('#emailweb').val();
            var assunto =  $('#assuntoweb').val();
            var mensagem = $('#mensagemweb').val();
            var metodo = $('#metodoweb').val();

            $.ajax({
                url:'formulariocontator.php',
                type: 'POST',
                dataType:'html',
                data: {
                    'metodo' :metodo,
                    'nome' : nome,
                    'email' :email ,
                    'assunto' :assunto,
                    'mensagem' : mensagem

                },
                success(){

                    $('#sucesso').modal('show');

                    $('#fecha').on('click',function () {
                        $('#contatarweb').modal('hide');
                    });

                    $('#enviarweb').val('Enviar');
                    $('#nomeweb').val('');
                    $('#emailweb').val('');
                    $('#assuntoweb').val('');
                    $('#mensagemweb').val('');


                },

                error() {
                    alert("erro ");
                    $('#enviarweb').val('Enviar');
                    document.getElementById("fecha").onclick(true);

                }

            });
        }else {
            alert("não recebeu nada");
        }

    });
    $('#formualario-contatordesktop').submit(function (e) {
        e.preventDefault();

        if ($('#enviar').val() == 'Enviando...'){
            return(false);
        }

        $('#enviar').val('Enviando...');

        if($('#mensagemdesktop').val() != null &&  $('#nomedesktop').val() != null && $('#emaildesktop').val() != null &&  $('#assuntodesktop').val() != null &&  $('#mensagemdesktop').val() != null){
            var nome = $('#nomedesktop').val();
            var email = $('#emaildesktop').val();
            var assunto =  $('#assuntodesktop').val();
            var mensagem = $('#mensagemdesktop').val();
            var metodo = $('#metododesktop').val();

            $.ajax({
                url:'formulariocontator.php',
                type: 'POST',
                dataType:'html',
                data: {
                    'metodo' :metodo,
                    'nome' : nome,
                    'email' :email ,
                    'assunto' :assunto,
                    'mensagem' : mensagem

                },
                success(){

                    $('#sucesso').modal('show');

                    $('#fecha').on('click',function () {
                        $('#contatardesktop').modal('hide');
                    });

                    $('#enviardesktop').val('Enviar');
                    $('#nomedesktop').val('');
                    $('#emaildesktop').val('');
                    $('#assuntodesktop').val('');
                    $('#mensagemdesktop').val('');


                },

                error() {

                    $('#enviardesktop').val('Enviar');
                    document.getElementById("fecha").onclick(true);

                }

            });
        }else {
            alert("não recebeu nada");
        }

    });
    $('#formulario-contator-principal').submit(function (e) {
        e.preventDefault();

        if ($('#enviar').val() == 'Enviando...'){
            return(false);
        }

        $('#enviar').val('Enviando...');

        if($('#mensagemprincipal').val() != null &&  $('#nomeprincipal').val() != null && $('#emailprincipal').val() != null &&  $('#assuntoprincipal').val() != null &&  $('#mensagemprincipal').val() != null){
            var nome = $('#nomeprincipal').val();
            var email = $('#emailprincipal').val();
            var assunto =  $('#assuntoprincipal').val();
            var mensagem = $('#mensagemprincipal').val();
            var metodo = $('#metodo').val();

            $.ajax({
                url:'formulariocontator.php',
                type: 'POST',
                dataType:'html',
                data: {
                    'metodo' :metodo,
                    'nome' : nome,
                    'email' :email ,
                    'assunto' :assunto,
                    'mensagem' : mensagem

                },
                success(){

                    $('#sucesso').modal('show');
                    $('#enviarprincipal').val('Enviar');
                    $('#nomeprincipal').val('');
                    $('#emailprincipal').val('');
                    $('#assuntoprincipal').val('');
                    $('#mensagemprincipal').val('');


                },

                error() {

                    $('#enviardesktop').val('Enviar');
                    document.getElementById("fecha").onclick(true);

                }

            });
        }else {
            alert("não recebeu nada");
        }

    });


