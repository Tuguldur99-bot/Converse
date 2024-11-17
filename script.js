const products = document.querySelectorAll('.product-card'); // Select all product cards
const itemsPerPage = 5; // Number of products to show per page
let currentPage = 0; // Current page index

function showPage(page) {
    products.forEach((product, index) => {
        product.style.display =
            index >= page * itemsPerPage && index < (page + 1) * itemsPerPage
                ? 'block'
                : 'none';
    });

    document.getElementById('prev-btn').disabled = page === 0;
    document.getElementById('next-btn').disabled = (page + 1) * itemsPerPage >= products.length;
}

document.getElementById('next-btn').addEventListener('click', () => {
    if ((currentPage + 1) * itemsPerPage < products.length) {
        currentPage++;
        showPage(currentPage);
    }
});

document.getElementById('prev-btn').addEventListener('click', () => {
    if (currentPage > 0) {
        currentPage--;
        showPage(currentPage);
    }
});

showPage(currentPage);
