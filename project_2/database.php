<?php

/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

/**
 * Description of database
 *
 * @author ahmedm
 */

class event{
    public $type;
    public $date;
    public $btn;
    public $target;
    public function __construct($type,$date,$btn,$target) {
        $this->type = $type;
        $this->date = $date;
        $this->btn = $btn;
        $this->target = $target;
    }
}
class database {
    //put your code here
    private $conn;
    public function __construct() {
        try{
            $this->conn = new PDO("mysql:host=localhost;dbname=p2", "root", '');
            // set the PDO error mode to exception
            $this->conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
            
        } catch (PDOException $ex) {
            return ["errors" => "ERROR: ".$ex->getMessage()];
        }
    }
    public function InsertRow(event $event){
        $sql = "INSERT INTO local (action, date, type,target)
        VALUES ('".$event->btn."', '".$event->date."', '".$event->type."', " . $event->target. ")";
        // use exec() because no results are returned
        $this->conn->exec($sql);
        return array('data'=> "New record created successfully");
    }

    /**
     * @return PDO data
     */
    public function getAllRecords()
    {

        $stmt = $this->conn->prepare("SELECT * FROM local ");
        $stmt->execute();

        // set the resulting array to associative
        $result = $stmt->setFetchMode(PDO::FETCH_ASSOC);
        return $stmt->fetchAll();
    }
}
