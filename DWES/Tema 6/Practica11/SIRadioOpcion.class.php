<?php
require_once 'SelectorIndividual.class.php';
class SIRadioOpcion extends SelectorIndividual
{
    public function generaSelector()
    {
        $html="<label>{$this->label}</label>";
        foreach ($this->opciones as $value => $text){
            $checked=($value==$this->default) ? "checked" : "";
            $html .="<input type='radio' name='{$this->name}' value='$value' $checked> $text\n";
        }
        return $html;
    }
}