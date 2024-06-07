<?php 

// Que es un algoritmo?
// Una instruccion o varias instrucciones
// Una serie de pasos logicos para resolver un problema
// NO tienen que ser ambiguos y tienen que ser finitos


//BubbleSort
//Comparaciones de 2 en 2


function bubbleSort($arr){
    $length = count($arr); //Saber el largo

    if($length <= 1) return "Que gracioso sos"; //Validamos si ejecutar o no
    for($i = 0; $i < $length; $i++){ //Recorrer varias veces el array

        for($j = 0; $j < $length-1; $j++){ //Recorre para comparar por cada item 
            if($arr[$j] < $arr[$j+1]){ //Comparacion y forma de ordenamiento
            //Intercambio de valores
                $temp = $arr[$j];
                $arr[$j]= $arr[$j+1];
                $arr[$j+1]=$temp;
            }
        }
    }
    return $arr;
}

print_r(bubbleSort([8,10,5,7,21,1,15]));



// Insertion Sort


function insertionSort($arr){

    $longura = count($arr);

    if($longura <= 1) return "Que gracioso sos"; //Validamos si ejecutar o no

    for($i=1;$i < $longura; $i++){ //Recorrer todas las posiciones del array
        $key = $arr[$i]; //Variable auxiliar para guardar el valor de array en posicion I
        $j = $i -1; //Guardamos en J el indice anterior a I 

        while($j >=0 && $arr[$j]>$key){ //Mover los elementos mayores
            $arr[$j+1]= $arr[$j]; //Reemplazamos la posicion siguiente por el valor en posicion j
            $j = $j - 1; //Disminuir J para seguir comparando
        }
        $arr[$j+1] = $key; //Insertar la key en la posicion correcta
    }
    return $arr;
}


$arraycito = [12,11,13,5,6];
$res = insertionSort($arraycito);
print_r($res);


function mergeSort($arr){
    $length = count($arr); //Saber el largo

    if($length <= 1) return $arr;

    $mid = $length/2; // Sacamos la mitad, calcular la mitad del array

    //Dividimos el array a la mitad
    $left = mergeSort(array_slice($arr,0,$mid));
    $right= mergeSort(array_slice($arr,$mid));

    //Fusionamos las dos mitades
    return merge($left,$right);
}

function merge($left,$right){
    $result = []; //Array auxiliar para retornar el resultado

   //Fusionar dos arrays mientras ambos tengan datos
    while(count($left) > 0 && count($right) > 0){  
        if($left[0] <= $right[0]){ //Comparacion determinar como se ordena
            array_push($result,array_shift($left)); //Agregamos a el resultado la izquierda
        }else{
            array_push($result,array_shift($right));//Agregamos a el resultado la derecha
        }
    }

    while(count($left) > 0){ //Agregar los elementos restantes de la izquierda
        array_push($result,array_shift($left));
    }

    while(count($right) > 0){ //Agregar los elementos restantes de la derecha
        array_push($result,array_shift($right));
    }

    return $result; //Retornamos el array ordenado
}

function productoTripleMayor($nums) {
    $nums = insertionSort($nums);
    $n = count($nums);
    $max1 = $nums[$n - 1] * $nums[$n - 2] * $nums[$n - 3];
    $max2 = $nums[0] * $nums[1] * $nums[$n - 1];
    return max($max1, $max2);
}
$nums = [1, 2, 3, 4];
$resultado = productoTripleMayor($nums);
echo $resultado;

?>