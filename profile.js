document.addEventListener("DOMContentLoaded", function () {
    // Retrieve user data from localStorage
    const userProfile = JSON.parse(localStorage.getItem("userProfile"));

    if (!userProfile) {
        document.getElementById("profileDetails").innerHTML = "<p>No profile data found!</p>";
        return;
    }

    // Dynamically generate profile content
    const profileDetails = Object.entries(userProfile)
        .map(([key, value]) => `<p><strong>${key.replace(/([A-Z])/g, " $1")}</strong>: ${value}</p>`)
        .join("");

    document.getElementById("profileDetails").innerHTML = profileDetails;

    // Add edit button functionality
    document.getElementById("editProfile").addEventListener("click", () => {
        window.location.href = "royalty.html";
    });
});
