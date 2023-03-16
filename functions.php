<?php 
function my_assets() { // maak een functie

    // functie voor het plaatsen van css.
    wp_enqueue_style( 'theme-style', get_stylesheet_uri() );
    // get_stylesheet_uri is de default locatie van je style.css

    // functie voor het plaatsen van javascript.
    wp_deregister_script('jquery'); // verwijder eventuele jQuery versies geplaatst door plugins
    wp_enqueue_script('jquery', 'https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js','','3.3.1',true);
    wp_enqueue_script('theme-scripts', get_template_directory_uri() . '/js/scripts.min.js','',null,true);
    // get_template_directory_uri is de default locatie van je thema's root
    // in de voorlaatste parameter kun je een versienummer weergeven van het script. Met 'null' geef je aan dat er geen versienummer hoef te staan.
    // de laatste parameter 'true' plaats scripts in de footer.

}

add_action( 'wp_enqueue_scripts', 'my_assets' ); // voer de 'my_assets' functie uit

add_theme_support( 'post-thumbnails' ); // in je functions houden vanwege gebruik _underscore
?>