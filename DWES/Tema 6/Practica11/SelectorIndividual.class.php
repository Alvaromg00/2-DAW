<?php
require_once 'ISelectorIndividual.class.php';
abstract class SelectorIndividual implements ISelectorIndividual
{
    protected $label;
    protected $name;
    protected $opciones;
    protected $default;

    public function __construct($label, $name, $opciones, $default=0)
    {
        $this->label=$label;
        $this->name=$name;
        $this->opciones=$opciones;
        $this->default=$default;
    }
    abstract public function generaSelector();

}