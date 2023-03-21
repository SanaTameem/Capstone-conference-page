// featured speakers section
const featuredSpeakers = document.createElement('section');
featuredSpeakers.classList.add('featured-speakers');
document.body.appendChild(featuredSpeakers);

// featured title
const featuredTitle = document.createElement('h2');
featuredTitle.classList.add('speakers-title');
featuredTitle.textContent = 'Featured Speakers';
featuredSpeakers.appendChild(featuredTitle);

// featured title line
const featuredTitleLine = document.createElement('hr');
// featuredTitleLine.src = './Assets/icons8-line-32.png';
featuredTitleLine.classList.add('underline');
featuredSpeakers.appendChild(featuredTitleLine);

// featured speakers
const speakers = [
  {
    id: 1,
    name: 'Deen Freelon',
    position: 'professor',
    intro: 'Deen Freelon is an associate professor at the UNC Hussman School of Journalism and Media at the University of North Carolina and a principal researcher.',
    photo: './Assets/speaker1.jpg',
  },

  {
    id: 2,
    name: 'Martha Lane Fox',
    position: 'businesswoman, philanthropist',
    intro: 'Martha Lane Fox, is a British businesswoman, philanthropist and public servant. She co-founded Last Minute during the dotcom boom of the early 2000s.',
    photo: './Assets/speaker2.png',
  },

  {
    id: 3,
    name: 'Matthew Weber',
    position: 'professor',
    intro: 'Matthew Weber is an associate professor of Communication and a member of Rutgers\'NetSCI Network Science lab.',
    photo: './Assets/speaker3.jpg',
  },

  {
    id: 4,
    name: 'Daniel J. Weitzner',
    position: 'Scientist',
    intro: 'Daniel J. Weitzner. Founding Director, MIT Internet Policy Research Initiative (IPRI) 3Com Founders Senior Research Scientist, MIT Computer Science.',
    photo: './Assets/speaker4.jpg',
  },

  {
    id: 5,
    name: 'Jennifer Zhu Scott',
    position: 'entrepreneur and investor',
    intro: 'is an entrepreneur and investor based in Hong Kong, specialized in blockchain, Artificial Intelligence (AI) and other deep tech.',
    photo: './Assets/speaker5.png',
  },

  {
    id: 6,
    name: 'Sinan Aral',
    position: 'Author and business analytic',
    intro: 'Sinan Aral a global authority on business analytics; award-winning researcher; entrepreneur, and venture capitalist.',
    photo: './Assets/speaker6.jpg',
  },
];

// speaker-container part
const speakerContainer = document.createElement('div');
speakerContainer.classList.add('speaker-container');
featuredSpeakers.appendChild(speakerContainer);

const htmlOfSpeakers = (id, name, position, intro, photo) => `  
<div class="speaker speaker-${id}">
        <div class="speaker-photo-container">
            <img src="${photo}" alt="speaker-photo" class="speaker-img">
        </div>
        <div class="speaker-text-container">   
            <h3 class="speaker-name">${name}</h3>
            <p class="speaker-position">${position}</p>
            <hr class="underline2"/> 
            <p class="speaker-intro">${intro}</p>
        </div> 
    </div>
`;

speakers.forEach((speaker) => {
  const htmlAdd = htmlOfSpeakers(
    speaker.id,
    speaker.name,
    speaker.position,
    speaker.intro,
    speaker.photo,
  );
    // myWorksSection.insertAdjacentHTML('afterend',htmlAdd);
  speakerContainer.innerHTML += htmlAdd;
});

// button more speakers
const SpeakerbuttonDiv = document.createElement('div');
const speakerButton = document.createElement('button');
speakerButton.classList.add('speakerBtn');
SpeakerbuttonDiv.classList.add('button-container');
speakerButton.innerHTML = 'More';
const speakerBtnIcon = document.createElement('p');
speakerBtnIcon.classList.add('btnIcon');
speakerBtnIcon.innerHTML = '&#94';
speakerButton.appendChild(speakerBtnIcon);
speakerContainer.appendChild(SpeakerbuttonDiv);
SpeakerbuttonDiv.appendChild(speakerButton);


// more speakers button event listener:
const moreSpeakers = document.querySelector('.speakerBtn');
const arraySpeakers = [
  document.querySelector('.speaker-3'),
  document.querySelector('.speaker-4'),
  document.querySelector('.speaker-5'),
  document.querySelector('.speaker-6'),
];
moreSpeakers.addEventListener('click', () => {
  arraySpeakers.forEach((speaker) => {
    speaker.style.display = 'flex';
  });
});

// mobile menu :
// const homepage = document.querySelector('.homepage');
const moreBtnIcn = document.querySelector('.btnIcon');
const closeBtn = document.querySelector('.close-btn');
const humburger = document.querySelector('.hamburger');
const mobileMenu = document.querySelector('.mobile-menu-container');

humburger.addEventListener('click', () => {
  mobileMenu.style.display = "block";
  moreBtnIcn.style.filter = 'blur(10px)';
});
closeBtn.addEventListener('click', ()=>{
  mobileMenu.style.display = "none";
  moreBtnIcn.style.filter = 'blur(0)';
});
mobileMenu.addEventListener('click', ()=>{
  mobileMenu.style.display = "none";
  moreBtnIcn.style.filter = 'blur(0)';
});