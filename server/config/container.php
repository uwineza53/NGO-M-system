<?php
    namespace config;

    /**
     * ### A user-defined constructor dependency injection class
     * * This Class provides a class constructor setter and getter methods
     * * setter method is used to invoke the constructor with primitive arguments
     * * getter method is used to invoke the constructor with non-primitive arguments for example when injecting a class with in the constructor.
     * 
     * @author &nbsp; UWINEZA Joel &nbsp; <joeluwineza35@gmail.com, +250 783 4786 65> , Kigali - Rwanda
     */
    class Container {
        private array $registry = [];

        /**
         * ### Container setter method
         * setter method is used to invoke the constructor with primitive arguments
         */
        public function set(string $className, \Closure $value):void {
            $this->registry[$className] = $value;
        }

        /**
         * ### Container getter method
         * getter method is used to invoke the constructor with non-primitive arguments for example when injecting a class with in the constructor.
         */
        public function get(string $className):object {
            if (array_key_exists($className, $this->registry))
                return $this->registry[$className]($this);

            $reflector = new \ReflectionClass($className);
            $constructor = $reflector->getConstructor();

            if ($constructor === NULL)
                return new $className;

            $dependencies = [];
            foreach ($constructor->getParameters() as $params) {
                $type = $params->getType();
                $dependencies[] = $this->get((string) $type);
            }

            return new $className(...$dependencies);
        }
    }