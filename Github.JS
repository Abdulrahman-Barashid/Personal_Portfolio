// Wait for everything to be fully loaded
window.addEventListener('load', function() {
    // Debug message to check if script runs
    console.log("Initializing GitHub Calendar");
    
    // Initialize GitHub Calendar with error handling
    try {
        GitHubCalendar(".calendar", "Abdulrahman-Barashid", {
            responsive: true,
            tooltips: true,
            global_stats: false,
            summary_text: '{{count}} contributions in the last year'
        }).then(function() {
            console.log("GitHub Calendar loaded successfully");
        }).catch(function(error) {
            console.error("Error loading GitHub Calendar:", error);
        });
    } catch (e) {
        console.error("Error initializing GitHub Calendar:", e);
    }
});