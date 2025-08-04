// local storage
// Set item
localStorage.setItem("username", "john_doe");

// Get item
let user = localStorage.getItem("username"); // "john_doe"

// Remove item
localStorage.removeItem("username");

// Clear all local storage
localStorage.clear();

// Session storage
// Set item
sessionStorage.setItem("session_id", "abc123");

// Get item
let sessionId = sessionStorage.getItem("session_id"); // "abc123"

// Remove item
sessionStorage.removeItem("session_id");

// Clear all session storage
sessionStorage.clear();


// cookis
// Set cookie (expires in 7 days)
document.cookie = "token=xyz456; max-age=" + 60 * 60 * 24 * 7; // 7 days

// Get all cookies
let cookies = document.cookie; // "token=xyz456"

// Delete cookie (by setting expiry in the past)
document.cookie = "token=; expires=Thu, 01 Jan 1970 00:00:00 UTC;";
