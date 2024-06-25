<!DOCTYPE html>
    <html lang="es">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Creacion de producto</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous">
    </head>
    <body>
    <?php include './views/layouts/navbar.php' ?>
    <?php print_r($producto['id']); ?>
    <div class="container mt-3" style="margin-bottom: 3rem;">
        <h2 class="text-center">Editar un producto</h2>
    <div class="d-flex justify-content-center m-4">
        <section class="card bg-warning col-lg-8 col-md-6 p-3">
        <form class="form-control" action="./index.php?action=update&id=<?php echo $producto['id']?>" method="POST">
            <label class="form-label">Nombre:</label><br/>
            <input type="text" id="name" name="name" class="form-control" value="<?php echo $producto['name']?>" /><br/>
            <label class="form-label">Precio:</label><br/>
            <input type="text" id="price" name="price" class="form-control" value="<?php echo $producto['price']?>" /><br/>
            <label class="form-label">Descripcion:</label><br/>
            <input type="text" id="description" name="description" class="form-control" value="<?php echo $producto['description']?>" /><br/>
            <label class="form-label">Cantidad:</label><br/>
            <input type="text" id="quantity" name="quantity" class="form-control" value="<?php echo $producto['quantity']?>" /><br/>
            <label class="form-label">Categoria:</label><br/>
            <input type="text" id="category" name="category" class="form-control" value="<?php echo $producto['category']?>" /><br/>
            <button type="submit" class="btn btn-success">Actualizar</button>
        </form>
        </section>
        </div></div>
        <?php include './views/layouts/footer.php' ?>
    </body>
</html>