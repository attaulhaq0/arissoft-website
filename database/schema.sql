-- =====================================================
-- Arissoft Solutions - MySQL Database Schema
-- Domain: https://arissoft.tech/
-- 
-- Run this SQL in Hostinger's phpMyAdmin to create tables
-- =====================================================

-- Create database (if not exists)
-- CREATE DATABASE IF NOT EXISTS u123456789_arissoft;
-- USE u123456789_arissoft;

-- =====================================================
-- CONTACT FORM SUBMISSIONS
-- =====================================================
CREATE TABLE IF NOT EXISTS contact_submissions (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(255) NOT NULL,
    phone VARCHAR(20) DEFAULT NULL,
    service VARCHAR(100) DEFAULT NULL,
    message TEXT NOT NULL,
    ip_address VARCHAR(45) DEFAULT NULL,
    is_read TINYINT(1) DEFAULT 0,
    is_replied TINYINT(1) DEFAULT 0,
    admin_notes TEXT DEFAULT NULL,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    updated_at DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    INDEX idx_email (email),
    INDEX idx_created (created_at),
    INDEX idx_read (is_read)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- =====================================================
-- SERVICES (Content Management)
-- =====================================================
CREATE TABLE IF NOT EXISTS services (
    id INT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(200) NOT NULL,
    description TEXT NOT NULL,
    icon VARCHAR(50) DEFAULT 'code',
    features JSON DEFAULT NULL,
    image_url VARCHAR(500) DEFAULT NULL,
    sort_order INT DEFAULT 0,
    is_active TINYINT(1) DEFAULT 1,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    updated_at DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    INDEX idx_active (is_active),
    INDEX idx_sort (sort_order)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- =====================================================
-- TESTIMONIALS (Content Management)
-- =====================================================
CREATE TABLE IF NOT EXISTS testimonials (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    position VARCHAR(100) DEFAULT NULL,
    company VARCHAR(100) DEFAULT NULL,
    content TEXT NOT NULL,
    rating TINYINT DEFAULT 5,
    avatar_url VARCHAR(500) DEFAULT NULL,
    sort_order INT DEFAULT 0,
    is_active TINYINT(1) DEFAULT 1,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    updated_at DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    INDEX idx_active (is_active),
    INDEX idx_sort (sort_order)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- =====================================================
-- FAQs (Content Management)
-- =====================================================
CREATE TABLE IF NOT EXISTS faqs (
    id INT AUTO_INCREMENT PRIMARY KEY,
    question VARCHAR(500) NOT NULL,
    answer TEXT NOT NULL,
    category VARCHAR(100) DEFAULT 'General',
    sort_order INT DEFAULT 0,
    is_active TINYINT(1) DEFAULT 1,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    updated_at DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    INDEX idx_active (is_active),
    INDEX idx_category (category),
    INDEX idx_sort (sort_order)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- =====================================================
-- SITE SETTINGS (Content Management)
-- =====================================================
CREATE TABLE IF NOT EXISTS site_settings (
    id INT AUTO_INCREMENT PRIMARY KEY,
    setting_key VARCHAR(100) NOT NULL UNIQUE,
    setting_value TEXT DEFAULT NULL,
    setting_type ENUM('text', 'textarea', 'number', 'boolean', 'json') DEFAULT 'text',
    description VARCHAR(255) DEFAULT NULL,
    is_active TINYINT(1) DEFAULT 1,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    updated_at DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    INDEX idx_key (setting_key)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- =====================================================
-- INSERT DEFAULT SETTINGS
-- =====================================================
INSERT INTO site_settings (setting_key, setting_value, setting_type, description) VALUES
('company_name', 'Arissoft Solutions', 'text', 'Company name'),
('company_email', 'info@arissoft.tech', 'text', 'Primary contact email'),
('company_phone', '+91 XXXXXXXXXX', 'text', 'Primary phone number'),
('company_address', 'Hyderabad, Telangana, India', 'text', 'Office address'),
('company_tagline', 'Transforming Ideas into Digital Reality', 'text', 'Company tagline'),
('social_linkedin', '', 'text', 'LinkedIn URL'),
('social_twitter', '', 'text', 'Twitter/X URL'),
('social_facebook', '', 'text', 'Facebook URL')
ON DUPLICATE KEY UPDATE updated_at = CURRENT_TIMESTAMP;

-- =====================================================
-- INSERT SAMPLE DATA (Optional - Remove if not needed)
-- =====================================================

-- Sample Services
INSERT INTO services (title, description, icon, features, sort_order) VALUES
('Web Development', 'Custom websites and web applications built with modern technologies', 'globe', '["Responsive Design", "SEO Optimized", "Fast Loading"]', 1),
('Software Development', 'Tailored software solutions for your business needs', 'code', '["Custom Solutions", "Scalable Architecture", "Modern Tech Stack"]', 2),
('Cloud Solutions', 'Cloud infrastructure and migration services', 'cloud', '["AWS/Azure/GCP", "24/7 Monitoring", "Cost Optimization"]', 3),
('IT Consulting', 'Strategic IT consulting to drive digital transformation', 'users', '["Digital Strategy", "Tech Roadmap", "Process Optimization"]', 4)
ON DUPLICATE KEY UPDATE updated_at = CURRENT_TIMESTAMP;

-- Sample Testimonials
INSERT INTO testimonials (name, position, company, content, rating, sort_order) VALUES
('Rajesh Kumar', 'CEO', 'TechStart Pvt Ltd', 'Arissoft delivered an exceptional web application that transformed our business operations. Highly recommended!', 5, 1),
('Priya Sharma', 'CTO', 'InnovateTech', 'Professional team with excellent technical skills. They understood our requirements and delivered on time.', 5, 2)
ON DUPLICATE KEY UPDATE updated_at = CURRENT_TIMESTAMP;

-- Sample FAQs
INSERT INTO faqs (question, answer, category, sort_order) VALUES
('What services does Arissoft offer?', 'We offer web development, software development, cloud solutions, and IT consulting services tailored to your business needs.', 'Services', 1),
('How long does a typical project take?', 'Project timelines vary based on complexity. A simple website takes 2-4 weeks, while complex applications may take 2-6 months.', 'Projects', 2),
('Do you provide ongoing support?', 'Yes, we offer 24/7 support and maintenance packages to ensure your systems run smoothly.', 'Support', 3)
ON DUPLICATE KEY UPDATE updated_at = CURRENT_TIMESTAMP;
