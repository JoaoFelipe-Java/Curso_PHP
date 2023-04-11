<?php
// Define a porta em que o servidor web será executado
$port = 8000;

// Define o comando para iniciar o servidor web embutido
$command = "php -S localhost:{$port}";

// Inicia o servidor web embutido
exec($command);

// Exibe uma mensagem de confirmação
echo "O servidor web embutido foi iniciado em localhost:{$port}";
echo "Ola mundo";
?>
