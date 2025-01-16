<?php
// Allow requests from your React app's origin
header("Access-Control-Allow-Origin: http://localhost:5173");


// Allow the methods you use
header("Access-Control-Allow-Methods: GET, POST, OPTIONS");

// Allow specific headers
header("Access-Control-Allow-Headers: Content-Type");

// Handle preflight requests
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit();
}
header("Content-Type: application/json");

<<<<<<< HEAD
// Enable error reporting for debugging
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);

// Database connection parameters
=======

>>>>>>> 7ed5821d01b3c09ed97f2e6bb75f1d375353335f
$host = "localhost";
$user = "root";
$password = "";
$dbname = "fitforge";

// Create database connection
$conn = new mysqli($host, $user, $password, $dbname);

// Check for connection errors
if ($conn->connect_error) {
<<<<<<< HEAD
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
=======
    die(json_encode(array("status" => "error", "message" => "Connection failed: " . $conn->connect_error)));
}


$method = $_SERVER['REQUEST_METHOD'];

if ($method === 'POST') {
    $rawData = file_get_contents("php://input");
    $data = json_decode($rawData, true);

    if (!$data) {
        echo json_encode(array("status" => "error", "message" => "Invalid JSON in request payload"));
        exit();
    }

    if (isset($data['type'])) {
        switch ($data['type']) {
            case 'admin_login':
                AdminLogin($conn, $data);
                break;
            case 'contact':
                handleContactSubmission($conn, $data);
                break;
            case 'register':
                handleMemberRegistration($conn, $data);
                break;
            case 'getMembershipPlans':
                getMembershipPlans($conn);
                break;
            case 'addMembershipPlan':
                addMembershipPlan($conn, $data);
                break;
            case 'getTrainers':
                getTrainers($conn);
                break;
            case 'addTrainer':
                addTrainer($conn, $data);
                break;
            case 'getProducts':
                getProducts($conn);
                break;
            case 'addProduct':
                addProduct($conn, $data);
                break;
            case 'getEquipment':
                getEquipment($conn);
                break;
            case 'addEquipment':
                addEquipment($conn, $data);
                break;
            case 'getMembers':
                getMembers($conn);
                break;
            default:
                echo json_encode(array("status" => "error", "message" => "Invalid request type: " . $data['type']));
        }
    } else {
        echo json_encode(array("status" => "error", "message" => "Request type not specified"));
    }
} else {
    echo json_encode(array("status" => "error", "message" => "Invalid request method"));
}



function AdminLogin($conn, $data) {
    if (empty($data['username']) || empty($data['password'])) {
        echo json_encode(array("status" => "error", "message" => "Username and password are required"));
        return;
    }

    $username = $conn->real_escape_string($data['username']);
    $password = $data['password']; // No hashing of the password

    $sql = "SELECT * FROM admins WHERE username = ?";
    $stmt = $conn->prepare($sql);
    $stmt->bind_param("s", $username);
    $stmt->execute();
    $result = $stmt->get_result();

    if ($result->num_rows > 0) {
        $admin = $result->fetch_assoc();

        // Compare plain-text password
        if ($password === $admin['password']) {
            echo json_encode(array(
                "status" => "success",
                "message" => "Admin Login Successful",
                "admin_id" => $admin['id'],
                "admin_name" => $admin['username']
            ));
        } else {
            echo json_encode(array("status" => "error", "message" => "Invalid password"));
        }
    } else {
        echo json_encode(array("status" => "error", "message" => "Admin not found"));
    }
}



function handleContactSubmission($conn, $data) {
    $name = $conn->real_escape_string($data['name']);
    $email = $conn->real_escape_string($data['email']);
    $message = $conn->real_escape_string($data['message']);
    
    $sql = "INSERT INTO contact_submissions (name, email, message) VALUES (?, ?, ?)";
    $stmt = $conn->prepare($sql);
    $stmt->bind_param("sss", $name, $email, $message);
    
    if ($stmt->execute()) {
        echo json_encode(array("status" => "success", "message" => "Message sent successfully"));
    } else {
        echo json_encode(array("status" => "error", "message" => "Error: " . $conn->error));
    }
}

