/* ==========================================================================
   SOLARA RESORTS & ITINERARIES - CORE JAVASCRIPT LOGIC (ES6+)
   ========================================================================== */

// --------------------------------------------------------------------------
// 1. Itinerary Data Source
// --------------------------------------------------------------------------
const ITINERARIES_DATA = [
  {
    id: "itinerary-bali-1",
    title: "Ubud Jungle Sanctuary & Private Cliff Villa",
    destination: "Bali",
    destinationCode: "bali",
    duration: "3N4D",
    durationLabel: "3 Nights 4 Days",
    theme: "relaxation",
    themeLabel: "Relaxation & Spa",
    budget: "luxury",
    price: "$1,480",
    rating: 4.96,
    reviewsCount: 142,
    imgUrl: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=800&q=80",
    highlights: ["Private Pool Villa", "Ayung River Dining", "Floating Breakfast"],
    schedule: [
      {
        day: 1,
        title: "Arrival & Jungle Welcome Ritual",
        morning: "Private Airport transfer to Ubud Luxury Sanctuary. VIP check-in with cold towels & coconut water.",
        afternoon: "90-minute Balinese Aromatherapy massage at the clifftop spa.",
        evening: "Candlelit 5-course romantic dinner overlooking the mist valley.",
        tip: "Request the herbal lemongrass welcome bath upon arrival."
      },
      {
        day: 2,
        title: "Sacred Waterfalls & Floating Brunch",
        morning: "Floating flower breakfast served in your private infinity pool followed by morning yoga.",
        afternoon: "Private guided tour of Tibumana Secret Waterfall & Tirta Empul purification.",
        evening: "Sunset cocktails at Sayan Terrace with live acoustic Gamelan.",
        tip: "Bring waterproof cameras for the waterfall excursion."
      },
      {
        day: 3,
        title: "Seminyak Ocean Club & Beach BBQ",
        morning: "Artisan coffee tasting and local handicraft gallery tour in Ubud village.",
        afternoon: "Transfer to Seminyak Beach Club; reserved daybed with champagne service.",
        evening: "Seafood BBQ feast right on the sand with beach bonfire.",
        tip: "Pre-book sunset daybed placement at least 2 hours early."
      },
      {
        day: 4,
        title: "Mindful Morning & Departure",
        morning: "Organic acai smoothie bowl breakfast & leisure infinity pool swim.",
        afternoon: "Souvenir shopping and luxury private transfer to DPS Airport.",
        evening: "",
        tip: "Late check-out up to 2:00 PM is complimentary for Solara guests."
      }
    ]
  },
  {
    id: "itinerary-maldives-1",
    title: "Overwater Lagoon Haven & Sunset Dolphin Cruise",
    destination: "Maldives",
    destinationCode: "maldives",
    duration: "4N5D",
    durationLabel: "4 Nights 5 Days",
    theme: "relaxation",
    themeLabel: "Honeymoon & Luxury",
    budget: "luxury",
    price: "$2,850",
    rating: 4.99,
    reviewsCount: 210,
    imgUrl: "https://images.unsplash.com/photo-1514282401047-d79a71a590e8?auto=format&fit=crop&w=800&q=80",
    highlights: ["Glass Floor Villa", "Underwater Dining", "Dolphin Cruise"],
    schedule: [
      {
        day: 1,
        title: "Seaplane Flight & Lagoon Villa Arrival",
        morning: "Scenic 35-minute seaplane transfer over turquoise atolls to North Malé Atoll.",
        afternoon: "Settle into your glass-floor overwater villa with direct ocean lagoon ladder access.",
        evening: "Sunset welcome champagne reception on the boardwalk.",
        tip: "Keep camera ready during seaplane flight for breathtaking aerial shots."
      },
      {
        day: 2,
        title: "Coral Reef Snorkel & Underwater Dining",
        morning: "Guided house-reef snorkeling trip to spot sea turtles, reef sharks, and manta rays.",
        afternoon: "Relaxation at the infinity pool cabana with tropical cocktail service.",
        evening: "Sub-ocean dining experience 5 meters beneath the sea level.",
        tip: "Underwater camera gear can be rented free at the dive center."
      },
      {
        day: 3,
        title: "Sandbank Picnic & Sunset Dolphin Safari",
        morning: "Speedboat ride to a private deserted sandbank for a chef-prepared gourmet brunch.",
        afternoon: "Overwater spa massage with view of marine life through glass floor panels.",
        evening: "Sunset cruise on a traditional wooden Dhoni with spinner dolphins.",
        tip: "Dolphin sightings are most frequent between 5:30 PM and 6:30 PM."
      },
      {
        day: 4,
        title: "Water Sports & Stargazing Cinema",
        morning: "Paddleboarding & clear kayaking around the calm lagoon waters.",
        afternoon: "Afternoon high tea served at the Sunset Lounge.",
        evening: "Outdoor movie screening on the beach under starry Maldivian skies.",
        tip: "Try the artisan passion fruit popsicles served at the beach bar."
      }
    ]
  },
  {
    id: "itinerary-cancun-1",
    title: "Riviera Maya All-Inclusive & Cenote Discovery",
    destination: "Cancun",
    destinationCode: "cancun",
    duration: "5N6D",
    durationLabel: "5 Nights 6 Days",
    theme: "adventure",
    themeLabel: "Culture & Adventure",
    budget: "premium",
    price: "$1,620",
    rating: 4.88,
    reviewsCount: 95,
    imgUrl: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80",
    highlights: ["All-Inclusive Luxury", "Secret Cenote Swim", "Tulum Mayan Ruins"],
    schedule: [
      {
        day: 1,
        title: "Caribbean Welcome & Oceanfront Cabana",
        morning: "Arrival at Cancun Airport, private luxury shuttle to Riviera Maya resort.",
        afternoon: "Check-in to oceanfront suite with private plunge pool. Welcome margaritas.",
        evening: "Gourmet Mexican fusion dining at the signature beachfront restaurant.",
        tip: "Enjoy 24-hour suite room service included in your stay."
      },
      {
        day: 2,
        title: "Sacred Cenote Swim & Jungle Zipline",
        morning: "Private trip to Gran Cenote for crystal-clear freshwater subterranean swim.",
        afternoon: "Jungle eco-park adventure with ziplining through Maya rainforest canopy.",
        evening: "Tequila & Mezcal tasting paired with artisan tapas.",
        tip: "Only biodegradable sunblock is allowed in eco-cenotes."
      },
      {
        day: 3,
        title: "Tulum Cliff Ruins & Bohemian Beach Club",
        morning: "Guided tour of ancient Mayan ruins perched directly over the turquoise sea.",
        afternoon: "Boho-chic beach lounge experience in Tulum with hammock relaxation.",
        evening: "Fresh ceviche tasting & live Mariachi band performance.",
        tip: "Visit Tulum early morning to beat the afternoon crowds and heat."
      },
      {
        day: 4,
        title: "Catamaran Cruise to Isla Mujeres",
        morning: "Board private catamaran for snorkeling at MUSA underwater sculpture museum.",
        afternoon: "Explore golf-cart trails and pristine North Beach on Isla Mujeres.",
        evening: "Return cruise with open bar and Caribbean sunset views.",
        tip: "North Beach has some of the calmest shallow water in Mexico."
      }
    ]
  },
  {
    id: "itinerary-hawaii-1",
    title: "Maui Coastline Escape & Sunrise Crater Experience",
    destination: "Hawaii",
    destinationCode: "hawaii",
    duration: "4N5D",
    durationLabel: "4 Nights 5 Days",
    theme: "adventure",
    themeLabel: "Nature & Volcano",
    budget: "premium",
    price: "$2,100",
    rating: 4.92,
    reviewsCount: 165,
    imgUrl: "https://images.unsplash.com/photo-1542259009477-d625272157b7?auto=format&fit=crop&w=800&q=80",
    highlights: ["Haleakala Sunrise", "Road to Hana Drive", "Luau Celebration"],
    schedule: [
      {
        day: 1,
        title: "Kahului Arrival & Wailea Ocean Resort",
        morning: "Arrive in Maui, pick up luxury convertible rental car, scenic drive to Wailea.",
        afternoon: "Check-in to oceanfront resort with fresh Lei greeting & Mai Tai cocktail.",
        evening: "Sunset walk along Wailea Coastal Path & oceanfront dining.",
        tip: "Keep eyes open for humpback whales breaching offshore (Dec-Apr)."
      },
      {
        day: 2,
        title: "Haleakala Crater Sunrise & Upcountry Farms",
        morning: "Early dawn drive to Haleakala Summit (10,000 ft) for legendary cloud-sea sunrise.",
        afternoon: "Visit Kula lavender farm and enjoy fresh farm-to-table lunch in Upcountry Maui.",
        evening: "Relaxation at resort infinity pool with tiki torch lighting.",
        tip: "Dress very warmly for Haleakala summit as temperatures drop near freezing before dawn."
      },
      {
        day: 3,
        title: "Road to Hana Waterfalls & Black Sand Beach",
        morning: "Scenic coastal drive featuring lush rainforests, bamboo groves, and waterfalls.",
        afternoon: "Swim at Wai'anapanapa State Park black sand beach and sea caves.",
        evening: "Return drive with stop at Paia town for fresh fish tacos.",
        tip: "Download offline map navigation for the Road to Hana ahead of time."
      },
      {
        day: 4,
        title: "Molokini Crater Snorkel & Traditional Luau",
        morning: "Morning catamaran cruise to Molokini volcanic crater for pristine reef snorkeling.",
        afternoon: "Lomi Lomi spa therapy at resort oceanfront cabana.",
        evening: "Authentic Hawaiian Luau with Polynesian dance show & Kalua pork feast.",
        tip: "Arrive 30 minutes early to Luau for craft-making workshops."
      }
    ]
  },
  {
    id: "itinerary-phuket-1",
    title: "Phuket Clifftop Villa & Andaman Island Yachting",
    destination: "Phuket",
    destinationCode: "phuket",
    duration: "3N4D",
    durationLabel: "3 Nights 4 Days",
    theme: "foodie",
    themeLabel: "Culinary & Island Hopping",
    budget: "value",
    price: "$980",
    rating: 4.89,
    reviewsCount: 115,
    imgUrl: "https://images.unsplash.com/photo-1589394815804-964ed0be2eb5?auto=format&fit=crop&w=800&q=80",
    highlights: ["Private Yacht Charter", "Thai Cooking Class", "Kata Clifftop Pool"],
    schedule: [
      {
        day: 1,
        title: "Phuket Villa Check-in & Sunset Lounge",
        morning: "Arrival at Phuket Airport, VIP private van transfer to Kata Rocks Clifftop Villa.",
        afternoon: "Unpack in your ocean-view pool villa. Herbal steam sauna session.",
        evening: "Tapas & cocktails at sunset cliff lounge overlooking the Andaman Sea.",
        tip: "Sunset time at Kata Rocks is around 6:15 PM with unbeatable photo angles."
      },
      {
        day: 2,
        title: "Phi Phi Islands Private Yacht Excursion",
        morning: "Board private motor yacht to Maya Bay and Pileh Lagoon emerald waters.",
        afternoon: "Snorkel with tropical fish at Bamboo Island; onboard Thai buffet lunch.",
        evening: "Return to resort; relaxed dinner at authentic night food market.",
        tip: "Early departure at 7:30 AM avoids peak tourist crowds at Maya Bay."
      },
      {
        day: 3,
        title: "Royal Thai Culinary Masterclass & Elephant Sanctuary",
        morning: "Visit ethical elephant sanctuary for feeding & mud bathing experience.",
        afternoon: "Hands-on Royal Thai cooking class with organic garden herb harvesting.",
        evening: "Savor your self-cooked 4-course feast with wine pairing.",
        tip: "Recipes booklet and spice kit are provided to take home."
      },
      {
        day: 4,
        title: "Old Phuket Town Heritage & Departure",
        morning: "Stroll through colorful Sino-Portuguese architecture streets in Old Town.",
        afternoon: "Final spa treatment & airport transfer.",
        evening: "",
        tip: "Try local Phuket cashew nut candy treats in Old Town shops."
      }
    ]
  },
  {
    id: "itinerary-bali-2",
    title: "Nusa Dua Ultra-Luxury Beachfront & Cultural Heritage",
    destination: "Bali",
    destinationCode: "bali",
    duration: "7N8D",
    durationLabel: "7 Nights 8 Days",
    theme: "relaxation",
    themeLabel: "Grand Luxury Stay",
    budget: "luxury",
    price: "$3,400",
    rating: 4.98,
    reviewsCount: 180,
    imgUrl: "https://images.unsplash.com/photo-1573843981267-be1999ff37cd?auto=format&fit=crop&w=800&q=80",
    highlights: ["Butler Villa Service", "Helicopter Island Tour", "Uluwatu Sunset Temple"],
    schedule: [
      {
        day: 1,
        title: "Nusa Dua VIP Arrival",
        morning: "Fast-track airport clearance & limousine escort to St. Regis Nusa Dua Beach Resort.",
        afternoon: "Personal 24-hour butler unpacks luggage while you enjoy lagoon pool swim.",
        evening: "Welcome French-Asian fusion dinner at Kayuputi beachfront restaurant.",
        tip: "Your butler can arrange complimentary garment pressing on Day 1."
      },
      {
        day: 2,
        title: "Helicopter Aerial Tour & Spa Day",
        morning: "30-minute private helicopter tour over Mt. Batur crater and Bali coastline.",
        afternoon: "Remède Spa thalassotherapy seawater pool session.",
        evening: "Private beach picnic under lit lantern canopy.",
        tip: "Clear weather mornings offer the crispest mountain crater views."
      },
      {
        day: 3,
        title: "Uluwatu Clifftop Temple & Kecak Dance",
        morning: "Leisurely beach day with private cabana and coconut service.",
        afternoon: "Guided tour to dramatic 70m cliffside Uluwatu Temple.",
        evening: "Watch fiery Kecak & Fire Dance show at sunset, followed by Jimbaran seafood.",
        tip: "Keep sunglasses and hats secure from friendly monkeys at Uluwatu."
      },
      {
        day: 4,
        title: "Catamaran Cruise to Nusa Lembongan",
        morning: "Day cruise on luxury yacht to Nusa Lembongan island.",
        afternoon: "Banana boat rides, snorkeling, and beach club lunch.",
        evening: "Return to resort for calm evening spa soak.",
        tip: "Manta ray snorkeling spots can be added to yacht itinerary."
      }
    ]
  }
];

