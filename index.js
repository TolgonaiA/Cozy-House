
const data = [
  {
    id: 1,
    name: "Katrine",
    img: "src/img/friends/pets-katrine.png",
    type: "Cat",
    breed: "British Shorthair",
    description: "Katrine is a beautiful girl. She is as soft as the finest velvet with a thick lush fur. Will love you until the last breath she takes as long as you are the one. She is picky about her affection. She loves cuddles and to stretch into your hands for a deeper relaxations.",
    age: "6 months",
    inoculations: ["panleukop"],
    diseases: ["none"],
    parasites: ["none"]
  },
  {
    id: 2,
    name: "Jennifer",
    img: "src/img/friends/pets-jennifer.png",
    type: "Dog",
    breed: "Labrador",
    description: "Jennifer is a sweet 2 months old Labrador that is patiently waiting to find a new forever home. This girl really enjoys being able to go outside to run and play, but won't hesitate to play up a storm in the house if she has all of her favorite toys.",
    age: "2 months",
    inoculations: ["none"],
    diseases: ["none"],
    parasites: ["none"]
  },
  {
    id: 3,
    name: "Woody",
    img: "src/img/friends/pets-woody.png",
    type: "Dog",
    breed: "Golden Retriever",
    description: "Woody is a handsome 3 1/2 year old boy. Woody does know basic commands and is a smart pup. Since he is on the stronger side, he will learn a lot from your training. Woody will be happier when he finds a new family that can spend a lot of time with him.",
    age: "3 years 6 months",
    inoculations: ["adenovirus", "distemper"],
    diseases: ["right back leg mobility reduced"],
    parasites: ["none"]
  },
  {
    id: 4,
    name: "Sophia",
    img: "src/img/friends/pets-sophia.png",
    type: "Dog",
    breed: "Shih tzu",
    description: "Sophia here and I'm looking for my forever home to live out the best years of my life. I am full of energy. Everyday I'm learning new things, like how to walk on a leash, go potty outside, bark and play with toys and I still need some practice.",
    age: "1 month",
    inoculations: ["parvov"],
    diseases: ["none"],
    parasites: ["none"]
  },
  {
    id: 5,
    name: "Timmy",
    img: "src/img/friends/pets-timmy.png",
    type: "Cat",
    breed: "British Shorthair",
    description: "Timmy is an adorable grey british shorthair male. He loves to play and snuggle. He is neutered and up to date on age appropriate vaccinations. He can be chatty and enjoys being held. Timmy has a lot to say and wants a person to share his thoughts with.",
    age: "2 years 3 months",
    inoculations: ["calicivirus", "viral rhinotracheitis"],
    diseases: ["kidney stones"],
    parasites: ["none"]
  },
  {
    id: 6,
    name: "Charly",
    img: "src/img/friends/pets-charly.png",
    type: "Dog",
    breed: "Terrier",
    description: "This cute boy, Charly, is three years old and he likes adults and kids. He isn’t fond of many other dogs, so he might do best in a single dog home. Charly has lots of energy, and loves to run and play. We think a fenced yard would make him very happy.",
    age: "8 years",
    inoculations: ["leptospirosis"],
    diseases: ["deafness", "blindness"],
    parasites: ["lice", "fleas"]
  },
  {
    id: 7,
    name: "Scarlett",
    img: "src/img/friends/pets-scarlet.png",
    type: "Dog",
    breed: "Jack Russell Terrier",
    description: "Scarlett is a happy, playful girl who will make you laugh and smile. She forms a bond quickly and will make a loyal companion and a wonderful family dog or a good companion for a single individual too since she likes to hang out and be with her human.",
    age: "3 months",
    inoculations: ["parainfluenza"],
    diseases: ["none"],
    parasites: ["none"]
  },
  {
    id: 8,
    name: "Freddie",
    img: "src/img/friends/pets-freddie.png",
    type: "Cat",
    breed: "British Shorthair",
    description: "Freddie is a little shy at first, but very sweet when he warms up. He likes playing with shoe strings and bottle caps. He is quick to learn the rhythms of his human’s daily life. Freddie has bounced around a lot in his life, and is looking to find his forever home.",
    age: "2 months",
    inoculations: ["rabies"],
    diseases: ["none"],
    parasites: ["none"]
  }
]