function handleMemberRegistration($conn, $data) {
    $name = $conn->real_escape_string($data['name']);
    $email = $conn->real_escape_string($data['email']);
    $phone = $conn->real_escape_string($data['phone']);
    $dob = $conn->real_escape_string($data['dob']);
    $joinDate = $conn->real_escape_string($data['joinDate']);
    $gender = $conn->real_escape_string($data['gender']);
    $planId = $conn->real_escape_string($data['planId']);
    
    $sql = "INSERT INTO members (name, email, phone, dob, join_date, gender, plan_id) VALUES (?, ?, ?, ?, ?, ?, ?)";
    $stmt = $conn->prepare($sql);
    $stmt->bind_param("ssssssi", $name, $email, $phone, $dob, $joinDate, $gender, $planId);
    
    if ($stmt->execute()) {
        echo json_encode(array("status" => "success", "message" => "Member registered successfully"));
    } else {
        echo json_encode(array("status" => "error", "message" => "Error: " . $conn->error));
    }
}

function getClasses($conn) {
    $sql = "SELECT * FROM classes";
    $result = $conn->query($sql);
    $classes = array();
    
    if ($result->num_rows > 0) {
        while($row = $result->fetch_assoc()) {
            $classes[] = $row;
        }
    }
    
    echo json_encode($classes);
}

function updateClass($conn, $data) {
    $sql = "UPDATE classes SET name = ?, description = ?, duration = ?, capacity = ? WHERE id = ?";
    $stmt = $conn->prepare($sql);
    $stmt->bind_param("sssii", $data['name'], $data['description'], $data['duration'], $data['capacity'], $data['id']);
    
    if ($stmt->execute()) {
        echo json_encode(array("status" => "success", "message" => "Class updated successfully"));
    } else {
        echo json_encode(array("status" => "error", "message" => "Error updating class"));
    }
}

function deleteClass($conn, $data) {
    $sql = "DELETE FROM classes WHERE id = ?";
    $stmt = $conn->prepare($sql);
    $stmt->bind_param("i", $data['id']);
    
    if ($stmt->execute()) {
        echo json_encode(array("status" => "success", "message" => "Class deleted successfully"));
    } else {
        echo json_encode(array("status" => "error", "message" => "Error deleting class"));
    }
}

function toggleClassStatus($conn, $data) {
    $sql = "UPDATE classes SET is_active = ? WHERE id = ?";
    $stmt = $conn->prepare($sql);
    $stmt->bind_param("ii", $data['status'], $data['id']);
    
    if ($stmt->execute()) {
        echo json_encode(array("status" => "success", "message" => "Class status updated successfully"));
    } else {
        echo json_encode(array("status" => "error", "message" => "Error updating class status"));
    }
}

function addClass($conn, $data) {
    $sql = "INSERT INTO classes (name, description, duration, capacity) VALUES (?, ?, ?, ?)";
    $stmt = $conn->prepare($sql);
    $stmt->bind_param("sssi", $data['name'], $data['description'], $data['duration'], $data['capacity']);
    
    if ($stmt->execute()) {
        echo json_encode(array("status" => "success", "message" => "Class added successfully"));
    } else {
        echo json_encode(array("status" => "error", "message" => "Error adding class"));
    }
}

// function getPlans($conn) {
//     $sql = "SELECT * FROM membershi_plan WHERE type IN ('monthly', '3-month', '6-month', 'annual')";
//     $result = $conn->query($sql);
//     $plans = array();
    
//     if ($result->num_rows > 0) {
//         while($row = $result->fetch_assoc()) {
//             $plans[] = $row;
//         }
//     }
    
//     echo json_encode($plans);
// }

