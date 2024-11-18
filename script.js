const toppersData = {
  2020: [
    { name: "John Doe", img: "student1.jpg" },
    { name: "Jane Smith", img: "student2.jpg" }
  ],
  2021: [
    { name: "Michael Brown", img: "student3.jpg" },
    { name: "Emma Wilson", img: "student4.jpg" }
  ],
  2022: [
    { name: "Liam Johnson", img: "student5.jpg" },
    { name: "Olivia Martinez", img: "student6.jpg" }
  ],
  2023: [
    { name: "Noah Davis", img: "student7.jpg" },
    { name: "Sophia Garcia", img: "student8.jpg" }
  ],
  2024: [
    { name: "Ethan Lee", img: "student9.jpg" },
    { name: "Isabella Kim", img: "student10.jpg" }
  ]
};

function showToppers() {
  const year = document.getElementById("year").value;
  const toppersGallery = document.getElementById("toppers-gallery");
  toppersGallery.innerHTML = "";

  toppersData[year].forEach(topper => {
    const topperDiv = document.createElement("div");
    topperDiv.classList.add("student");
    topperDiv.innerHTML = `
      <img src="${topper.img}" alt="${topper.name}">
      <p class="name">${topper.name}</p>
    `;
    toppersGallery.appendChild(topperDiv);
  });
}

// Load default year toppers
document.addEventListener("DOMContentLoaded", () => {
  showToppers();
});