// --------------------------------------------------------------------------
// 2. Application State & Storage Setup
// --------------------------------------------------------------------------
let state = {
  activeTab: 'all',
  searchQuery: '',
  destinationFilter: 'all',
  durationFilter: 'all',
  budgetFilter: 'all',
  themeFilter: 'all',
  quickTagFilter: 'all',
  savedIds: JSON.parse(localStorage.getItem('solara_saved_itineraries') || '[]'),
  accordionsOpen: {}
};

// --------------------------------------------------------------------------
// 3. DOM Elements Initialization
// --------------------------------------------------------------------------
document.addEventListener('DOMContentLoaded', () => {
  initNavbar();
  initHeroFilters();
  initTabFilters();
  initItineraryGrid();
  initSavedDrawer();
  initCustomModal();
  initNewsletter();
  updateBookmarkBadge();
});

// --------------------------------------------------------------------------
// 4. Header & Responsive Navigation
// --------------------------------------------------------------------------
function initNavbar() {
  const hamburger = document.getElementById('hamburgerToggle');
  const navMenu = document.getElementById('navMenu');
  
  if (hamburger && navMenu) {
    hamburger.addEventListener('click', () => {
      navMenu.classList.toggle('open');
      hamburger.classList.toggle('active');
    });

    // Close menu when clicking links
    document.querySelectorAll('.nav-link').forEach(link => {
      link.addEventListener('click', () => {
        navMenu.classList.remove('open');
        hamburger.classList.remove('active');
      });
    });
  }
}

