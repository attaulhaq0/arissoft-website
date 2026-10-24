<?php
/**
 * Content Management API - Arissoft Solutions
 * Endpoints:
 *   GET /api/content.php?type=services - Get all services
 *   GET /api/content.php?type=testimonials - Get all testimonials
 *   GET /api/content.php?type=faq - Get all FAQs
 */

require_once 'config.php';

// Only allow GET requests for public content
if ($_SERVER['REQUEST_METHOD'] !== 'GET') {
    jsonResponse(['error' => 'Method not allowed'], 405);
}

$type = isset($_GET['type']) ? sanitize($_GET['type']) : '';

if (empty($type)) {
    jsonResponse(['error' => 'Content type is required'], 400);
}

try {
    $pdo = getDBConnection();
    
    switch ($type) {
        case 'services':
            $stmt = $pdo->query("
                SELECT id, title as name, description, icon, features, sort_order 
                FROM services 
                WHERE is_active = 1 
                ORDER BY sort_order ASC
            ");
            $data = $stmt->fetchAll();
            foreach ($data as &$row) {
                $row['features'] = json_decode($row['features'], true) ?? [];
            }
            break;
            
        case 'testimonials':
            $stmt = $pdo->query("
                SELECT id, name, position, company, content, rating, avatar_url as avatar, sort_order 
                FROM testimonials 
                WHERE is_active = 1 
                ORDER BY sort_order ASC
            ");
            $data = $stmt->fetchAll();
            break;
            
        case 'faq':
            $stmt = $pdo->query("
                SELECT id, question, answer, sort_order 
                FROM faqs 
                WHERE is_active = 1 
                ORDER BY sort_order ASC
            ");
            $data = $stmt->fetchAll();
            break;
            
        case 'company':
            $stmt = $pdo->query("
                SELECT setting_key, setting_value 
                FROM site_settings 
                WHERE is_active = 1
            ");
            $rows = $stmt->fetchAll();
            $data = [];
            foreach ($rows as $row) {
                $data[$row['setting_key']] = $row['setting_value'];
            }
            break;
            
        default:
            jsonResponse(['error' => 'Invalid content type. Valid: services, testimonials, faq, company'], 400);
    }
    
    jsonResponse([
        'success' => true,
        'data' => $data,
        'count' => count($data)
    ]);
    
} catch (PDOException $e) {
    jsonResponse(['error' => 'Failed to fetch content'], 500);
}
?>
