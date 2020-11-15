let firstTabButton = document.querySelector('.tab1');
let secondTabButton = document.querySelector('.tab2');
let thirdTabButton = document.querySelector('.tab3');

let firstTabContent = document.querySelector('.first-tab-content');
let secondTabContent = document.querySelector('.second-tab-content');
let thirdTabContent = document.querySelector('.third-tab-content');

let packages = document.getElementById('packages');

firstTabButton.style.transition = " 1s ease"
secondTabButton.style.transition = " 1s ease"
thirdTabButton.style.transition = " 1s ease"

firstTabContent.style.transition = "1s ease"
secondTabContent.style.transition = "1s ease"
thirdTabContent.style.transition = "1s ease"


firstTabContent.style.display = 'block' ;
firstTabButton.style.backgroundColor = '#551a8b';
firstTabButton.style.color = '#fff';
secondTabContent.style.display = 'none';
thirdTabContent.style.display = 'none';
secondTabButton.style.backgroundColor = '#c0c0c0';
thirdTabButton.style.backgroundColor = '#c0c0c0';

firstTabButton.onclick = () =>{
    firstTabContent.style.display = 'block' ;
    firstTabButton.style.backgroundColor = '#551a8b';
    firstTabButton.style.color = '#fff';
    secondTabContent.style.display = 'none';
    thirdTabContent.style.display = 'none';
    secondTabButton.style.backgroundColor = '#c0c0c0';
    thirdTabButton.style.backgroundColor = '#c0c0c0';
    packages.style.height = "170vh";
}

secondTabButton.onclick = () =>{
    secondTabContent.style.display = 'block' ;
    secondTabButton.style.backgroundColor = '#551a8b';
    secondTabButton.style.color = '#fff';
    firstTabContent.style.display = 'none';
    thirdTabContent.style.display = 'none';
    firstTabButton.style.backgroundColor = '#c0c0c0';
    thirdTabButton.style.backgroundColor = '#c0c0c0';
    packages.style.height = "170vh";

}

thirdTabButton.onclick = () =>{
    thirdTabContent.style.display = 'block' ;
    thirdTabButton.style.backgroundColor = '#551a8b';
    thirdTabButton.style.color = '#fff';
    secondTabContent.style.display = 'none';
    firstTabContent.style.display = 'none';
    secondTabButton.style.backgroundColor = '#c0c0c0';
    firstTabButton.style.backgroundColor = '#c0c0c0';
    packages.style.height = "110vh";

}


AOS.init({
    offset: 120, // offset (in px) from the original trigger point
    delay: 100, // values from 0 to 3000, with step 50ms
    duration: 1000
});