// --------------------------------------------------------------------------
// 5. Hero Filter & Search Handler
// --------------------------------------------------------------------------
function initHeroFilters() {
  const searchForm = document.getElementById('heroSearchForm');
  const destinationSelect = document.getElementById('heroDestination');
  const durationSelect = document.getElementById('heroDuration');
  const budgetSelect = document.getElementById('heroBudget');
  const themeSelect = document.getElementById('heroTheme');
  const resetBtn = document.getElementById('resetFiltersBtn');
  
  if (searchForm) {
    searchForm.addEventListener('submit', (e) => {
      e.preventDefault();
      state.destinationFilter = destinationSelect ? destinationSelect.value : 'all';
      state.durationFilter = durationSelect ? durationSelect.value : 'all';
      state.budgetFilter = budgetSelect ? budgetSelect.value : 'all';
      state.themeFilter = themeSelect ? themeSelect.value : 'all';
      
      renderItineraries();
      showToast('Filters applied successfully!');
      
      // Scroll smoothly to itineraries section
      const itinerarySection = document.getElementById('itinerariesSection');
      if (itinerarySection) {
        itinerarySection.scrollIntoView({ behavior: 'smooth' });
      }
    });
  }

  if (resetBtn) {
    resetBtn.addEventListener('click', () => {
      state.activeTab = 'all';
      state.destinationFilter = 'all';
      state.durationFilter = 'all';
      state.budgetFilter = 'all';
      state.themeFilter = 'all';
      state.quickTagFilter = 'all';
      
      if (destinationSelect) destinationSelect.value = 'all';
      if (durationSelect) durationSelect.value = 'all';
      if (budgetSelect) budgetSelect.value = 'all';
      if (themeSelect) themeSelect.value = 'all';
      
      // Reset active tabs UI
      document.querySelectorAll('.tab-btn').forEach(btn => {
        btn.classList.toggle('active', btn.dataset.filter === 'all');
      });
      document.querySelectorAll('.quick-tag-btn').forEach(btn => {
        btn.classList.remove('active');
      });
      
      renderItineraries();
      showToast('Filters reset to show all itineraries');
    });
  }

  // Destination Highlights Cards Click Handler
  document.querySelectorAll('.destination-card').forEach(card => {
    card.addEventListener('click', () => {
      const dest = card.dataset.destination;
      if (dest) {
        state.destinationFilter = dest;
        if (destinationSelect) destinationSelect.value = dest;
        renderItineraries();
        showToast(`Filtered for ${dest.toUpperCase()} itineraries!`);
        
        const itinerarySection = document.getElementById('itinerariesSection');
        if (itinerarySection) {
          itinerarySection.scrollIntoView({ behavior: 'smooth' });
        }
      }
    });
  });

  // Quick Tags Click Handler
  document.querySelectorAll('.quick-tag-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.quick-tag-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      
      const tag = btn.dataset.tag;
      state.quickTagFilter = tag;
      renderItineraries();
      showToast(`Filter applied: ${btn.textContent.trim()}`);
    });
  });
}

