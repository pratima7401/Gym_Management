<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET, POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");
header("Content-Type: application/json");

$host = "localhost";
$user = "root";
$password = "";
$dbname = "fitforge";

$conn = new mysqli($host, $user, $password, $dbname);

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

$method = $_SERVER['REQUEST_METHOD'];

switch($method) {
    case 'GET':
        $sql = "SELECT * FROM members";
        $result = $conn->query($sql);
        $members = array();
        while($row = $result->fetch_assoc()) {
            $members[] = $row;
        }
        echo json_encode($members);
        break;
    case 'POST':
        $data = json_decode(file_get_contents("php://input"), true);
        
        if (isset($data['type']) && $data['type'] === 'contact') {
            // Handle contact form submission
            $name = $data['name'];
            $email = $data['email'];
            $message = $data['message'];
            
            $sql = "INSERT INTO contact_submissions (name, email, message) VALUES (?, ?, ?)";
            $stmt = $conn->prepare($sql);
            $stmt->bind_param("sss", $name, $email, $message);
            
            if ($stmt->execute()) {
                $response = array("status" => "success", "message" => "Message sent successfully");
            } else {
                $response = array("status" => "error", "message" => $stmt->error);
            }
        } else {
            // Handle member registration (existing code)
            $name = $data['name'];
            $email = $data['email'];
            $phone = $data['phone'];
            $dob = $data['dob'];
            
            $sql = "INSERT INTO members (name, email, phone, dob) VALUES (?, ?, ?, ?)";
            $stmt = $conn->prepare($sql);
            $stmt->bind_param("ssss", $name, $email, $phone, $dob);
            
            if ($stmt->execute()) {
                $response = array("status" => "success", "message" => "Member added successfully");
            } else {
                $response = array("status" => "error", "message" => $stmt->error);
            }
        }
        
        echo json_encode($response);
        break;
}

$conn->close();

