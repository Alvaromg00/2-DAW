<?php

interface ISelectorIndividual
{
    public function __construct($label, $name, $opciones, $default);
    public function generaSelector();
}