// --------------------------------------------------------------------------
// 6. Category Tabs Filter Logic
// --------------------------------------------------------------------------
function initTabFilters() {
  const tabButtons = document.querySelectorAll('.tab-btn');
  tabButtons.forEach(button => {
    button.addEventListener('click', () => {
      tabButtons.forEach(b => b.classList.remove('active'));
      button.classList.add('active');
      
      state.activeTab = button.dataset.filter;
      renderItineraries();
    });
  });
}

// --------------------------------------------------------------------------
// 7. Dynamic Itinerary Card & Accordion Renderer
// --------------------------------------------------------------------------
function initItineraryGrid() {
  renderItineraries();
}

function filterData() {
  return ITINERARIES_DATA.filter(item => {
    // Tab Filter Logic
    if (state.activeTab !== 'all') {
      if (state.activeTab === '3N4D' && item.duration !== '3N4D') return false;
      if (state.activeTab === '5N6D' && item.duration !== '5N6D' && item.duration !== '4N5D') return false;
      if (state.activeTab === '7N8D' && item.duration !== '7N8D') return false;
      if (state.activeTab === 'relaxation' && item.theme !== 'relaxation') return false;
      if (state.activeTab === 'adventure' && item.theme !== 'adventure') return false;
      if (state.activeTab === 'foodie' && item.theme !== 'foodie') return false;
    }

    // Hero Dropdown Filters
    if (state.destinationFilter !== 'all' && item.destinationCode !== state.destinationFilter) return false;
    if (state.durationFilter !== 'all' && item.duration !== state.durationFilter) return false;
    if (state.budgetFilter !== 'all' && item.budget !== state.budgetFilter) return false;
    if (state.themeFilter !== 'all' && item.theme !== state.themeFilter) return false;

    // Quick Tags Filter
    if (state.quickTagFilter !== 'all') {
      const matchTag = item.highlights.some(h => 
        h.toLowerCase().includes(state.quickTagFilter.toLowerCase())
      );
      if (!matchTag) return false;
    }

    return true;
  });
}

