<?php
    namespace config;

    /**
     * #### User-defined class to log errors and activities
     ** * This class has constructor that will receive the message to log
     ** * The file into which the log will be saved in is defined within each function you may call.
     */
    class Logger {

        public function __construct(private $message) { }

        private function Log($file) {
            $file = fopen(__DIR__."../../resources/logs/".$file, 'a');
            fwrite($file, date("d/m/Y H:i:s") . " - " . $this->message . "\n");
            fclose($file);
        }

        public function LogError() {
            $env = require __DIR__.'/env.php';

            if ($env['server'] !== 'Production')
                $this->Log('error.logs.txt', $this->message);
        }
    }