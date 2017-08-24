<?php
	$url = "localhost";
	$user = "root";
	$pswd = "root";
	$db = "quiz";

	$con = mysqli_connect($url,$user,$pswd,$db);
	if(!$con)
	{
		die( "Connection failed: ".mysqli_connect_error());
	}