let petsData = []

let pageIndex = 1

const burger = document.getElementById('burger');
const menu = document.getElementById('menu');
const navigation = document.getElementById('navigation');
const overlay = document.getElementById('overlay');
const navLinks = document.querySelectorAll('.navigation__link');
const pageBtn = document.getElementById('page')
const pageFirst = document.getElementById('pageFirst')
const pageLast = document.getElementById('pageLast')
const pageNext = document.getElementById('pageNext')
const pagePrev = document.getElementById('pagePrev')
const modal = document.querySelector('.modal')
const petsBlock = document.querySelector('.pets__block');



window.onload = function() {

  burgerClickHandler();
  closeMenuHandler();

  let screenWidth = document.body.clientWidth;

  if (slider) {
    sliderInit()
  }

  generateFirstCards()
  generateAllCards()
  console.log(petsData)

  if (petsBlock) {
    pageBtn.innerHTML = pageIndex
    showFirstPage(screenWidth)
  }
}

//BURGER

const navLogo = document.querySelector('.navigation_logo')
const logo = document.getElementById('logo')

const toggleItem = () => {
  menu.classList.toggle('promo__navigation_show');
  burger.classList.toggle('burger_vertical');
  // overlay.classList.toggle('overlay_active');
  if (!burger.classList.contains('burger_vertical')){
    document.body.classList.remove('scroll_prohibit')
    navLogo.style.opacity = '0'
    navLogo.style.transitionDelay = '0s'
    logo.style.opacity = '1'
    logo.style.transition = '3s'
    overlay.style.transition = '2s'
    overlay.style.opacity = '0'
    setTimeout(() => overlay.classList.add('overlay_active'), 1000)
  } 
}

const burgerClickHandler = () => burger.addEventListener('click', e => {
  e.stopPropagation();

  toggleItem();

  if (burger.classList.contains('burger_vertical')){
    
    document.body.classList.add('scroll_prohibit')
    navLogo.style.opacity = '1'
    navLogo.style.transitionDelay = '1s'
    logo.style.opacity = '0'
    logo.style.transition = '3s'
    
    setTimeout(() => {
      overlay.classList.remove('overlay_active')
      overlay.style.transition = '1s'
      overlay.style.opacity = '0.5'
    }, 1000)

  } else {
    document.body.classList.remove('scroll_prohibit')
    navLogo.style.opacity = '0'
    navLogo.style.transitionDelay = '0s'
    logo.style.opacity = '1'
    logo.style.transition = '3s'
    overlay.style.transition = '2s'
    overlay.style.opacity = '0'
    setTimeout(() => overlay.classList.add('overlay_active'), 1000)
  }
  
});

const closeMenuHandler = () => document.addEventListener('click', e => {
  let target = e.target;
  let its_menu = target == menu || menu.contains(target);
  let burger_is_active = burger.classList.contains('burger_vertical');
  let menu_is_active = menu.classList.contains('promo__navigation_show');
  
  if (!its_menu && menu_is_active && burger_is_active) {
    toggleItem();
  }
})

for (const navLink of navLinks) {
  navLink.addEventListener('click', () => {
    toggleItem();
    document.body.classList.remove('scroll_prohibit')
  })
}


//SLIDER


const slider = document.querySelector('.slider__wrap');
const sliderBlock = document.querySelector('.slider_block');

let currentCards = [];
let nextCards = [];
let prevCards = [];

let activePets = []

const sliderInit = () => {
  nextCards = generateNextSliderCards();
  currentCards = [...nextCards]
  nextCards = []
  nextCards = generateNextSliderCards();
  prevCards = [...currentCards];
  currentCards = []
  currentCards = [...nextCards]
  nextCards = []
  nextCards = generateNextSliderCards()
  insertCardsToSlider(prevCards)
  insertCardsToSlider(currentCards)
  insertCardsToSlider(nextCards)
}