function updatePlan($conn, $data) {
    $sql = "UPDATE membership_plan SET name = ?, description = ?, price = ?, duration = ? WHERE id = ?";
    $stmt = $conn->prepare($sql);
    $stmt->bind_param("ssdsi", $data['name'], $data['description'], $data['price'], $data['duration'], $data['id']);
    
    if ($stmt->execute()) {
        echo json_encode(array("status" => "success", "message" => "Plan updated successfully"));
    } else {
        echo json_encode(array("status" => "error", "message" => "Error updating plan"));
    }
}

function deletePlan($conn, $data) {
    $sql = "DELETE FROM membership_plan WHERE id = ?";
    $stmt = $conn->prepare($sql);
    $stmt->bind_param("i", $data['id']);
    
    if ($stmt->execute()) {
        echo json_encode(array("status" => "success", "message" => "Plan deleted successfully"));
    } else {
        echo json_encode(array("status" => "error", "message" => "Error deleting plan"));
    }
}

function togglePlanStatus($conn, $data) {
    $sql = "UPDATE membership_plan SET is_active = ? WHERE id = ?";
    $stmt = $conn->prepare($sql);
    $stmt->bind_param("ii", $data['status'], $data['id']);
    
    if ($stmt->execute()) {
        echo json_encode(array("status" => "success", "message" => "Plan status updated successfully"));
    } else {
        echo json_encode(array("status" => "error", "message" => "Error updating plan status"));
    }
}

// function addPlan($conn, $data) {
//     $sql = "INSERT INTO membership_plan (name, description, price, duration) VALUES (?, ?, ?, ?)";
//     $stmt = $conn->prepare($sql);
//     $stmt->bind_param("ssds", $data['name'], $data['description'], $data['price'], $data['duration']);
    
//     if ($stmt->execute()) {
//         echo json_encode(array("status" => "success", "message" => "Plan added successfully"));
//     } else {
//         echo json_encode(array("status" => "error", "message" => "Error adding plan"));
//     }
// }

function getMembers($conn) {
    $sql = "SELECT * FROM members";
    $result = $conn->query($sql);
    $members = array();
    
    if ($result->num_rows > 0) {
        while($row = $result->fetch_assoc()) {
            $members[] = $row;
        }
    }
    
    echo json_encode($members);
}

function getTrainers($conn) {
    $sql = "SELECT * FROM trainer";
    $result = $conn->query($sql);
    $trainers = array();
    
    if ($result->num_rows > 0) {
        while($row = $result->fetch_assoc()) {
            $trainers[] = $row;
        }
    }
    
    echo json_encode($trainers);
}

function updateTrainer($conn, $data) {
    $sql = "UPDATE trainer SET name = ?, specialization = ?, experience = ? WHERE id = ?";
    $stmt = $conn->prepare($sql);
    $stmt->bind_param("sssi", $data['name'], $data['specialization'], $data['experience'], $data['id']);
    
    if ($stmt->execute()) {
        echo json_encode(array("status" => "success", "message" => "Trainer updated successfully"));
    } else {
        echo json_encode(array("status" => "error", "message" => "Error updating trainer"));
    }
}

function deleteTrainer($conn, $data) {
    $sql = "DELETE FROM trainer WHERE id = ?";
    $stmt = $conn->prepare($sql);
    $stmt->bind_param("i", $data['id']);
    
    if ($stmt->execute()) {
        echo json_encode(array("status" => "success", "message" => "Trainer deleted successfully"));
    } else {
        echo json_encode(array("status" => "error", "message" => "Error deleting trainer"));
    }
}

function addTrainer($conn, $data) {
    $sql = "INSERT INTO trainer (name, email, phone, experience, speciality, certification) VALUES (?, ?, ?, ?, ?, ?)";
    $stmt = $conn->prepare($sql);
    $stmt->bind_param("sssiss", $data['name'], $data['email'], $data['phone'], $data['experience'], $data['speciality'], $data['certification']);
    
    if ($stmt->execute()) {
        echo json_encode(array("status" => "success", "message" => "Trainer added successfully"));
    } else {
        echo json_encode(array("status" => "error", "message" => "Error adding trainer"));
    }
}

