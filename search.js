document.getElementById("search-input").addEventListener("input", function() {
    let filter = this.value.trim().toLowerCase(); // Trim and convert the search input to lower case
    let productCards = document.querySelectorAll(".card");
    productCards.forEach(card => {
        let productName = card.querySelector("h5").textContent.toLowerCase(); // Get the product name
        let category = card.getAttribute("data-category").toLowerCase(); // Get the product category
        // Check if the product name or category contains the filter text
        if (productName.includes(filter) || category.includes(filter) || filter === "") {
            card.style.display = ""; 
        } else {
            card.style.display = "none"; 
        }
    });
});