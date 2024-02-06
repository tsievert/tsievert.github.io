<?php
include('functions.php');

?>
<!DOCTYPE html>
<html lang="de">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="icon" type="image/x-icon" href="/assets/img/favicon.ico">
    <link rel="stylesheet" type="text/css" href="assets/css/style.css">
    <title>
        <?php

        foreach ($navigation as $nav) {
            if (is_page($nav)) {
                echo $nav[1];
                echo ' | ';
            }
        }
        ?>Thorbjörn Sievert</title>
</head>
<header>

<?php

if (!empty($navigation)) {

    //echo basename($_SERVER['PHP_SELF']);


    echo '<ul class="mainnav">';

    echo '<li class="close_hamburger"></li>';
    foreach ($navigation as $nav) {
        echo '<li';
        if (is_page($nav)) {
            echo ' class="active"';
        }
        echo '>';
        echo '<a href="' . $nav[0] . '">';
        echo $nav[1];
        echo '</a>';
        echo '</li>';
    }

    echo '<label class="switch" name="darkmode switch">';
    echo '<input type="checkbox" name="darkmode switch" id="darkmodeSwitch">';
    echo '<span class="slider round"></span>';
echo '</label>';
    echo '</ul>';

}
?>

<div id="hamburger" class="hamburger"></div>
<aside id="sidenav" class="hidden">
<!-- <label class="switch">
    <input type="checkbox" id="darkmodeSwitch">
    <span class="slider round"></span>
</label> -->

<?php
/*
if (!empty($navigation)) {

//echo basename($_SERVER['PHP_SELF']);

echo '<ul class="sidenav">';
foreach ($navigation as $nav) {
    echo '<li';
    if (is_page($nav)) {
        echo ' class="active"';
    }
    echo '>';
    echo '<a href="' . $nav[0] . '">';
    echo $nav[1];
    echo '</a>';
    echo '</li>';
}

echo '</ul>';
} */
?>
</aside>

</header>

<body>

   

    <div class="contentarea">

        <?php 
