// Copy text functionality for payment info
function copyText(elementId, button) {
    const element = document.getElementById(elementId);
    const textToCopy = element.innerText;
    
    // Copy to clipboard
    navigator.clipboard.writeText(textToCopy).then(() => {
        // Show success feedback
        const originalContent = button.innerHTML;
        button.innerHTML = '<i class="fa-solid fa-check"></i> تم النسخ';
        button.style.background = '#10b981';
        button.style.color = '#fff';
        
        // Reset button after 2 seconds
        setTimeout(() => {
            button.innerHTML = originalContent;
            button.style.background = '';
            button.style.color = '';
        }, 2000);
    }).catch(err => {
        console.error('Failed to copy:', err);
        alert('حدث خطأ في النسخ. يرجى المحاولة مرة أخرى.');
    });
}
