<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET, POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");
header("Content-Type: application/json");

// Enable error reporting for debugging
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);

// Database connection parameters
$host = "localhost";
$user = "root";
$password = "";
$dbname = "fitforge";

// Create database connection
$conn = new mysqli($host, $user, $password, $dbname);

// Check for connection errors
if ($conn->connect_error) {
    http_response_code(500); // Internal Server Error
    echo json_encode(["status" => "error", "message" => "Database connection failed: " . $conn->connect_error]);
    exit;
}

// Handle preflight OPTIONS request
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200); // OK
    exit;
}

// Determine the request method
$method = $_SERVER['REQUEST_METHOD'];

switch($method) {
    case 'GET':
        $sql = "SELECT * FROM members";
        $result = $conn->query($sql);

        if ($result) {
            $members = array();
            while ($row = $result->fetch_assoc()) {
                $members[] = $row;
            }
            echo json_encode($members);
        } else {
            http_response_code(500);
            echo json_encode(["status" => "error", "message" => $conn->error]);
        }
        break;

    case 'POST':
        $data = json_decode(file_get_contents("php://input"), true);

        if (json_last_error() !== JSON_ERROR_NONE) {
            http_response_code(400); // Bad Request
            echo json_encode(["status" => "error", "message" => "Invalid JSON payload"]);
            exit;
        }

        // Handle contact form submission
        if (isset($data['type']) && $data['type'] === 'contact') {
            $name = $data['name'] ?? '';
            $email = $data['email'] ?? '';
            $message = $data['message'] ?? '';

            // Validate required fields
            if (empty($name) || empty($email) || empty($message)) {
                http_response_code(400); // Bad Request
                echo json_encode(["status" => "error", "message" => "All fields are required"]);
                exit;
            }

            $sql = "INSERT INTO contact_submissions (name, email, message) VALUES (?, ?, ?)";
            $stmt = $conn->prepare($sql);
            $stmt->bind_param("sss", $name, $email, $message);

            if ($stmt->execute()) {
                echo json_encode(["status" => "success", "message" => "Message sent successfully"]);
            } else {
                http_response_code(500);
                echo json_encode(["status" => "error", "message" => $stmt->error]);
            }
        } else {
            // Handle member registration
            $name = $data['name'] ?? '';
            $email = $data['email'] ?? '';
            $phone = $data['phone'] ?? '';
            $dob = $data['dob'] ?? '';

            // Validate required fields
            if (empty($name) || empty($email) || empty($phone) || empty($dob)) {
                http_response_code(400); // Bad Request
                echo json_encode(["status" => "error", "message" => "All fields are required"]);
                exit;
            }

            $sql = "INSERT INTO members (name, email, phone, dob) VALUES (?, ?, ?, ?)";
            $stmt = $conn->prepare($sql);
            $stmt->bind_param("ssss", $name, $email, $phone, $dob);

            if ($stmt->execute()) {
                echo json_encode(["status" => "success", "message" => "Member added successfully"]);
            } else {
                http_response_code(500);
                echo json_encode(["status" => "error", "message" => $stmt->error]);
            }
        }
        break;

    default:
        http_response_code(405); // Method Not Allowed
        echo json_encode(["status" => "error", "message" => "Invalid request method"]);
}

// Close database connection
$conn->close();
