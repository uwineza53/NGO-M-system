<?php
    namespace config;
    
    /**
     * ### Service
     * This object serves different core and basic functionalities
     */
    class Serving {
        public function __construct(private array $config) {}

        /**
         * ### Logger
         * This function handle logging functionality. it write log in any specified log file; a log book.
         */
        private function Logger(string $file, string $message):void {
            $file = fopen(__DIR__."../../resources/logs/".$file, 'a');
            fwrite($file, date("d/m/Y H:i:s") . " - " . $message . "\n");
            fclose($file);
        }

        /**
         * ### Catch Handling
         * This function handles catched issues regarding the environment.
         */
        public function handleCatch(\Exception $e) {
            if ($this->config['env']['server'] === 'Development')
                return header("HTTP/1.1 500 ". $e->getMessage());

            $this->Logger('error.logs.txt', $e->getMessage());
            return header("HTTP/1.1 500 The server runs out of services!");
        }

        /**
         * ### Encoder
         * This function encodes either sensitive part of data or the whole data before sending it to the web server [front-end]. 
         * * if @param (array | string | null) $keys is not set, defaultly set to null means the whole data will be encoded.
         */
        public function encode(array $data, array | string | null $keys = null):array|string {
            if(is_array($keys)) 
                foreach ($data as &$datum)
                    foreach ($keys as $key)
                        $datum[$key] = bin2hex(base64_encode(json_encode($datum[$key])));

            elseif(is_string($keys))
                foreach ($data as &$datum)
                    $datum[$keys] = bin2hex(base64_encode(json_encode($datum[$keys])));

            else
                return bin2hex(base64_encode(json_encode($data)));

            return $data;
        }

        /**
         * ### Decoder
         * This function decodes either sensitive part of data or the whole data coming back to server [back-end]. 
         * * if @param (array | string | null) $keys is not set, defaultly set to null means the whole data will be decoded.
         */
        public function decode(array|string $data, array | string | null $keys = null):array|string {
            if(is_array($keys)) 
                // foreach ($data as &$datum)
                    foreach ($keys as $key)
                        $data[$key] = json_decode(base64_decode(hex2bin($data[$key])));

            elseif(is_string($keys))
                // foreach ($data as &$datum)
                    $data[$keys] = json_decode(base64_decode(hex2bin($data[$keys])));

            else
                return json_decode(base64_decode(hex2bin($data)));

            return $data;
        }
    }