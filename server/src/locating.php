<?php
    namespace src;

    // use config\Database;
    // use config\Serving;

    /**
     * ### Localization
     * A class that handle location listing from Province to village
     *
     * @author &nbsp; UWINEZA Joel &nbsp; <joeluwineza35@gmail.com, +250 783 4786 65> , Kigali - Rwanda
     */
    class Locating {
        /**
         * Locating Constructor
         * @param serve a serving class injected!
         * 
         */
        public function __construct(private \config\Serving $serve, private \config\Database $database) {}

        /**
         * ### Provinces
         * A method that returns list of 5 provinces in Rwanda
         */
        public function getProvinces() {
            try {
                $dbh = $this->database::connect();
                $stmt = $dbh->query("SELECT id value, province label  FROM provinces");
                return $this->serve->encode($stmt->fetchAll(), 'value');
            }  catch (\PDOException $e) {
                // handler
                $this->serve->handleCatch($e);
            }
        }

        /**
         * ### Districts
         * A method that returns list of districts in specified province
         */
        public function getDistricts(string $id):array {
            try {
                $dbh = $this->database::connect();
                $stmt = $dbh->prepare("SELECT id AS value, district AS label FROM districts WHERE province_id = :province");
                $stmt->execute(['province' => $this->serve->decode($id)]);
                return $this->serve->encode($stmt->fetchAll(), 'value');
            } catch (\PDOException $e) {
                // handler
                $this->serve->handleCatch($e);
            }
        }

        /**
         * ### Sectors
         * A method that returns list of districts in specified district
         */
        public function getSectors(string $id):array {
            try {
                $dbh = $this->database::connect();
                $stmt = $dbh->prepare("SELECT id AS value, sector AS label FROM sectors WHERE district_id = :district");
                $stmt->execute(['district' => $this->serve->decode($id)]);
                return $this->serve->encode($stmt->fetchAll(), 'value');
            } catch (\PDOException $e) {
                // handler
                $this->serve->handleCatch($e);
            }
        }

        /**
         * ### Cells
         * A method that returns list of cells in specified district
         */
        public function getCells(string $id):array {
            try {
                $dbh = $this->database::connect();
                $stmt = $dbh->prepare("SELECT id AS value, cell AS label FROM cells WHERE sector_id = :sector");
                $stmt->execute(['sector' => $this->serve->decode($id)]);
                return $this->serve->encode($stmt->fetchAll(), 'value');
            } catch (\PDOException $e) {
                // handler
                $this->serve->handleCatch($e);
            }
        }

        /**
         * ### Cells
         * A method that returns list of cells in specified district
         */
        public function getVillages(string $id):array {
            try {
                $dbh = $this->database::connect();
                $stmt = $dbh->prepare("SELECT id AS value, village AS label FROM villages WHERE cell_id = :cell");
                $stmt->execute(['cell' => $this->serve->decode($id)]);
                return $this->serve->encode($stmt->fetchAll(), 'value');
            } catch (\PDOException $e) {
                // handler
                $this->serve->handleCatch($e);
            }
        }
    }