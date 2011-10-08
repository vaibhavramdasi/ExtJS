<?php
	
	
	$orders[0]=array("orderID"=>"1","orderDate"=>"10/11/2010","customerID"=>"4","amount"=>"2000");
	$orders[1]=array("orderID"=>"2","orderDate"=>"11/11/2010","customerID"=>"8","amount"=>"6000");
	$orders[2]=array("orderID"=>"3","orderDate"=>"11/11/2010","customerID"=>"9","amount"=>"2000");
	$orders[3]=array("orderID"=>"4","orderDate"=>"12/11/2010","customerID"=>"7","amount"=>"6400");
	$orders[4]=array("orderID"=>"5","orderDate"=>"12/11/2010","customerID"=>"34","amount"=>"67000");
	$orders[5]=array("orderID"=>"6","orderDate"=>"13/11/2010","customerID"=>"23","amount"=>"2600");
	$orders[6]=array("orderID"=>"7","orderDate"=>"13/11/2010","customerID"=>"4","amount"=>"2060");
	$orders[7]=array("orderID"=>"8","orderDate"=>"14/11/2010","customerID"=>"6","amount"=>"7000");
	$orders[8]=array("orderID"=>"9","orderDate"=>"16/11/2010","customerID"=>"89","amount"=>"8000");
	$orders[9]=array("orderID"=>"10","orderDate"=>"1/1/2011","customerID"=>"2","amount"=>"22000");
	$encoded_object = json_encode(array("d"=>$orders));	

	echo $encoded_object;
?>
