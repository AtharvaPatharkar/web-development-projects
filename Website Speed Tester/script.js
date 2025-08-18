// JavaScript file
document.getElementById('test-speed').addEventListener('click', function () {
    const url = document.getElementById('url').value.trim();

    if (!url) {
        alert("Please enter a valid URL.");
        return;
    }

    // Clear previous results
    document.getElementById('performance').textContent = '';
    document.getElementById('load-time').textContent = '';
    document.getElementById('fcp').textContent = '';
    document.getElementById('lcp').textContent = '';

    // Fetch performance data using Google Lighthouse API
    fetch(`https://www.googleapis.com/pagespeedonline/v5/runPagespeed?url=${url}&category=performance`)
        .then(response => response.json())
        .then(data => {
            const performanceScore = data.lighthouseResult.categories.performance.score * 100;
            const loadTime = data.lighthouseResult.audits['speed-index'].displayValue;
            const fcp = data.lighthouseResult.audits['first-contentful-paint'].displayValue;
            const lcp = data.lighthouseResult.audits['largest-contentful-paint'].displayValue;

            // Display the results
            document.getElementById('performance').textContent = performanceScore + '%';
            document.getElementById('load-time').textContent = loadTime;
            document.getElementById('fcp').textContent = fcp;
            document.getElementById('lcp').textContent = lcp;
        })
        .catch(error => {
            console.error('Error fetching performance data:', error);
            alert("An error occurred while fetching the performance data.");
        });
});
