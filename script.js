// Smooth scrolling effect for "Learn More" button
document.querySelector(".btn").addEventListener("click", function(e) {
    e.preventDefault();
    document.querySelector("#about").scrollIntoView({ behavior: "smooth" });
});
