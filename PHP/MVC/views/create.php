<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Creacion de producto</title>
    </head>
    <body>
        <h2>Crear un producto</h2>
        <form action="./index.php?action=create" method="POST">
            <label>Nombre:</label><br/>
            <input type="text" id="name" name="name"/><br/>
            <label>Precio:</label><br/>
            <input type="text" id="price" name="price"/><br/>
            <label>Descripcion:</label><br/>
            <input type="text" id="description" name="description"/><br/>
            <label>Cantidad:</label><br/>
            <input type="text" id="quantity" name="quantity"/><br/>
            <label>Categoria:</label><br/>
            <input type="text" id="category" name="category"/><br/>
            <button type="submit">Crear</button>
        </form>

    </body>
</html>