<?php
    namespace src;

    use config\Database;

    class User {
        public function __construct(private Database $database) {
        }

        public function register(array $data) {
            
        }

        public function authenticate(string $username, string $password) {

        }

        public function logout() {
            
        }
    }