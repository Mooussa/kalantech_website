const doctors = [
    {
      name: "Mr. Alpha A Bane",
      position: "Web developper",
      image: "img/team-1.jpg",
      description: "Spécialiste en Tutos youtube avec 3 ans d'expérience à l'Orange Digital Center."
    },
    {
      name: "Mr. Moussa Coulibaly",
      position: "Engeneer Cloud/Devops",
      image: "img/team-2.jpg",
      description: "Passionné de l'electronique a vue changer ses passions vers le cloud et les monnaies electronique."
    },
    {
      name: "Mr. Mohamed Traore",
      position: "Developper Intelligence artificielle",
      image: "img/team-3.jpg",
      description: "Expert en intelligence artificielle, pour lui le monde est comme une bicyclette."
    },
    {
      name: "Mr. Mahamadou Sidibe",
      position: "Designer/Maintenancier",
      image: "img/team-4.jpg",
      description: "Tout le temps incompris par ses camarades, pour lui le monde se porterait mieux s'ils connaissaient le IKIGAI."
    },
    {
      name: "Mr. Babry Galedou",
      position: "Mobile Developper",
      image: "img/team-5.jpg",
      description: "Depuis ODC il aime depenser son argent dans des bonnes bouffes au lieu de financer son appli de gestion de depense."
    }
  ];
  
  let currentIndex = 2;
  
  const carousel = document.getElementById("carousel");
  const pagination = document.getElementById("pagination");
  
  function renderCarousel() {
    carousel.innerHTML = "";
  
    doctors.forEach((doctor, index) => {
      const card = document.createElement("div");
      card.classList.add("card");
  
      const img = document.createElement("img");
      img.src = doctor.image;
      img.alt = doctor.name;
      img.onclick = () => openModal(doctor);
  
      const info = document.createElement("div");
      info.className = "info";
      info.innerHTML = `<h3>${doctor.name}</h3><p>${doctor.position}</p>`;
  
      card.appendChild(img);
      card.appendChild(info);
  
      const position = index - currentIndex;
  
      if (position === 0) card.classList.add("center");
      else if (position === -1) card.classList.add("left1");
      else if (position === -2) card.classList.add("left2");
      else if (position === 1) card.classList.add("right1");
      else if (position === 2) card.classList.add("right2");
  
      carousel.appendChild(card);
    });
  
    pagination.textContent = `${currentIndex + 1} / ${doctors.length}`;
  }
  
  function prevSlide() {
    if (currentIndex > 0) {
      currentIndex--;
      renderCarousel();
    }
  }
  
  function nextSlide() {
    if (currentIndex < doctors.length - 1) {
      currentIndex++;
      renderCarousel();
    }
  }
  
  // Modal logic
  function openModal(doctor) {
    document.getElementById("modal-name").textContent = doctor.name;
    document.getElementById("modal-position").textContent = doctor.position;
    document.getElementById("modal-description").textContent = doctor.description;
    document.getElementById("modal").style.display = "flex";
  }
  
  function closeModal() {
    document.getElementById("modal").style.display = "none";
  }
  
  renderCarousel();
  