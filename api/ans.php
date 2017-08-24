<?php
	
	require "conn.php";

	$sql = "SELECT Answer FROM questions";

	$result = mysqli_query($con,$sql);

	if(!$result) 
	{
		echo "ERROR".mysqli_error_list();
	};

	$data = array();

	while ($row = mysqli_fetch_assoc($result)) {
		$data[] = $row[Answer];
	}
	
	print json_encode($data);

?>