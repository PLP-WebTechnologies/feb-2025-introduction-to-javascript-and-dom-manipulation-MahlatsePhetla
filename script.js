
        
const changeText = document.getElementById('changeText');
const dynamicText = document.getElementById('dynamicText');
changeText.addEventListener('click', () => {
    dynamicText.textContent = "Text has been changed!";
    dynamicText.style.color = "red"; 
});


const toggleElementBtn = document.getElementById('toggleElementBtn');
const extraElement = document.getElementById('extraElement');
toggleElementBtn.addEventListener('click', () => {
    extraElement.classList.toggle('hidden');
});