const getRandomCard = (dataArr) => {
  let index = Math.floor(Math.random() * dataArr.length);
  return dataArr[index]
}

function createPetCard(card) {
  let cardInner = `<img src="${card.img}" alt="${card.name}">
    <p class="pet__title">${card.name}</p>
    <button class="button button_transparent">Learn more</button>`
  let petCard = document.createElement('div');
  petCard.className = 'pet';
  petCard.setAttribute('id', `${card.id}`)
  petCard.innerHTML = cardInner;
  petCard.addEventListener('click', () => cardClickHandler(card.id))
  return petCard
}

const insertCardsToSlider = (arr) => {
  let cards = document.createElement('div');
  cards.classList.add('slider_item')
  for (const card of arr) {
    let petCard = createPetCard(card)
    cards.append(petCard)
    const childrenLength = cards.children.length
    if (childrenLength >= 3) {
      cards.children[2].classList.add('pet_mobile', 'pet_tablet-bg')
      cards.children[1].classList.add('pet_mobile', 'pet_tablet-sm')
    }
  }
  
  sliderBlock.appendChild(cards)
}



const generateNextSliderCards = (arr = data) => {
  let cards = []
  while (cards.length < 3) {
    let card = getRandomCard(arr);
    if (cards.includes(card) || currentCards.length > 0 && currentCards.includes(card)) {
      continue
    } else {
      cards.push(card)
    }
  }
  return cards
}



const clickRightHandler = () => {
  let screenWidth = document.body.clientWidth;
  if (screenWidth > 1279) {
    sliderBlock.classList.add('transition-right')
  } else if (screenWidth > 767 && screenWidth <= 1279) {
    sliderBlock.classList.add('transition-right-tablet')
  } else if (screenWidth <= 767) {
    sliderBlock.classList.add('transition-right-mobile')
  }
  
  sliderBtnRight.removeEventListener('click', clickRightHandler)
  sliderBtnLeft.removeEventListener('click', clickLeftHandler)
  // slider.innerHTML = ''
  // prevCards = []
  // prevCards = [...currentCards]
  // currentCards = []
  // currentCards = [...nextCards]
  // nextCards = generateNextSliderCards()
  // insertCardsToSlider()
}

const clickLeftHandler = () => {
  // slider.innerHTML = ''
  let screenWidth = document.body.clientWidth;
  if (screenWidth > 1279) {
    sliderBlock.classList.add('transition-left')
  } else if (screenWidth > 767 && screenWidth <= 1279) {
    sliderBlock.classList.add('transition-left-tablet')
  } else if (screenWidth <= 767) {
    sliderBlock.classList.add('transition-left-mobile')
  }
  
  sliderBtnLeft.removeEventListener('click', clickLeftHandler)
  sliderBtnRight.removeEventListener('click', clickRightHandler)
  // nextCards = []
  // nextCards = [...currentCards]
  // currentCards = []
  // currentCards = [...prevCards]
  // prevCards = generateNextSliderCards()
  // insertCardsToSlider()
}

sliderBlock && sliderBlock.addEventListener('animationend', (event) => {
  console.log(event)
  if (event.animationName === 'moveRight' || event.animationName === 'moveRightTablet' || event.animationName === 'moveRightMobile' ) {
    prevCards = []
    prevCards = [...currentCards]
    currentCards = []
    currentCards = [...nextCards]
    nextCards = generateNextSliderCards()
    sliderBlock.innerHTML = ''
    insertCardsToSlider(prevCards)
    insertCardsToSlider(currentCards)
    insertCardsToSlider(nextCards)
  } else if (event.animationName === 'moveLeft' || event.animationName === 'moveLeftTablet' || event.animationName === 'moveLeftMobile') {
      nextCards = []
      nextCards = [...currentCards]
      currentCards = []
      currentCards = [...prevCards]
      prevCards = generateNextSliderCards()
      sliderBlock.innerHTML = ''
      insertCardsToSlider(prevCards)
      insertCardsToSlider(currentCards)
      insertCardsToSlider(nextCards)
  }
  let screenWidth = document.body.clientWidth;
    sliderBlock.classList.remove('transition-left')
    sliderBlock.classList.remove('transition-right')

    sliderBlock.classList.remove('transition-left-tablet')
    sliderBlock.classList.remove('transition-right-tablet')

    sliderBlock.classList.remove('transition-left-mobile')
    sliderBlock.classList.remove('transition-right-mobile')
  
  sliderBtnLeft.addEventListener('click', clickLeftHandler)
  sliderBtnRight.addEventListener('click', clickRightHandler)
})

