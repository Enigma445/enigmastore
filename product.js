let products = {
    data: [
        {
            productName: "Cooperate Men Wear",
            category: "Menwears",
            price: "30",
            image: "https://images.unsplash.com/photo-1617137968427-85924c800a22?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        },
        {
            productName: "Cooperate Ladies Wear",
            category: "Ladieswears",
            price: "640",
            image: "https://images.unsplash.com/photo-1617922001439-4a2e6562f328?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        },
        {
            productName: "Nike Air",
            category: "Footwears",
            price: "499",
            image: "https://images.unsplash.com/photo-1588361861040-ac9b1018f6d5?q=80&w=1528&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        },
        {
            productName: "Small-pendant Necklace",
            category: "Accessories",
            price: "20",
            image: "https://images.unsplash.com/photo-1611652022419-a9419f74343d?q=80&w=1376&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        },
        {
            productName: "Men Causal Wear",
            category: "Menwears",
            price: "60",
            image: "https://images.unsplash.com/photo-1613072848413-b62c7148d3f1?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        },
        {
            productName: "Ladies Causal Wear",
            category: "Ladieswears",
            price: "50",
            image: "https://images.unsplash.com/photo-1519235106638-30cc49b5dbc5?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        },
        {
            productName: "Sport Canvas",
            category: "Footwears",
            price: "62",
            image: "https://images.unsplash.com/photo-1562183241-b937e95585b6?q=80&w=1530&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        },
        {
            productName: "Portable Purse",
            category: "Accessories",
            price: "160",
            image: "https://images.unsplash.com/photo-1566150905458-1bf1fc113f0d?q=80&w=1471&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        },
        {
            productName: "Men Shirt",
            category: "Menwears",
            price: "80",
            image: "https://images.unsplash.com/photo-1603252109303-2751441dd157?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        },
        {
            productName: "Outting Gown",
            category: "Ladieswears",
            price: "60",
            image: "https://images.unsplash.com/photo-1499939667766-4afceb292d05?q=80&w=1473&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        },
        {
            productName: "Causal Foot Wear",
            category: "Footwears",
            price: "260",
            image: "https://images.unsplash.com/photo-1603808033192-082d6919d3e1?q=80&w=1430&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        },
        {
            productName: "Sun Glass",
            category: "Accessories",
            price: "10",
            image: "https://images.unsplash.com/photo-1511499767150-a48a237f0083?q=80&w=1480&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        },
    ],
};

document.addEventListener("DOMContentLoaded", () => {
    const productsContainer = document.getElementById("products");
    const buttons = document.querySelectorAll(".button-value");

    const displayProducts = (category) => {
        productsContainer.innerHTML = "";
        const filteredProducts = category === "all" 
            ? products.data 
            : products.data.filter(product => product.category === category);
        
        filteredProducts.forEach(product => {
            const productCard = document.createElement("div");
            productCard.classList.add("card");
            productCard.setAttribute("data-category", product.category); // Add category attribute for filtering
            productCard.innerHTML = `
                <img src="${product.image}" alt="${product.productName}">
                <div class="container">
                    <h5>${product.productName}</h5>
                    <p class="price">$${product.price}</p>
                </div>
            `;
            productsContainer.appendChild(productCard);
        });
    };

    buttons.forEach(button => {
        button.addEventListener("click", () => {
            displayProducts(button.getAttribute("data-category"));
        });
    });

    displayProducts("all");
});