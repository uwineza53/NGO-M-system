<?php
    namespace config;

    use PDO;

    /**
     * ### Database connection configuration object
     * This object consist of connect method that will return a PDO instance connecting us to defined database server.
     * 
     * @author &nbsp; UWINEZA Joel &nbsp; <joeluwineza35@gmail.com, +250 783 4786 65> , Kigali - Rwanda
     */
    class Database {

        /**
         * &nbsp;creates a PDO instance representing a connection to a database
         */
        public static function connect():PDO {
            $server = parse_ini_file(__DIR__ . '/config.ini', true);
            
            $dsn = "mysql:host={$server['database']['hostname']};dbname={$server['database']['dbname']};charset={$server['database']['charset']}";

            return new PDO($dsn, $server['database']['username'], $server['database']['password'], [
                PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION,
                PDO::ATTR_EMULATE_PREPARES => false,
                PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC
            ]);
        }
    }