const sliderBtnLeft = document.querySelector('.slider__btn_left');
const sliderBtnRight = document.querySelector('.slider__btn_right');

sliderBtnLeft && sliderBtnLeft.addEventListener('click', clickLeftHandler)
sliderBtnRight && sliderBtnRight.addEventListener('click', clickRightHandler)





//POPUP



function cardClickHandler(id) {
  const card = data.find(el => el.id === id)
  overlay.classList.toggle('overlay_active');
  modal.classList.toggle('modal_active');
  if (modal.classList.contains('modal_active')) {
    overlay.style.opacity = '1'
    overlay.addEventListener('click', (event) => {
      if (event.target.id === 'overlay') {
        closeModal()
      }
      
    }) 
    document.body.classList.add('scroll_prohibit')

  } 
  let modalBtn = '<button class="slider__btn modal__btn" onClick="closeModal()"></button>'
  let modalInner = `
  <div class="modal__wrap">
    <img src="${card.img}" alt="${card.name}">
    <div>
      <h4>${card.name}</h4>
      <span>${card.type} - ${card.breed}</span>
      <p>${card.description}</p>
      <ul>
        <li><b>Age: </b> ${card.age}</li>
        <li><b>Inoculations: </b> ${card.inoculations}</li>
        <li><b>Diseases: </b> ${card.diseases}</li>
        <li><b>Parasites: </b> ${card.parasites}</li>
      </ou>
    </div>`
    + modalBtn + 
  `</div>
  `
  modal.innerHTML = modalInner;
}



function closeModal() {
  overlay.classList.add('overlay_active');
  modal.classList.remove('modal_active');
  document.body.classList.remove('scroll_prohibit')
  modal.innerHTML = '';
  overlay.style.opacity = '0'
}


//Pagination


function generateFirstCards() {
  let randomArr = []
    while (randomArr.length < 8) {
      let pet = getRandomCard(data)
      if(petsData.length === 0) {
        if (randomArr.includes(pet)) {
          continue
        } else {
          randomArr.push(pet)
        }
      }
}
petsData.push(randomArr)
}

function generateNextCards() {
  let randomArr = []
  let lastArr = petsData[petsData.length - 1].slice(4)
  while(randomArr.length < 4) {
    let pet = getRandomCard(data)
    if (lastArr.includes(pet) || randomArr.includes(pet)) {
      continue
    } else {
      randomArr.push(pet)
    }
  }

  while (randomArr.length < 8) {
    let pet = getRandomCard(data)
    if (randomArr.includes(pet)) {
      continue
    } else {
      randomArr.push(pet)
    }
  }

  petsData.push(randomArr)
}

function generateAllCards() {
  while (petsData.length < 6) {
    generateNextCards()
  }

  petsData = petsData.flat()
}



function insertCardsToPetsBlock() {
  for (const card of activePets) {
    let petCard = createPetCard(card)
    
    petsBlock.appendChild(petCard)
  }
}

function showFirstPage(screen) {
  if (screen >= 1176) {
    activePets = petsData.slice(0,8)
    insertCardsToPetsBlock()
  }

  if (screen < 1176 && screen > 767) {
    activePets = petsData.slice(0,6)
    insertCardsToPetsBlock()
  }

  if (screen <= 767) {
    activePets = petsData.slice(0,3)
    insertCardsToPetsBlock()
  }
}

