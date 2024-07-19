<?php
    // TODO: API headers
    header("Access-Control-Allow-Origin: *");
    header("Content-Type: application/json; charset=UTF-8");
    header("Access-Control-Allow-Methods: OPTIONS,GET,POST,PUT,DELETE");

    // TODO: Auto-loading
    require_once __DIR__ . '/../vendor/autoload.php';

    // TODO: Error reporting
    $config = parse_ini_file(__DIR__ . '/../config/config.ini', true);
    if ($config['env']['server'] === 'Production') error_reporting(0);

    // TODO: Routing
    $route = parse_url($_SERVER['REQUEST_URI'])['path'];

    // TODO: Instantiating DI container
    use config\Container;
    $container = new Container;

    $container->set(config\Serving::class, function () {
        return new config\Serving($GLOBALS['config']);
    });
    
    // TODO: Request Router
    if ($_SERVER['REQUEST_METHOD'] === 'GET') {
        @parse_str(parse_url($_SERVER['REQUEST_URI'])['query'], $params);

        switch($route) {
            case '/provinces':
                $location = $container->get(src\Locating::class);
                print_r(json_encode($location->getProvinces()));
                break;
            case '/districts':
                $location = $container->get(src\Locating::class);
                print_r(json_encode($location->getDistricts($params['province'])));
                break;
            case '/sectors':
                $location = $container->get(src\Locating::class);
                print_r(json_encode($location->getSectors($params['district'])));
                break;
            case '/cells':
                $location = $container->get(src\Locating::class);
                print_r(json_encode($location->getCells($params['sector'])));
                break;
            case '/villages':
                $location = $container->get(src\Locating::class);
                print_r(json_encode($location->getVillages($params['cell'])));
                break;
            default:
                header("HTTP/1.1 408 Route {$route} Not Found");
        }
    } else {
        $input = json_decode(file_get_contents("php://input"));

        switch($route) {
            case '/register-member':
                print_r($input);

                break;
            case '/description':
                print_r([]);
                break;
            default:
                header("HTTP/1.1 404 Not Found");
        }
    }