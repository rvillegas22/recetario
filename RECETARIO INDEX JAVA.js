function searchRecipes() {
    let input = document.getElementById('searchInput');
    let filter = input.value.toLowerCase();
    let categories = document.getElementsByClassName('category');
    
    // Iterar sobre todas las categorías y esconder las que no coincidan con el filtro
    for (let i = 0; i < categories.length; i++) {
        let categoryTitle = categories[i].getElementsByTagName("h4")[0];
        let categoryText = categoryTitle.innerText || categoryTitle.textContent;
        
        if (categoryText.toLowerCase().indexOf(filter) > -1) {
            categories[i].style.display = "";
        } else {
            categories[i].style.display = "none";
        }
    }
}