function renderItineraries() {
  const container = document.getElementById('itineraryGrid');
  const countDisplay = document.getElementById('resultsCount');
  const resetBtn = document.getElementById('resetFiltersBtn');
  
  if (!container) return;

  const filtered = filterData();

  if (countDisplay) {
    countDisplay.innerHTML = `Showing <span>${filtered.length}</span> curated resort itineraries`;
  }

  // Show reset filter button if any active filter present
  const isFiltered = state.activeTab !== 'all' || 
                     state.destinationFilter !== 'all' || 
                     state.durationFilter !== 'all' || 
                     state.budgetFilter !== 'all' || 
                     state.themeFilter !== 'all' ||
                     state.quickTagFilter !== 'all';

  if (resetBtn) {
    resetBtn.classList.toggle('visible', isFiltered);
  }

  if (filtered.length === 0) {
    container.innerHTML = `
      <div style="grid-column: 1 / -1; text-align: center; padding: 4rem 1rem;">
        <div style="font-size: 3rem; margin-bottom: 1rem;">🌴</div>
        <h3 style="font-family: var(--font-serif); font-size: 1.5rem; color: var(--text-main); margin-bottom: 0.5rem;">No matching resort itineraries found</h3>
        <p style="color: var(--text-muted); margin-bottom: 1.5rem;">Try adjusting your filter options or destination selection.</p>
        <button class="btn btn-primary" onclick="resetAllFilters()">Reset All Filters</button>
      </div>
    `;
    return;
  }

  container.innerHTML = filtered.map(item => {
    const isSaved = state.savedIds.includes(item.id);
    const isOpen = !!state.accordionsOpen[item.id];

    return `
      <article class="itinerary-card" data-id="${item.id}">
        <div class="card-image-wrap">
          <img class="card-img" src="${item.imgUrl}" alt="${item.title}" loading="lazy">
          <button class="card-save-btn ${isSaved ? 'saved' : ''}" 
                  onclick="toggleSaveItinerary('${item.id}', event)"
                  title="${isSaved ? 'Remove from Saved' : 'Save Itinerary'}">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="${isSaved ? 'currentColor' : 'none'}" stroke="currentColor" stroke-width="2">
              <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
            </svg>
          </button>
          <div class="card-badges">
            <span class="badge-pill duration">${item.durationLabel}</span>
            <span class="badge-pill">${item.themeLabel}</span>
          </div>
        </div>

        <div class="card-body">
          <div class="card-header-info">
            <span class="card-destination">${item.destination}</span>
            <span class="card-price">${item.price}</span>
          </div>
          <h3 class="card-title">${item.title}</h3>
          <p class="card-tagline">⭐ ${item.rating} (${item.reviewsCount} reviews)</p>

          <div class="card-highlights-list">
            ${item.highlights.map(h => `
              <span class="highlight-chip">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
                ${h}
              </span>
            `).join('')}
          </div>

          <div class="accordion-wrapper">
            <button class="accordion-toggle-btn ${isOpen ? 'active' : ''}" 
                    onclick="toggleAccordion('${item.id}', this)">
              <span>${isOpen ? 'Hide Schedule' : 'View Day-by-Day Schedule'}</span>
              <svg class="chevron-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <polyline points="6 9 12 15 18 9"></polyline>
              </svg>
            </button>

            <div class="accordion-content ${isOpen ? 'open' : ''}" id="accordion-${item.id}">
              <div class="timeline-list">
                ${item.schedule.map(dayItem => `
                  <div class="timeline-item">
                    <div class="timeline-day-title">Day ${dayItem.day}: ${dayItem.title}</div>
                    <div class="timeline-activity">🌅 Morning: ${dayItem.morning}</div>
                    <div class="timeline-desc">☀️ Afternoon: ${dayItem.afternoon}</div>
                    ${dayItem.evening ? `<div class="timeline-desc">🌙 Evening: ${dayItem.evening}</div>` : ''}
                    ${dayItem.tip ? `<div class="timeline-tip">💡 Pro Tip: ${dayItem.tip}</div>` : ''}
                  </div>
                `).join('')}
              </div>
            </div>
          </div>
        </div>
      </article>
    `;
  }).join('');
}

