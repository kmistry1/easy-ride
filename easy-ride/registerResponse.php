<?php 
	include_once 'functions.php';


$dbhost = 'localhost';
$dbname = 'easy_ride';
$dbuser = 'root';
$dbpass = '';
$users_Table = 'users_table';

$connection = mysql_connect($dbhost, $dbuser,$dbpass);
mysql_select_db($dbname, $connection); 

	//Show some error if smth went wrong:
		$errors = array(); 

	/* This code will run if user did submit the form: */
	/* if (!empty($_POST)){ */
 	

	$error = $email = $password = "";
    if (isset($_SESSION['email'])) destroySession(); 

			$email = sanitizeString($_POST['email']);
			$pass = sanitizeString($_POST['password']);
			$first_name = sanitizeString($_POST['first-name']);
			$last_name = sanitizeString($_POST['last-name']);
			$gender = sanitizeString($_POST['gender']);
			$driver_License = sanitizeString($_POST['driver-license-id']);
			$pass = md5($pass);

			 
			$query="INSERT INTO $users_Table VALUES('$first_name',
					'$last_name','$pass','$email','$gender','$driver_License')";

			if (!queryMysql($query))
  				{
  					die('Error: ' . mysql_error());
 				 }
			else{
				echo "Successfully Added 1 record";
			}

			mysql_close($connection);
			
			
				/* die("<h4> Account created</h4> Please Login.<br /><br />"); */
		
	?>