function pageFirstHandler() {
  pageFirst.addEventListener('click', () => {
    let screenWidth = document.body.clientWidth;
})
}


  
pageLast && pageLast.addEventListener('click', () => {
  petsBlock.innerHTML = ''
  let screenWidth = document.body.clientWidth;
  if (screenWidth >= 1176) {
    activePets = petsData.slice(40)
    insertCardsToPetsBlock()
    pageBtn.innerHTML = 6
    pageIndex = 6
  }

  if (screenWidth < 1176 && screenWidth > 767) {
    activePets = petsData.slice(42)
    insertCardsToPetsBlock()
    pageBtn.innerHTML = 8
    pageIndex = 8
  }

  if (screenWidth <= 767) {
    activePets = petsData.slice(45)
    insertCardsToPetsBlock()
    pageBtn.innerHTML = 16
    pageIndex = 16
  }

  pageLast.classList.add('button_disabled')
  pageLast.setAttribute('disabled', 'disabled')
  pageNext.classList.add('button_disabled')
  pageNext.setAttribute('disabled', 'disabled')
  pageFirst.classList.remove('button_disabled')
  pageFirst.removeAttribute('disabled', 'disabled')
  pagePrev.classList.remove('button_disabled')
  pagePrev.removeAttribute('disabled', 'disabled')
})

pageFirst && pageFirst.addEventListener('click', () => {
  petsBlock.innerHTML = ''
  let screenWidth = document.body.clientWidth;
  if (screenWidth >= 1176) {
    activePets = petsData.slice(0,8)
    insertCardsToPetsBlock()
  }

  if (screenWidth < 1176 && screenWidth > 767) {
    activePets = petsData.slice(0,6)
    insertCardsToPetsBlock()
  }

  if (screenWidth <= 767) {
    activePets = petsData.slice(0,3)
    insertCardsToPetsBlock()
  }
  pageBtn.innerHTML = 1
  pageIndex = 1

  pageFirst.classList.add('button_disabled')
  pageFirst.setAttribute('disabled', 'disabled')
  pagePrev.classList.add('button_disabled')
  pagePrev.setAttribute('disabled', 'disabled')
  pageLast.classList.remove('button_disabled')
  pageLast.removeAttribute('disabled', 'disabled')
  pageNext.classList.remove('button_disabled')
  pageNext.removeAttribute('disabled', 'disabled')
})


pageNext && pageNext.addEventListener('click', (event) => {
  petsBlock.innerHTML = ''
  let screenWidth = document.body.clientWidth;
  pageIndex++
  pageBtn.innerHTML = pageIndex

  if(pageIndex > 1) {
    pageFirst.classList.remove('button_disabled')
    pageFirst.removeAttribute('disabled', 'disabled')
    pagePrev.classList.remove('button_disabled')
    pagePrev.removeAttribute('disabled', 'disabled')
  }

  if (screenWidth >= 1176) {
    let count = pageIndex * 8
    activePets = petsData.slice(count-8, count)
    insertCardsToPetsBlock()
    if(pageIndex === 6) {
      pageLast.classList.add('button_disabled')
      pageLast.setAttribute('disabled', 'disabled')
      pageNext.classList.add('button_disabled')
      pageNext.setAttribute('disabled', 'disabled')
    }
  }

  if (screenWidth < 1176 && screenWidth > 767) {
    let count = pageIndex * 6
    activePets = petsData.slice(count-6, count)
    insertCardsToPetsBlock()
    if(pageIndex >= 8) {
      pageLast.classList.add('button_disabled')
      pageLast.setAttribute('disabled', 'disabled')
      pageNext.classList.add('button_disabled')
      pageNext.setAttribute('disabled', 'disabled')
    }
  }

  if (screenWidth <= 767) {
    let count = pageIndex * 3
    activePets = petsData.slice(count-3, count)
    insertCardsToPetsBlock()
    if(pageIndex === 16) {
      pageLast.classList.add('button_disabled')
      pageLast.setAttribute('disabled', 'disabled')
      pageNext.classList.add('button_disabled')
      pageNext.setAttribute('disabled', 'disabled')
    }
  }
})



