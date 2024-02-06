<?php

$navigation = array(
    array('/', 'Education'),
    array('/publications', 'Publications'),
    array('/talks-and-posters', 'Talks & Posters'),
    array('/teaching', 'Teaching'),
    array('#contact', 'Contact'),
);


$socialmedia_btns = array(
    array('LinkedIn', './assets/icons/linkedin.svg', 'https://www.linkedin.com/in/thorbj%C3%B6rn-sievert-474b4081'),
    array('X', './assets/icons/twitter.svg', 'https://twitter.com/VolePhD'),
    array('Github', './assets/icons/github.svg', 'https://github.com/tsievert'),
    array('Orcid', './assets/icons/orcid.svg', 'https://orcid.org/0000-0002-4242-3779'),
    array('Google Scholar', './assets/icons/googlescholar.svg', 'https://scholar.google.com/citations?user=8iNLUXoAAAAJ&hl=en'),
    array('Researchgate', './assets/icons/researchgate.svg', 'https://www.researchgate.net/profile/Thorbjoern-Sievert'),
    array('VolePhD', './assets/icons/mastodon_white.svg', 'https://fediscience.org/@volephd'),
    array('Web of Science', './assets/icons/webofscience.svg', 'https://www.webofscience.com/wos/author/record/1014967'),
    array('Semantic Scholar', './assets/icons/semanticscholar_white.svg', 'https://www.semanticscholar.org/author/Thorbj%C3%B6rn-Sievert/47051834'),
);


$profilePicture = './assets/img/profile.jpg';

function is_page($nav)
{

    if ('/' . basename($_SERVER['PHP_SELF']) == $nav[0] . '.php' || (basename($_SERVER['PHP_SELF']) == 'index.php' && $nav[0] == '/')) {
        return true;
    }
}



function divbox($text = 'text', $farbe = '#fff')
{
    echo '<div style="background-color:' . $farbe . '">' . $text . '</div>';
}




function socialmedia($socialmedia_btns){

    if (!empty($socialmedia_btns)) {

        echo '<ul class="socialmedia-btns">';
        foreach ($socialmedia_btns as $socialmedia_btn) {
            echo '<li';
            echo ' class="socialmedia-btn">';
            echo '<a href="' . $socialmedia_btn[2] . '"';
            echo ' target="_blank">';
            echo '<img src="' . $socialmedia_btn[1] . '" alt="' . $socialmedia_btn[0] . '" type="image/svg+xml">';
            echo '</a>';
            echo '</li>';
        }

        echo '</ul>';
    }
}


