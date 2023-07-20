<?php
/**
 * Основные параметры WordPress.
 *
 * Скрипт для создания wp-config.php использует этот файл в процессе установки.
 * Необязательно использовать веб-интерфейс, можно скопировать файл в "wp-config.php"
 * и заполнить значения вручную.
 *
 * Этот файл содержит следующие параметры:
 *
 * * Настройки базы данных
 * * Секретные ключи
 * * Префикс таблиц базы данных
 * * ABSPATH
 *
 * @link https://ru.wordpress.org/support/article/editing-wp-config-php/
 *
 * @package WordPress
 */

// ** Параметры базы данных: Эту информацию можно получить у вашего хостинг-провайдера ** //
/** Имя базы данных для WordPress */
define( 'DB_NAME', 'WP' );

/** Имя пользователя базы данных */
define( 'DB_USER', 'root' );

/** Пароль к базе данных */
define( 'DB_PASSWORD', '' );

/** Имя сервера базы данных */
define( 'DB_HOST', 'localhost' );

/** Кодировка базы данных для создания таблиц. */
define( 'DB_CHARSET', 'utf8mb4' );

/** Схема сопоставления. Не меняйте, если не уверены. */
define( 'DB_COLLATE', '' );

/**#@+
 * Уникальные ключи и соли для аутентификации.
 *
 * Смените значение каждой константы на уникальную фразу. Можно сгенерировать их с помощью
 * {@link https://api.wordpress.org/secret-key/1.1/salt/ сервиса ключей на WordPress.org}.
 *
 * Можно изменить их, чтобы сделать существующие файлы cookies недействительными.
 * Пользователям потребуется авторизоваться снова.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         'Am@]TSZ:GlRNxB,;0XsYtA 0ne/FMz!|aV8#jf)|IEi`ljU5B#/McK]mVcX/h]W?' );
define( 'SECURE_AUTH_KEY',  'LekNgt;+e[b/{o7WH30nOPm&CXVPaFUUU.=V.6#cgt;EwxuGZ^#kUzkz}F+xVs-L' );
define( 'LOGGED_IN_KEY',    '>jo,O;c}Khn,LzMi)r``w`@,sCIv.RnG1U(N)gTq .Jk2s,gwNbz!$:h ms0kgAk' );
define( 'NONCE_KEY',        'm|<;r77bU/e]n| 0E%&(0Ds.rxS1bFK!$.XRpjqojv5>TD6IB}J<.lEO]]F3A>Uk' );
define( 'AUTH_SALT',        'vTknFZiUr*3nk:CQ`: Hs#Jx&W0xl7:rY.ih41$^Tn]i^qYpSr-.mZlXeqb[`ek%' );
define( 'SECURE_AUTH_SALT', 'Mdr&*7h7FFuh2Ac`ji>S+8uKrXz@$=F8CR#]tEBRZwqZKDa<!MQblT9ia.41>I0X' );
define( 'LOGGED_IN_SALT',   'V`k+FRG4nCvy sFr|;hM08`|}P``.v6Z:$+(GZR3zOO$ni!gTG<gI^&13veVt@;Q' );
define( 'NONCE_SALT',       'p!OOu[3a1%jvur+<RX.!.1Tx.Q6dw7P<#,+R[c{%_=<e,!%iX6H*4 lF$gY4+*xg' );

/**#@-*/

/**
 * Префикс таблиц в базе данных WordPress.
 *
 * Можно установить несколько сайтов в одну базу данных, если использовать
 * разные префиксы. Пожалуйста, указывайте только цифры, буквы и знак подчеркивания.
 */
$table_prefix = 'wp_';

/**
 * Для разработчиков: Режим отладки WordPress.
 *
 * Измените это значение на true, чтобы включить отображение уведомлений при разработке.
 * Разработчикам плагинов и тем настоятельно рекомендуется использовать WP_DEBUG
 * в своём рабочем окружении.
 *
 * Информацию о других отладочных константах можно найти в документации.
 *
 * @link https://ru.wordpress.org/support/article/debugging-in-wordpress/
 */
define( 'WP_DEBUG', false );

/* Произвольные значения добавляйте между этой строкой и надписью "дальше не редактируем". */



/* Это всё, дальше не редактируем. Успехов! */

/** Абсолютный путь к директории WordPress. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Инициализирует переменные WordPress и подключает файлы. */
require_once ABSPATH . 'wp-settings.php';
