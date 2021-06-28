<?php

require 'draw.php';

$draw = new Draw(32);

foreach ($draw->get() as $round => $draw) {
    echo sprintf("Round %s:\n", $round);
    foreach ($draw as $seed => $opponent) {
        echo sprintf("%d - %d\n", $seed, $opponent);
    }
}