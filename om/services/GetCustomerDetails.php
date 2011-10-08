<?php
	
	$cid=$_GET['cid'];
	if(!$cid) $cid=1;
	$details=array("customerID"=>$cid,"customerName"=>"Demo Name of $cid","customerAddress"=>"Demo Address of $cid","totalOrders"=>rand(1,10));
	echo json_encode(array("data"=>$details));
?>

