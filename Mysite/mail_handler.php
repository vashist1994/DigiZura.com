<?php 
if(isset($_POST['submit'])){
	$name=$_POST['name'];
	$email=$_POST['email'];
	$phone=$_POST['phone'];
	$Subject=$_POST['subject'];
	$msg=$_POST['msg'];


	$to='info@digizura.com';
	$sub='From Submission';
	$message="Name:  ".$name."\n"."Phone: ".$phone."\n" ."subject: " .$Subject."\n" ."Wrote the following: "." \n\n".$msg;
	$headers="From: ".$email;

	if(mail($to,$sub,$message,$headers)){

		header("refresh:3; url= https://sturdiest-presentat.000webhostapp.com/");
		echo "<h1> Sent Succesfully! Thank you"." " .$name.", We will contact you shortly!</h1>";

	}

	else{
		header("refresh:3; url= https://sturdiest-presentat.000webhostapp.com/");
		echo "Something went wrong!";
	}
}
?>
