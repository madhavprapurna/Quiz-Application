<?php

	require "conn.php";

	$data = json_decode(file_get_contents("php://input"));

	$ques = $data->question;
	$a = $data->a;
	$b = $data->b;
	$c = $data->c;
	$ans = $data->answer;

	$sql = "INSERT INTO questions (question,a,b,c,Answer) VALUES ('$ques','$a','$b','$c','$ans');";
	
		if(mysqli_query($con,$sql)){
			json_encode($ques, $a, $b, $c, $ans);
		}else {
			echo "ERROR ERROR".mysqli_error($con);
		} 
	
?>