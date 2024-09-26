<?php
session_start();

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $oldName = $_POST['oldName'] ?? '';
    $newName = $_POST['newName'] ?? '';

    if (!empty($oldName) && !empty($newName)) {
        if (isset($_SESSION['folders'][$oldName])) {
            $_SESSION['folders'][$newName] = $_SESSION['folders'][$oldName];
            unset($_SESSION['folders'][$oldName]);
            echo json_encode(['success' => true]);
        } else {
            echo json_encode(['success' => false, 'message' => 'Dossier non trouvé.']);
        }
    } else {
        echo json_encode(['success' => false, 'message' => 'Nom invalide.']);
    }
} else {
    echo json_encode(['success' => false, 'message' => 'Méthode non autorisée.']);
}
?>