// Global Reset Utility
window.resetAllFilters = function() {
  state.activeTab = 'all';
  state.destinationFilter = 'all';
  state.durationFilter = 'all';
  state.budgetFilter = 'all';
  state.themeFilter = 'all';
  state.quickTagFilter = 'all';
  
  const destinationSelect = document.getElementById('heroDestination');
  const durationSelect = document.getElementById('heroDuration');
  const budgetSelect = document.getElementById('heroBudget');
  const themeSelect = document.getElementById('heroTheme');

  if (destinationSelect) destinationSelect.value = 'all';
  if (durationSelect) durationSelect.value = 'all';
  if (budgetSelect) budgetSelect.value = 'all';
  if (themeSelect) themeSelect.value = 'all';

  document.querySelectorAll('.tab-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.filter === 'all');
  });
  document.querySelectorAll('.quick-tag-btn').forEach(btn => {
    btn.classList.remove('active');
  });

  renderItineraries();
};

// --------------------------------------------------------------------------
// 8. Accordion Expansion Toggle Function
// --------------------------------------------------------------------------
window.toggleAccordion = function(id, buttonEl) {
  const content = document.getElementById(`accordion-${id}`);
  if (!content) return;

  const isOpen = content.classList.contains('open');

  if (isOpen) {
    content.classList.remove('open');
    buttonEl.classList.remove('active');
    buttonEl.querySelector('span').textContent = 'View Day-by-Day Schedule';
    state.accordionsOpen[id] = false;
  } else {
    content.classList.add('open');
    buttonEl.classList.add('active');
    buttonEl.querySelector('span').textContent = 'Hide Schedule';
    state.accordionsOpen[id] = true;
  }
};

