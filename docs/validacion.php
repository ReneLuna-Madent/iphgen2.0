

<?php
require_once('fpdf/fpdf.php');
require_once('fpdi/src/autoload.php');
require("conexion.php");

use \setasign\Fpdi\Fpdi;

$pdf = new FPDI();