function getProducts($conn) {
    $sql = "SELECT * FROM product";
    $result = $conn->query($sql);
    $products = array();
    
    if ($result->num_rows > 0) {
        while($row = $result->fetch_assoc()) {
            $products[] = $row;
        }
    }
    
    echo json_encode($products);
}

function updateProduct($conn, $data) {
    $sql = "UPDATE product SET name = ?, description = ?, price = ?, stock = ? WHERE id = ?";
    $stmt = $conn->prepare($sql);
    $stmt->bind_param("ssdii", $data['name'], $data['description'], $data['price'], $data['stock'], $data['id']);
    
    if ($stmt->execute()) {
        echo json_encode(array("status" => "success", "message" => "Product updated successfully"));
    } else {
        echo json_encode(array("status" => "error", "message" => "Error updating product"));
    }
}

function deleteProduct($conn, $data) {
    $sql = "DELETE FROM product WHERE id = ?";
    $stmt = $conn->prepare($sql);
    $stmt->bind_param("i", $data['id']);
    
    if ($stmt->execute()) {
        echo json_encode(array("status" => "success", "message" => "Product deleted successfully"));
    } else {
        echo json_encode(array("status" => "error", "message" => "Error deleting product"));
    }
}

function addProduct($conn, $data) {
    $sql = "INSERT INTO product (name, description, price, quantity) VALUES (?, ?, ?, ?)";
    $stmt = $conn->prepare($sql);
    $stmt->bind_param("ssdi", $data['name'], $data['description'], $data['price'], $data['quantity']);
    
    if ($stmt->execute()) {
        echo json_encode(array("status" => "success", "message" => "Product added successfully"));
    } else {
        echo json_encode(array("status" => "error", "message" => "Error adding product"));
    }
}


function getMembershipPlans($conn) {
    $sql = "SELECT * FROM membership_plan WHERE membership_type IN ('monthly', '3-month', '6-month', 'annual')";
    $result = $conn->query($sql);
    $plans = array();
    
    if ($result->num_rows > 0) {
        while($row = $result->fetch_assoc()) {
            $plans[] = $row;
        }
    }
    
    echo json_encode($plans);
}

function addMembershipPlan($conn, $data) {
    $sql = "INSERT INTO membership_plan (name, membership_type, price, duration) VALUES (?, ?, ?, ?)";
    $stmt = $conn->prepare($sql);
    $stmt->bind_param("ssds", $data['name'], $data['membership_type'], $data['price'], $data['duration']);
    
    if ($stmt->execute()) {
        echo json_encode(array("status" => "success", "message" => "Membership plan added successfully"));
    } else {
        echo json_encode(array("status" => "error", "message" => "Error adding membership plan"));
    }
}

function getEquipment($conn) {
    $sql = "SELECT * FROM equipment";
    $result = $conn->query($sql);
    $equipment = array();
    
    if ($result->num_rows > 0) {
        while($row = $result->fetch_assoc()) {
            $equipment[] = $row;
        }
    }
    
    echo json_encode($equipment);
}

function addEquipment($conn, $data) {
    $sql = "INSERT INTO equipment (name, category, status) VALUES (?, ?, ?)";
    $stmt = $conn->prepare($sql);
    $stmt->bind_param("sss", $data['name'], $data['category'], $data['status']);
    
    if ($stmt->execute()) {
        echo json_encode(array("status" => "success", "message" => "Equipment added successfully"));
    } else {
        echo json_encode(array("status" => "error", "message" => "Error adding equipment"));
    }
>>>>>>> 7ed5821d01b3c09ed97f2e6bb75f1d375353335f
}

// Close database connection
$conn->close();
<<<<<<< HEAD
=======
?>

>>>>>>> 7ed5821d01b3c09ed97f2e6bb75f1d375353335f
