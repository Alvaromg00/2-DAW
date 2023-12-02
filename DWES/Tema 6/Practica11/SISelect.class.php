<?php
require_once 'SelectorIndividual.class.php';
class SISelect extends SelectorIndividual
{

    public function generaSelector()
    {
        $html="<label>{$this->label}</label>\n";
        $html .="<select name='{$this->name}'>\n";
        foreach($this->opciones as $value => $text){
            $selected=($value==$this->default) ? "selected" : "";
            $html .="<option value='$value' $selected>$text</option>\n";
        }
        $html .="</select>\n";
        return $html;
    }
}