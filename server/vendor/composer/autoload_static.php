<?php

// autoload_static.php @generated by Composer

namespace Composer\Autoload;

class ComposerStaticInit8b69ce939579d6341ee17f63d9eadebc
{
    public static $prefixLengthsPsr4 = array (
        'N' => 
        array (
            'Nezajoel\\Server\\' => 16,
        ),
    );

    public static $prefixDirsPsr4 = array (
        'Nezajoel\\Server\\' => 
        array (
            0 => __DIR__ . '/../..' . '/src',
        ),
    );

    public static $classMap = array (
        'Composer\\InstalledVersions' => __DIR__ . '/..' . '/composer/InstalledVersions.php',
    );

    public static function getInitializer(ClassLoader $loader)
    {
        return \Closure::bind(function () use ($loader) {
            $loader->prefixLengthsPsr4 = ComposerStaticInit8b69ce939579d6341ee17f63d9eadebc::$prefixLengthsPsr4;
            $loader->prefixDirsPsr4 = ComposerStaticInit8b69ce939579d6341ee17f63d9eadebc::$prefixDirsPsr4;
            $loader->classMap = ComposerStaticInit8b69ce939579d6341ee17f63d9eadebc::$classMap;

        }, null, ClassLoader::class);
    }
}
