// JavaScript file
const cacheButton = document.getElementById('cache-btn');
const onlineStatus = document.getElementById('online-status');

window.addEventListener('load', () => {
    if ('serviceWorker' in navigator) {
        navigator.serviceWorker.register('/service-worker.js')
            .then(() => console.log('Service Worker Registered'))
            .catch(err => console.error('Service Worker Registration Failed:', err));
    }
});

cacheButton.addEventListener('click', () => {
    alert('Content has been cached for offline use!');
});

function updateOnlineStatus() {
    onlineStatus.textContent = navigator.onLine ? 'online' : 'offline';
    onlineStatus.style.color = navigator.onLine ? 'green' : 'red';
}

window.addEventListener('online', updateOnlineStatus);
window.addEventListener('offline', updateOnlineStatus);
updateOnlineStatus();
