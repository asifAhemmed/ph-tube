// Load All Button From API
const loadAllButton = async () => {
  const res = await fetch(
    "https://openapi.programming-hero.com/api/videos/categories"
  );
  const data = await res.json();
  showButton(data.data);
};

// Load All Data From API
const loadAllData = async () => {
  const res = await fetch(
    "https://openapi.programming-hero.com/api/videos/category/1000"
  );
  const data = await res.json();
  showAllData(data.data);
};

// Show Buttons
const showButton = (data) => {
  const btnContainer = document.getElementById("btn-container");
  data.forEach((item) => {
    const btn = document.createElement("button");
    btn.classList = "btn text-black border-0 bg-gray-300";
    btn.innerHTML = item.category;
    btnContainer.appendChild(btn);
  });
};

// Show All Data with Card
const showAllData = (data) => {
  console.log(data);
  const cardContainer = document.getElementById("card-container");
  data.forEach((item) => {
    const card = document.createElement("div");
    card.classList = "card w-76  shadow-xl";
    card.innerHTML = `
        <figure><img class='h-full' src=${item.thumbnail} alt="Shoes" /></figure>
        <div class="card-body">
        <div class="flex gap-5">
        <img class="w-1/6 rounded-full" src=${item.authors[0].profile_picture}>
        <h2 class="card-title font-bold">${item.title}</h2>
        </div>
        <p class="text-2xl">${
          item.authors[0].profile_name
        }<span class="text-blue-400 ml-2">${
      item.authors[0].verified ? '<i class="fa-solid fa-certificate"></i>' : ""
    }</span>
        </P>
        </div>
        `;
    cardContainer.appendChild(card);
  });
};

loadAllButton()
loadAllData();
