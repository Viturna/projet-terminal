let currentIndex = 0; 
const folders = document.querySelectorAll('#output .folder'); 

function updateSelection() {
    folders.forEach((folder, index) => {
        if (index === currentIndex) {
            folder.style.backgroundColor = '#00ff00'; 
            folder.style.color = '#000'; 
            folder.style.padding = '10px';
            folder.style.borderRadius = '2px';
        } else {
            folder.style.backgroundColor = 'transparent'; 
            folder.style.color = '#00ff00'; 
            folder.style.padding = '10px';
        }
    });
}

document.addEventListener('keydown', function(event) {
    if (event.key === 'ArrowDown') {
        currentIndex = (currentIndex + 1) % folders.length; 
        updateSelection();
        event.preventDefault(); 
    } else if (event.key === 'ArrowUp') {
        currentIndex = (currentIndex - 1 + folders.length) % folders.length; 
        updateSelection();
        event.preventDefault(); 
    } else if (event.key === 'Enter') {
        const selectedFolder = folders[currentIndex]; 
        handleFolderSelection(selectedFolder.id); 
    }
});

function handleFolderSelection(folderId) {
    const folderNumber = folderId.replace('folder', ''); 
    const folderFileName = `Dossier${folderNumber}.php`; 
    console.log(`Dossier sélectionné : ${folderFileName}`); 
    window.location.href = folderFileName; 
}

updateSelection();
