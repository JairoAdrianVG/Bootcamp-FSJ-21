<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Creacion de producto</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous">
    </head>
    <body>
    <?php include './views/layouts/navbar.php' ?>
    <div class="container mt-3" style="margin-bottom: 3rem;">
        <h2 class="text-center">Crear un producto</h2>
    <div class="d-flex justify-content-center m-4">
        <section class="card bg-success col-lg-8 col-md-6 p-3">
        <form class="form-control" action="./index.php?action=create" method="POST">
            <label class="form-label">Nombre:</label><br/>
            <input type="text" id="name" name="name" class="form-control" /><br/>
            <label class="form-label">Precio:</label><br/>
            <input type="text" id="price" name="price" class="form-control" /><br/>
            <label class="form-label">Descripcion:</label><br/>
            <input type="text" id="description" name="description" class="form-control" /><br/>
            <label class="form-label">Cantidad:</label><br/>
            <input type="text" id="quantity" name="quantity" class="form-control" /><br/>
            <label class="form-label">Categoria:</label><br/>
            <input type="text" id="category" name="category" class="form-control" /><br/>
            <button type="submit" class="btn btn-success">Crear</button>
        </form>
        </section>
        </div></div>
        <?php include './views/layouts/footer.php' ?>
    </body>
</html>