pagePrev && pagePrev.addEventListener('click', (event) => {
  petsBlock.innerHTML = ''
  let screenWidth = document.body.clientWidth;
  pageIndex--
  pageBtn.innerHTML = pageIndex

  

  if(pageIndex === 1) {
    pageFirst.classList.add('button_disabled')
    pageFirst.setAttribute('disabled', 'disabled')
    pagePrev.classList.add('button_disabled')
    pagePrev.setAttribute('disabled', 'disabled')
    pageLast.classList.remove('button_disabled')
    pageLast.removeAttribute('disabled', 'disabled')
    pageNext.classList.remove('button_disabled')
    pageNext.removeAttribute('disabled', 'disabled')
  }


  if (screenWidth >= 1176) {
    let count = pageIndex * 8
    activePets = petsData.slice(count-8, count)
    insertCardsToPetsBlock()
    if(pageIndex < 6) {
      pageLast.classList.remove('button_disabled')
      pageLast.removeAttribute('disabled', 'disabled')
      pageNext.classList.remove('button_disabled')
      pageNext.removeAttribute('disabled', 'disabled')
    }
  }

  if (screenWidth < 1176 && screenWidth > 767) {
    let count = pageIndex * 6
    activePets = petsData.slice(count-6, count)
    insertCardsToPetsBlock()
    if(pageIndex < 8) {
      pageLast.classList.remove('button_disabled')
      pageLast.removeAttribute('disabled', 'disabled')
      pageNext.classList.remove('button_disabled')
      pageNext.removeAttribute('disabled', 'disabled')
    }
  }

  if (screenWidth <= 767) {
    let count = pageIndex * 3
    activePets = petsData.slice(count-3, count)
    insertCardsToPetsBlock()
    if(pageIndex < 16) {
      pageLast.classList.remove('button_disabled')
      pageLast.removeAttribute('disabled', 'disabled')
      pageNext.classList.remove('button_disabled')
      pageNext.removeAttribute('disabled', 'disabled')
    }
  }
})


window.addEventListener('resize', () => {
  let screenWidth = document.body.clientWidth;
  if(screenWidth > 1176) {
    if (activePets.length === 6) {
      pageIndex = parseInt(pageBtn.innerHTML)
      petsBlock.innerHTML = ''
      if (pageIndex >= 6) {
        pageIndex = 6
        pageLast.classList.add('button_disabled')
        pageLast.setAttribute('disabled', 'disabled')
        pageNext.classList.add('button_disabled')
        pageNext.setAttribute('disabled', 'disabled')
      }
      let count = pageIndex * 8
      activePets = petsData.slice(count-8, count)
      pageBtn.innerHTML = pageIndex
      insertCardsToPetsBlock()
    }
    
  }

  if(screenWidth < 1176 && screenWidth > 767) {
    if (activePets.length === 8) {
      pageIndex = parseInt(pageBtn.innerHTML)
      petsBlock.innerHTML = ''
      if(pageIndex === 6) {
        pageIndex = 8
      }
      let count = pageIndex * 6
      activePets = petsData.slice(count-6, count)
      pageBtn.innerHTML = pageIndex
      insertCardsToPetsBlock()
    }

    if (activePets.length === 3) {
      pageIndex = parseInt(pageBtn.innerHTML)
      petsBlock.innerHTML = ''
      if (pageIndex >= 8) {
        pageIndex = 8
        pageLast.classList.add('button_disabled')
        pageLast.setAttribute('disabled', 'disabled')
        pageNext.classList.add('button_disabled')
        pageNext.setAttribute('disabled', 'disabled')
      }
      let count = pageIndex * 6
      activePets = petsData.slice(count-6, count)
      pageBtn.innerHTML = pageIndex
      insertCardsToPetsBlock()
    }

  }

  if(screenWidth <= 767) {
    pageIndex = parseInt(pageBtn.innerHTML)
    petsBlock.innerHTML = ''
    let count = pageIndex * 3
    activePets = petsData.slice(count-3, count)
    insertCardsToPetsBlock()
    if (pageIndex === 8) {
      pageLast.classList.remove('button_disabled')
      pageLast.removeAttribute('disabled', 'disabled')
      pageNext.classList.remove('button_disabled')
      pageNext.removeAttribute('disabled', 'disabled')
    }
  }
})



















  
