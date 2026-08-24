const destinations = {
  beach: [
    {
      name: "Bora Bora, French Polynesia",
      description: "Turquoise lagoon, overwater bungalows, and pristine white sands.",
      images: [
        "https://picsum.photos/seed/borabora1/400/250",
        "https://picsum.photos/seed/borabora2/400/250"
      ]
    },
    {
      name: "Maldives",
      description: "Crystal-clear waters, vibrant marine life, and luxury resorts.",
      images: [
        "https://picsum.photos/seed/maldives1/400/250",
        "https://picsum.photos/seed/maldives2/400/250"
      ]
    },
    {
      name: "Maui, Hawaii",
      description: "Golden beaches, lush rainforests, and the famous Road to Hana.",
      images: [
        "https://picsum.photos/seed/maui1/400/250",
        "https://picsum.photos/seed/maui2/400/250"
      ]
    }
  ],
  temple: [
    {
      name: "Angkor Wat, Cambodia",
      description: "The world's largest religious monument, a stunning temple complex.",
      images: [
        "https://picsum.photos/seed/angkorwat1/400/250",
        "https://picsum.photos/seed/angkorwat2/400/250"
      ]
    },
    {
      name: "Borobudur, Indonesia",
      description: "A 9th-century Mahayana Buddhist temple with intricate carvings.",
      images: [
        "https://picsum.photos/seed/borobudur1/400/250",
        "https://picsum.photos/seed/borobudur2/400/250"
      ]
    },
    {
      name: "Golden Temple, Amritsar",
      description: "The holiest Gurudwara, surrounded by a sacred pool.",
      images: [
        "https://picsum.photos/seed/goldentemple1/400/250",
        "https://picsum.photos/seed/goldentemple2/400/250"
      ]
    }
  ],
  country: [
    {
      name: "Japan",
      description: "A fascinating blend of ancient traditions and futuristic innovation.",
      images: [
        "https://picsum.photos/seed/japan1/400/250",
        "https://picsum.photos/seed/japan2/400/250"
      ]
    },
    {
      name: "Italy",
      description: "Renowned for its art, cuisine, history, and stunning landscapes.",
      images: [
        "https://picsum.photos/seed/italy1/400/250",
        "https://picsum.photos/seed/italy2/400/250"
      ]
    },
    {
      name: "Egypt",
      description: "Home to ancient pyramids, the Nile, and a rich cultural heritage.",
      images: [
        "https://picsum.photos/seed/egypt1/400/250",
        "https://picsum.photos/seed/egypt2/400/250"
      ]
    }
  ]
};

function renderCategory(category, containerId) {
  const grid = document.getElementById(containerId);
  if (!grid || !destinations[category]) return;

  grid.innerHTML = '';

  destinations[category].forEach(dest => {
    const card = document.createElement('div');
    card.className = 'result-card';
    card.innerHTML = `
      <div class="card-images">
        ${dest.images.map(img => `<img src="${img}" alt="${dest.name}" loading="lazy" />`).join('')}
      </div>
      <div class="card-body">
        <h3>${dest.name}</h3>
        <p>${dest.description}</p>
        <span class="tag"><i class="fas fa-tag"></i> ${category}</span>
      </div>
    `;
    grid.appendChild(card);
  });
}
