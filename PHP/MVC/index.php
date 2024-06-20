<?php 
require_once './controllers/ProductController.php';
$controller = new ProductController();

$action = isset($_GET['action']) ? $_GET['action'] : 'read';

switch($action){
    case 'read': 
        $controller->read();
        break;
    case 'create':
        $controller->create();
        break;
    default:
        $controller->read();
        break;
}

?>