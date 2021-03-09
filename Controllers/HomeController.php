<?php

require_once "Controllers/Controller.php";
require_once "Database/CustomersTable.php";
require_once "core/Request.php";


class HomeController extends Controller
{

    public function home(Request $request)
    {
        self::renderView("index.html");
    }

}
