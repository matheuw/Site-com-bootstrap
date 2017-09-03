<?php
    include 'ChromePhp.php';


            $mysqli = new mysqli("localhost","Usuario","Senha","Nome do banco");
            if($mysqli->connect_errno) {
                ChromePhp::log("ERRO de coneção");
            }


        $nome = isset($_POST['nome']) ? $_POST['nome'] : '';
        $email = isset($_POST['email']) ? $_POST['email']:'';
        $assunto = isset($_POST['assunto'])? $_POST['assunto'] :'';
        $mensagem =isset($_POST['mensagem'])? $_POST['mensagem'] :'';
        $pegar_ip = $_SERVER["REMOTE_ADDR"];
        date_default_timezone_set("America/Sao_Paulo");
        $date = date('Y-m-d H:i');
            if(!$mysqli -> query("INSERT INTO logss(nome,email,assunto,mensagem,IP,hora) VALUES ('$nome','$email','$assunto','$mensagem','$pegar_ip','$date')")){
                ChromePhp::log("ERRO na query ".$mysqli -> errno);

            }


















?>