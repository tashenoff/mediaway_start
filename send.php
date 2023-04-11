<?php
// Проверяем, была ли отправлена форма
if(isset($_POST['submit'])) {

    // Получаем данные из формы
    $name = $_POST['name'];
    $phone = $_POST['phone'];
    // $email_from = $_POST['email'];

    // Устанавливаем адрес, на который будут приходить письма
    $to = "info@mediaway.kz";

    // Устанавливаем тему письма
    $subject = "заявка с сайта";

    // Формируем тело письма
    $message = "Имя: ".$name."\r\n";
    $message .= "Телефон: ".$phone."\r\n";
    // $message .= "Email: ".$email_from."\r\n";

    // Устанавливаем заголовки для письма
    $headers = "From: ".$to."\r\n";
    $headers .= "Reply-To: ".$email_from."\r\n";
    $headers .= "Content-Type: text/plain; charset=utf-8\r\n";

    // Отправляем письмо
    if(mail($to, $subject, $message, $headers)) {
        header('Location: thx.html');
        exit();
    } else {
        echo "Ошибка при отправке заявки.";
    }
}
?>