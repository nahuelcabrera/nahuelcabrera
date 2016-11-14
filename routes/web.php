<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| En este archivo se pueden definir todas las rutas que se manejan
| por su aplicación. Sólo digale a laravel los URL que debe responder
| al uso de un método de cierre o controlador. Construye algo grande!
|Metodos posibles a solicitar: get, post, delete, put, etc.
|
*/

/*CONTROLADOR INDEX*/
Route::get('index', 'IndexController@index' );

/*CONTROLADOR WELCOME DEFAULT FROM LARAVEL*/
Route::get('/', function(){
    return view('welcome');
});