// --------------------------------------------------------------------------
// 9. Bookmark / Save Functionality & LocalStorage Sync
// --------------------------------------------------------------------------
window.toggleSaveItinerary = function(id, event) {
  if (event) event.stopPropagation();

  const index = state.savedIds.indexOf(id);
  const itinerary = ITINERARIES_DATA.find(item => item.id === id);
  const title = itinerary ? itinerary.title : 'Itinerary';

  if (index > -1) {
    state.savedIds.splice(index, 1);
    showToast(`Removed "${title}" from saved bookmarks`);
  } else {
    state.savedIds.push(id);
    showToast(`Saved "${title}" to your bookmarks! ❤️`);
  }

  localStorage.setItem('solara_saved_itineraries', JSON.stringify(state.savedIds));
  updateBookmarkBadge();
  renderItineraries();
  renderSavedDrawerItems();
};

function updateBookmarkBadge() {
  const badge = document.getElementById('bookmarkCountBadge');
  if (badge) {
    badge.textContent = state.savedIds.length;
    badge.classList.add('bounce');
    setTimeout(() => badge.classList.remove('bounce'), 300);
  }
}

// --------------------------------------------------------------------------
// 10. Saved Itineraries Drawer Management
// --------------------------------------------------------------------------
function initSavedDrawer() {
  const drawerBtn = document.getElementById('openSavedDrawerBtn');
  const closeBtn = document.getElementById('closeSavedDrawerBtn');
  const backdrop = document.getElementById('drawerBackdrop');
  const drawer = document.getElementById('savedDrawer');
  const clearAllBtn = document.getElementById('clearSavedBtn');

  if (drawerBtn && drawer && backdrop) {
    drawerBtn.addEventListener('click', () => {
      drawer.classList.add('open');
      backdrop.classList.add('open');
      renderSavedDrawerItems();
    });

    const closeDrawer = () => {
      drawer.classList.remove('open');
      backdrop.classList.remove('open');
    };

    if (closeBtn) closeBtn.addEventListener('click', closeDrawer);
    backdrop.addEventListener('click', closeDrawer);
  }

  if (clearAllBtn) {
    clearAllBtn.addEventListener('click', () => {
      if (state.savedIds.length === 0) return;
      state.savedIds = [];
      localStorage.setItem('solara_saved_itineraries', JSON.stringify(state.savedIds));
      updateBookmarkBadge();
      renderItineraries();
      renderSavedDrawerItems();
      showToast('Cleared all saved bookmarks');
    });
  }
}

