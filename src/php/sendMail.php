<?php 
$to="<mr.amiil@mail.ru>";
$subject="Заказ изделия с сайта";
$personName=$_POST['ФИО'];
$email=$_POST['email'];
$phoneNumber=$_POST['Телефон'];
$typeOfDeliver=$_POST['Тип Доставки'];
$id=$_POST['ID'];
$message="
<table padding="50px;">
<tr>
<td ><strong>Имя клиента</strong></td>
<td>".$personName."</td>    
</tr>
<tr>
 <td><strong>Почта Клиента</strong></td>
 <td>".$email."</td>   
</tr>
<tr>
    <td><strong>Тип доставки</strong></td>
    <td>".$typeOfDeliver."</td>
</tr>
<tr>
    <td><strong>Номер телефона</strong></td>

    <td>".$phoneNumber."</td>
</tr>
<tr>
    <td><strong>Заказал изделие</strong></td>
    <td>".$id."</td>
</tr>
     
</table>
";
$headers    = "Content-type: text/html; charset=UTF-8\r\n";
$headers    .= "From: noreplay@clayge.com\r\n";

mail($to,$subject,$headers,$message);
?>