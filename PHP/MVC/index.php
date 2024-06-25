<?php 
require_once './controllers/ProductController.php';
$controller = new ProductController();

$action = isset($_GET['action']) ? $_GET['action'] : 'read';
$id = isset($_GET['id']) ? $_GET['id']: null;

switch($action){
    case 'read': 
        $controller->read();
        break;
    case 'create':
        $controller->create();
        break;
    case 'update':
        $controller->update($id);
        break;
    default:
        $controller->read();
        break;
}
?>