function renderSavedDrawerItems() {
  const body = document.getElementById('savedDrawerBody');
  if (!body) return;

  if (state.savedIds.length === 0) {
    body.innerHTML = `
      <div class="empty-saved-state">
        <div class="empty-saved-icon">🤍</div>
        <p style="font-weight: 600; color: var(--text-main); margin-bottom: 0.25rem;">No saved itineraries yet</p>
        <p style="font-size: 0.85rem;">Click the heart icon on any resort itinerary card to bookmark your dream trip.</p>
      </div>
    `;
    return;
  }

  const savedList = ITINERARIES_DATA.filter(item => state.savedIds.includes(item.id));

  body.innerHTML = savedList.map(item => `
    <div class="saved-item-card">
      <img src="${item.imgUrl}" alt="${item.title}" class="saved-item-img">
      <div class="saved-item-details">
        <h4 class="saved-item-title">${item.title}</h4>
        <div class="saved-item-meta">${item.destination} • ${item.durationLabel} • ${item.price}</div>
      </div>
      <button class="saved-item-remove" onclick="toggleSaveItinerary('${item.id}', event)" title="Remove">
        ✕
      </button>
    </div>
  `).join('');
}

// --------------------------------------------------------------------------
// 11. Custom Itinerary Request Modal
// --------------------------------------------------------------------------
function initCustomModal() {
  const openBtn = document.getElementById('openCustomModalBtn');
  const closeBtn = document.getElementById('closeCustomModalBtn');
  const backdrop = document.getElementById('customModalBackdrop');
  const form = document.getElementById('customPlanForm');
  const resultBox = document.getElementById('customPlanResult');

  if (openBtn && backdrop) {
    openBtn.addEventListener('click', () => {
      backdrop.classList.add('open');
    });

    const closeModal = () => {
      backdrop.classList.remove('open');
      if (resultBox) resultBox.classList.remove('active');
    };

    if (closeBtn) closeBtn.addEventListener('click', closeModal);
    backdrop.addEventListener('click', (e) => {
      if (e.target === backdrop) closeModal();
    });
  }

  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const dest = document.getElementById('planDestination')?.value || 'Bali';
      const duration = document.getElementById('planDuration')?.value || '4 Nights';
      const budget = document.getElementById('planBudget')?.value || 'Luxury';

      if (resultBox) {
        resultBox.classList.add('active');
        resultBox.innerHTML = `
          <div class="plan-result-title">✨ Custom Itinerary Tailored For You!</div>
          <p style="font-size: 0.9rem; color: var(--text-main); margin-bottom: 0.5rem;">
            <strong>Selected Destination:</strong> ${dest} | <strong>Duration:</strong> ${duration} | <strong>Style:</strong> ${budget}
          </p>
          <p style="font-size: 0.85rem; color: var(--text-muted);">
            Our Solara Resort Specialist is preparing a bespoke day-by-day plan with exclusive villa perks. Check your inbox shortly!
          </p>
        `;
      }
      showToast('Custom Plan Request Submitted!');
    });
  }
}

// --------------------------------------------------------------------------
// 12. Newsletter Form Submission Handler
// --------------------------------------------------------------------------
function initNewsletter() {
  const form = document.getElementById('newsletterForm');
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const input = form.querySelector('.newsletter-input');
      if (input && input.value) {
        showToast(`Thank you for subscribing, ${input.value}! 🌴`);
        input.value = '';
      }
    });
  }
}

// --------------------------------------------------------------------------
// 13. Toast Notification Helper System
// --------------------------------------------------------------------------
function showToast(message) {
  let container = document.getElementById('toastContainer');
  if (!container) {
    container = document.createElement('div');
    container.id = 'toastContainer';
    container.className = 'toast-container';
    document.body.appendChild(container);
  }

  const toast = document.createElement('div');
  toast.className = 'toast';
  toast.innerHTML = `
    <span class="toast-icon">✨</span>
    <span>${message}</span>
  `;

  container.appendChild(toast);

  setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transform = 'translateX(40px)';
    toast.style.transition = 'all 0.3s ease';
    setTimeout(() => toast.remove(), 300);
  }, 3000);
}
