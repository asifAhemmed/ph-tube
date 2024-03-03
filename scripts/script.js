const loadButton = async () => {
    const res = await fetch('https://openapi.programming-hero.com/api/videos/categories')
    const data = await res.json();
    showButton(data.data);
}


const showButton = (data) => {
    const btnContainer = document.getElementById('btn-container');
    data.forEach((item) => {
        const btn = document.createElement('button');
        btn.classList = 'btn text-black border-0 bg-gray-300'
        btn.innerHTML = item.category;
        btnContainer.appendChild(btn);
    })

}


loadButton();