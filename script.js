
const galleryInput = document.getElementById("galleryInput");
const imagePreview = document.getElementById("imagePreview");
const plantImage = document.getElementById("plantImage");
const detectBtn = document.getElementById("detectBtn");
const moodText = document.getElementById("mood");
const adviceText = document.getElementById("advice");

let selectedImage = null;

// Image upload handler
function handleImageUpload(event) {
  const file = event.target.files[0];
  if (!file) return;

  const reader = new FileReader();
  reader.onload = function (e) {
    selectedImage = e.target.result;
    imagePreview.innerHTML = `<img src="${selectedImage}" alt="Preview Image" />`;
    plantImage.src = selectedImage;
  };
  reader.readAsDataURL(file);
}

galleryInput.addEventListener("change", handleImageUpload);



// Detect mood
function handleDetectClick() {
  if (!selectedImage) {
    alert("Please upload or take a photo of your plant first!");
    return;
  }

  const moods = ["Happy 🌞", "Thirsty 💧", "Sleepy 😴", "Grumpy 😠", "Excited 🌈", "Lonely 😢"];
  const advices = [
    "Your plant is thriving! Keep up the good work.",
    "Looks like it needs a drink. Give it some water!",
    "It's nap time. Let it chill in a cozy spot.",
    "Maybe it's annoyed — check sunlight or pot.",
    "So much energy! Maybe play some soft music.",
    "Talk to your plant — it needs a friend today."
  ];

  const i = Math.floor(Math.random() * moods.length);
  moodText.textContent = moods[i];
  adviceText.textContent = advices[i];

  // Change to page 2
  document.getElementById("page1").classList.remove("active");
  document.getElementById("page2").classList.add("active");
}

detectBtn.addEventListener("click", handleDetectClick);
function goBack() {
  document.getElementById("page2").classList.remove("active");
  document.getElementById("page1").classList.add("active");
  imagePreview.innerHTML = "";
  plantImage.src = "";
  moodText.textContent = "";
  adviceText.textContent = "";
  selectedImage = null;
}
