<?php 
/*
 * Plugin Name: Chill Generators
 * Description: A plugin to generate various responses based on user input
 * Version: 3.0
 * Author: Chris Huber
 * Author URI: https://extrachill.com
 */

// Add module files here
require_once plugin_dir_path(__FILE__) . 'modules/generators/rapper-name-generator.php';
require_once plugin_dir_path(__FILE__) . 'modules/generators/band-name-generator.php';
require_once plugin_dir_path(__FILE__) . 'modules/blocks/image-voting-block/image-voting-block.php';

// Add shortcodes
add_shortcode('rapper_name_generator', 'rapper_name_generator_ajax_handler');
add_shortcode('band_name_generator', 'band_name_generator_ajax_handler');

// Enqueue the AJAX script
// Enqueue the AJAX script
function chill_generators_enqueue_scripts() {
    $plugin_url = plugin_dir_url(__FILE__);

    wp_enqueue_script( 'chill-generators', $plugin_url . 'js/chill-generators.js', array( 'jquery' ), '1.0', true );
    wp_enqueue_script( 'chill-voting', $plugin_url . 'js/chill-voting.js', array( 'jquery' ), '1.0', true );

    wp_localize_script( 'chill-generators', 'chillGenerators', array(
        'ajaxurl' => admin_url( 'admin-ajax.php' ),     
    ) );

    wp_localize_script( 'chill-voting', 'chillVoting', array(
        'ajaxurl' => admin_url( 'admin-ajax.php' ),
    ) );
}

add_action( 'wp_enqueue_scripts', 'chill_generators_enqueue_scripts' );

add_action( 'wp_enqueue_scripts', 'chill_generators_enqueue_scripts' );



?>
