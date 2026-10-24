<?php
/**
 * Contact Form API - Arissoft Solutions
 * Endpoint: POST /api/contact.php
 */

require_once 'config.php';

// Only allow POST requests
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    jsonResponse(['error' => 'Method not allowed'], 405);
}

// Get JSON input
$json = file_get_contents('php://input');
$data = json_decode($json, true);

if (!$data) {
    jsonResponse(['error' => 'Invalid JSON data'], 400);
}

// Validate required fields
$required = ['name', 'email', 'message'];
foreach ($required as $field) {
    if (empty($data[$field])) {
        jsonResponse(['error' => "Field '$field' is required"], 400);
    }
}

// Sanitize inputs
$name = sanitize($data['name']);
$email = filter_var(trim($data['email']), FILTER_SANITIZE_EMAIL);
$phone = isset($data['phone']) ? sanitize($data['phone']) : '';
$service = isset($data['service']) ? sanitize($data['service']) : '';
$message = sanitize($data['message']);

// Validate email
if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    jsonResponse(['error' => 'Invalid email address'], 400);
}

// Validate lengths
if (strlen($name) > 100 || strlen($email) > 255 || strlen($message) > 2000) {
    jsonResponse(['error' => 'Input exceeds maximum length'], 400);
}

try {
    $pdo = getDBConnection();
    
    $stmt = $pdo->prepare("
        INSERT INTO contact_submissions (name, email, phone, service, message, ip_address, created_at)
        VALUES (:name, :email, :phone, :service, :message, :ip, NOW())
    ");
    
    $stmt->execute([
        ':name' => $name,
        ':email' => $email,
        ':phone' => $phone,
        ':service' => $service,
        ':message' => $message,
        ':ip' => $_SERVER['REMOTE_ADDR']
    ]);
    
    $submissionId = $pdo->lastInsertId();
    
    // Send email notification
    $to = ADMIN_EMAIL;
    $subject = "New Contact Form Submission - Arissoft Solutions";
    $emailBody = "
New contact form submission received:

Name: $name
Email: $email
Phone: $phone
Service Interest: $service

Message:
$message

---
Submitted: " . date('Y-m-d H:i:s') . "
IP: " . $_SERVER['REMOTE_ADDR'] . "
    ";
    
    $headers = "From: noreply@arissoft.tech\r\n";
    $headers .= "Reply-To: $email\r\n";
    
    @mail($to, $subject, $emailBody, $headers);
    
    jsonResponse([
        'success' => true,
        'message' => 'Thank you for contacting us! We will get back to you soon.',
        'id' => $submissionId
    ], 201);
    
} catch (PDOException $e) {
    jsonResponse(['error' => 'Failed to submit form. Please try again.'], 500);
}
?>
