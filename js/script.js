function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}

function changeSortText(newText) {
  var sortSpan = document.getElementById("sortText");
  sortSpan.textContent = newText;

  // Tutup dropdown setelah mengganti teks
  document.getElementById("myDropdown").classList.remove("show");
}

// list video

const tagContainer = document.getElementById("tag-container");
const toggleButton = document.getElementById("toggle-button");
const tags = tagContainer.querySelectorAll(".mb-1");

const tagsToShowInitially = 8;
let isShowingAllTags = false;

for (let i = 0; i < tagsToShowInitially; i++) {
  tags[i].classList.add("active");
}

toggleButton.addEventListener("click", () => {
  isShowingAllTags = !isShowingAllTags;

  if (isShowingAllTags) {
    tags.forEach((tag) => tag.classList.add("active"));
    toggleButton.textContent = "Lihat Lebih Sedikit";
  } else {
    for (let i = tagsToShowInitially; i < tags.length; i++) {
      tags[i].classList.remove("active");
    }
    toggleButton.textContent = "Lihat Lebih Banyak";
  }
});

// button uplod to register
function register() {
  window.location.href = "../Auth/register.html";
}
