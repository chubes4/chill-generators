<?php 
/*
 * Plugin Name: Chill Generators
 * Description: A plugin to generate various responses based on user input
 * Version: 2.0
 * Author: Chris Huber
 * Author URI: https://extrachill.com
 */


// Add generator files here

require_once plugin_dir_path(__FILE__) . 'generators/rapper-name-generator.php';
require_once plugin_dir_path(__FILE__) . 'generators/band-name-generator.php';

// add shortcodes

add_shortcode('rapper_name_generator', 'rapper_name_generator_ajax_handler');
add_shortcode('band_name_generator', 'band_name_generator_ajax_handler');

// Enqueue the AJAX script
function chill_generators_enqueue_scripts() {
    wp_enqueue_script( 'chill-generators', plugins_url( 'chill-generators.js', __FILE__ ), array( 'jquery' ), '1.0', true );
    wp_localize_script( 'chill-generators', 'chillGenerators', array(
        'ajaxurl' => admin_url( 'admin-ajax.php' ),
    ) );
}
add_action( 'wp_enqueue_scripts', 'chill_generators_enqueue_scripts' );


?>