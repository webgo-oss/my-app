function toggleScaleUp(book) {
    book.classList.toggle('scaled-up');
  }
  document.getElementById("download").addEventListener('click',()=>{
    const link=document.createElement("a");
    link.href="example.txt";
    link.download="example.txt";
    link.click();
  });
const today = new Date();
const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
const dayName = days[today.getDay()];
const dayNumber = String(today.getDate()).padStart(2, '0');
document.getElementById("week").innerText=`${dayName}`;
document.getElementById("date").innerText=`${dayNumber}`;
function toggleMenu() {
      document.querySelector("nav").classList.toggle("show");
    }
    const slides = [
    { 
      img: 'belowzero.jpg', 
      text: 'below  zero', 
      description: 'Below Zero is a website that takes you on a journey to the North Pole. Discover the stunning landscapes, wildlife, and extreme conditions of the Arctic, and learn about the unique challenges of life at the worlds northernmost point.',
      link: 'https://example.com/page1',
      bgCenter: '#B2D3EB', 
      bgEdge: '#4474a3',
      textColor: '#0099fa',     
      descColor: '#e6f4f1',      
      buttonColor: '#effaff'    
    },
    { 
      img: 'clas.jpg', 
      text: 'crack code ', 
      description: 'Crack Code is an online platform designed to help you master programming languages. Whether you re a beginner or looking to sharpen your skills, Crack Code offers easy-to-follow tutorials, challenges, and resources to make coding simple and fun.',
      link: 'https://example.com/page2',
      bgCenter: '#bfd4bf', 
      bgEdge: '#0061d1',
      textColor: '#004ab5',
      descColor: '#e6f4f1',
      buttonColor: '#d9f9d9'
    },
    { 
      img: 'optimus.jpg', 
      text: 'optimus', 
      description: 'optimus is an online platform that offers a wide range of cars for sale, from sleek sedans to powerful SUVs. Explore detailed listings, compare models, and find the perfect car that suits your needs and style.',
      link: 'https://example.com/page3',
      bgCenter: '#000000', 
      bgEdge: '#4b4a54',
      textColor: '#677381',
      descColor: '#e6f4f1',
      buttonColor: '#82a0aa'
    },
    { 
      img: 'web.jpg', 
      text: 'adop', 
      description: 'Adopt is a website that helps connect people with animals looking for loving homes. It provides a simple, user-friendly platform to browse available pets, learn about adoption processes, and find the perfect companion.',
      link: 'https://example.com/page3',
      bgCenter: '#fff', 
      bgEdge: 'palegreen',
      textColor: '#000',
      descColor: '#000',
      buttonColor: '#000'
    },
    { 
      img: 'galaxy explorere.jpg', 
      text: 'galaxy explo', 
      description: 'Galaxy Explorer is a website that takes you on an interactive journey through the solar system. Explore planets, moons, asteroids, and more, while learning fascinating facts about our cosmic neighborhood.',
      link: 'https://example.com/page3',
      bgCenter: '#000000', 
      bgEdge: '#4b4a54',
      textColor: '#b9b9b9',
      descColor: '#e6f4f1',
      buttonColor: '#82a0aa'
    },
    { 
      img: 'ocean.jpg', 
      text: 'deep', 
      description: 'Deep is a website dedicated to raising awareness about ocean pollution. Learn about the impact of waste on marine life, discover environmental initiatives, and find ways to help protect our oceans from further damage.',
      link: 'https://example.com/page3',
      bgCenter: '#717eb2', 
      bgEdge: '#0b4d9f',
      textColor: '#004292',
      descColor: '#b0ccff',
      buttonColor: '#f1f1e6'
    },
  ];
  
  let current = 0;
  const image = document.getElementById('image');
  const bgText = document.getElementById('bg-text');
  const description = document.getElementById('description');
  const linkBtn = document.getElementById('link-btn');
  const body = document.body;
  const back=document.getElementById("back")
  
  function triggerSlide(direction) {

    image.classList.remove('blur-in');
    bgText.classList.remove('blur-in');
    description.classList.remove('blur-in');
    linkBtn.classList.remove('blur-in');
    
    image.classList.add('blur-out');
    bgText.classList.add('blur-out');
    description.classList.add('blur-out');
    linkBtn.classList.add('blur-out');
  
    setTimeout(() => {
      if (direction === 'right') {
        current = (current + 1) % slides.length;
      } else {
        current = (current - 1 + slides.length) % slides.length;
      }

      image.src = `${slides[current].img}`;
      bgText.textContent = slides[current].text;
      description.textContent = slides[current].description;
      linkBtn.href = slides[current].link;
      linkBtn.textContent = "Visit " + slides[current].text;

back.style.background = `radial-gradient(circle at center, ${slides[current].bgCenter} 0%, ${slides[current].bgEdge} 100%)`;

      bgText.style.color = slides[current].textColor;
      description.style.color = slides[current].descColor;
      linkBtn.style.color = slides[current].buttonColor;

      image.classList.remove('blur-out');
      bgText.classList.remove('blur-out');
      description.classList.remove('blur-out');
      linkBtn.classList.remove('blur-out');
  
      setTimeout(() => {
        image.classList.add('blur-in');
        bgText.classList.add('blur-in');
        description.classList.add('blur-in');
        linkBtn.classList.add('blur-in');
      }, 50);
    }, 500);
  }
  
  document.getElementById('right-btn').addEventListener('click', () => {
    triggerSlide('right');
  });
  
  document.getElementById('left-btn').addEventListener('click', () => {
    triggerSlide('left');
  });
 
  window.onload = function () {
    setTimeout(function () {
      document.getElementById('loading-screen').style.display = 'none';
      // document.getElementById('main-content').style.display = 'block';
    }, 2000);
  };
  const contactform = document.getElementById("contactform");
  const messageform=document.getElementById("messageform");

  contactform.addEventListener("submit", function(event) {
    event.preventDefault(); 
    alert("thanks for the contact");
    myForm.reset(); 
  });
  messageform.addEventListener("submit", function(event) {
    event.preventDefault(); 
    alert("thanks for the feedback/query ");
    myForm.reset(); 
  });