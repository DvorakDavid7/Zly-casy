<?php

require_once "DatabaseHandler.php";
require_once "Models/CustomerModel.php";


class CustomersTable extends DatabaseHandler
{
    public function __construct()
    {
        parent::__construct();
    }

}