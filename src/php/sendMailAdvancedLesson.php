<?php 
$to="<mr.amiil@mail.ru>";
$subject="Новая заявка на тематический масстер-класс";
$personName=$_POST['FullName'];
$phoneNumber=$_POST['Phone'];

$message="
<table padding="50px;">
<tr>
<td ><strong>Имя клиента</strong></td>
<td>".$personName."</td>    
</tr>
<tr>
 <td><strong>Телефон Клиента</strong></td>
 <td>".$phoneNumber."</td>   
</tr>


     
</table>
";
$headers    = "Content-type: text/html; charset=UTF-8\r\n";
$headers    .= "From: noreplay@clayge.com\r\n";

mail($to,$subject,$headers,$message);
?>