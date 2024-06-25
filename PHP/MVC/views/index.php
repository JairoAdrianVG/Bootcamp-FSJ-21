<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Tiendita MVC</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous">
</head>
<body>
    <?php include './views/layouts/navbar.php' ?>
    <main class="container mt-4">
        <a href="./index.php?action=create" class="btn btn-success">Crear producto</a>
        <table class="table table-striped mt-2">
            <thead>
                <th>ID</th>
                <th>Nombre</th>
                <th>Descripcion</th>
                <th>Precio</th>
                <th>Cantidad</th>
                <th>Categoria</th>
                <th>Acciones</th>
            </thead>
            <tbody>
                <?php foreach($products as $product):?>
                    <tr>
                        <td><?php echo $product['id'] ?></td>
                        <td><?php echo $product['name'] ?></td>
                        <td><?php echo $product['description'] ?></td>
                        <td><?php echo $product['price'] ?></td>
                        <td><?php echo $product['quantity'] ?></td>
                        <td><?php echo $product['category'] ?></td>
                        <td><a href="./index.php?action=update&id=<?php echo $product['id']?>" class="btn btn-warning">Editar</a></td>
                    </tr>
                <?php endforeach;?>
            </tbody>

        </table>
    </main> 
    <?php include './views/layouts/footer.php' ?>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz" crossorigin="anonymous"></script>
</body>
</html>