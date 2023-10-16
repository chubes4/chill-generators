<?php
// Function to create the image_votes table
function create_image_votes_table() {
    global $wpdb;
    $table_name = $wpdb->prefix . 'image_votes';

    // Check if the table already exists
    if ($wpdb->get_var("SHOW TABLES LIKE '$table_name'") != $table_name) {
        // Create table
        $charset_collate = $wpdb->get_charset_collate();

        $sql = "CREATE TABLE $table_name (
            id mediumint(9) NOT NULL AUTO_INCREMENT,
            block_id mediumint(9) NOT NULL,
            email_address varchar(255) DEFAULT '' NOT NULL,
            vote_count mediumint(9) DEFAULT 0 NOT NULL,
            PRIMARY KEY  (id)
        ) $charset_collate;";

        require_once(ABSPATH . 'wp-admin/includes/upgrade.php');
        dbDelta($sql);
    }
}

// Hook to run the function when the plugin is activated
register_activation_hook(plugin_dir_path(__DIR__) . 'chill-generators.php', 'create_image_votes_table');

// Future code for handling voting logic, AJAX endpoints, etc. will go here

function handle_image_vote($block_id, $email_address) {
    global $wpdb;
    $table_name = $wpdb->prefix . 'image_votes';

    // Check if the user has already voted on this block
    $existing_vote = $wpdb->get_row("SELECT * FROM $table_name WHERE block_id = $block_id AND email_address = '$email_address'");

    if ($existing_vote) {
        return 'You have already voted on this block.';
    } else {
        // Insert the vote and email address into the table
        $wpdb->insert(
            $table_name,
            array(
                'block_id' => $block_id,
                'email_address' => $email_address,
                'vote_count' => 1
            ),
            array('%d', '%s', '%d')
        );
        return 'Vote recorded successfully.';
    }
}

// AJAX action for handling image votes
function ajax_handle_image_vote() {
    // Get the block ID and email address from the AJAX request
    $block_id = intval($_POST['block_id']);
    $email_address = sanitize_email($_POST['email_address']);

    // Call the handle_image_vote function and get the result
    $result = handle_image_vote($block_id, $email_address);

    // Return the result as a JSON response
    wp_send_json_success(array('message' => $result));
}
add_action('wp_ajax_handle_image_vote', 'ajax_handle_image_vote'); // If user is logged in
add_action('wp_ajax_nopriv_handle_image_vote', 'ajax_handle_image_vote'); // If user is not logged in
