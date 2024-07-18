<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Practica Blade</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous">
</head>
<body>
    <nav class="bg-success d-flex justify-content-center text-white p-2">
        <h3>CRUD PRACTICA BLADE</h4>
    </nav>

    <!-- CREAMOS UNA NUEVA SECCION CON EL METODO YIELD-->
   @yield('contenido')

    <footer class="bg-secondary fixed-bottom p-2 d-flex justify-content-center">
        <h5 class="text-white">Copyright Pepito Fuentes Since 2035</h5>
    </footer>

</body>
</html>