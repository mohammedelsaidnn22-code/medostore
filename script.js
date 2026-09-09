// نسخ النص إلى الحافظة
function copyText(elementId, buttonElement) {
    const textToCopy = document.getElementById(elementId).textContent;
    
    navigator.clipboard.writeText(textToCopy).then(() => {
        // تغيير نص الزر مؤقتاً
        const originalHTML = buttonElement.innerHTML;
        buttonElement.innerHTML = '<i class="fa-solid fa-check"></i> تم النسخ';
        buttonElement.style.background = '#10b981';
        buttonElement.style.color = '#fff';
        
        // إعادة النص الأصلي بعد ثانيتين
        setTimeout(() => {
            buttonElement.innerHTML = originalHTML;
            buttonElement.style.background = '';
            buttonElement.style.color = '';
        }, 2000);
    }).catch(err => {
        console.error('فشل النسخ:', err);
        alert('حدث خطأ أثناء النسخ');
    });
}

// Initialize Vercel Web Analytics
// This will automatically track page views and user interactions
(function() {
    window.va = window.va || function () { 
        (window.vaq = window.vaq || []).push(arguments); 
    };
})();
