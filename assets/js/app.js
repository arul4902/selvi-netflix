/**
 * SELVI — IN MY OWN FRAME
 * Main Application Logic & Interactive Systems
 */

document.addEventListener('DOMContentLoaded', () => {
  // Initialize subsystems
  initIntroSequence();
  initProfileSelector();
  initProgressTracker();
  initSoloMode();
  initVarkalaEscape();
  initReelSuite();
  initLookbookAndWardrobe();
  initChessInteraction();
  initTastePicks();
  initRadioSection();
  initMoodShuffle();
  initMainCharacterMode();
  initMemoryWall();
  initEasterEgg();
  initSelviRemote();
  initMyListSystem();
  initFutureClimax();
});

/* ==========================================================================
   03 — Cinematic Intro Sequence
   ========================================================================== */
function initIntroSequence() {
  const introEl = document.getElementById('cinematicIntro');
  const skipBtn = document.getElementById('skipIntroBtn');
  const line1 = document.getElementById('introLine1');
  const line2 = document.getElementById('introLine2');
  const line3 = document.getElementById('introLine3');
  const revealBlock = document.getElementById('introRevealBlock');
  const profileSection = document.getElementById('profileSelectionSection');

  if (!introEl) return;

  const timeouts = [];

  const finishIntro = () => {
    timeouts.forEach(clearTimeout);
    if (window.selviAudio) {
      window.selviAudio.play();
    }
    introEl.classList.add('fade-out');
    setTimeout(() => {
      introEl.style.display = 'none';
      if (profileSection) {
        profileSection.classList.remove('hidden-profile-gate');
      }
    }, 1100);
  };

  if (skipBtn) {
    skipBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      finishIntro();
    });
  }

  introEl.addEventListener('click', () => {
    if (window.selviAudio) {
      window.selviAudio.play();
    }
  });

  // Sequence timing
  // 1. Line 1 appears (0.5s)
  timeouts.push(setTimeout(() => {
    line1.classList.add('active');
  }, 600));

  // 2. Line 1 fades out, Line 2 appears (2.8s)
  timeouts.push(setTimeout(() => {
    line1.classList.remove('active');
  }, 3000));

  timeouts.push(setTimeout(() => {
    line2.classList.add('active');
  }, 3800));

  // 3. Line 2 fades out, Line 3 appears (6.0s)
  timeouts.push(setTimeout(() => {
    line2.classList.remove('active');
  }, 5800));

  timeouts.push(setTimeout(() => {
    line3.classList.add('active');
  }, 6600));

  // 4. Line 3 fades out, S Monogram & Title reveal (9.2s)
  timeouts.push(setTimeout(() => {
    line3.classList.remove('active');
  }, 9200));

  timeouts.push(setTimeout(() => {
    revealBlock.classList.add('active');
  }, 10000));

  // 5. Complete intro and open Profile Gate (14.5s)
  timeouts.push(setTimeout(() => {
    finishIntro();
  }, 14500));
}

/* ==========================================================================
   04 — Profile Selection With a Twist
   ========================================================================== */
function initProfileSelector() {
  const profileSection = document.getElementById('profileSelectionSection');
  const backdrop = document.getElementById('profileBackdropCanvas');
  const cards = document.querySelectorAll('.profile-card');

  if (!profileSection) return;

  cards.forEach(card => {
    // Hover dynamically changes background image
    card.addEventListener('mouseenter', () => {
      const bg = card.getAttribute('data-bg');
      if (bg && backdrop) {
        backdrop.style.backgroundImage = `url('${bg}')`;
      }
    });

    // Click selects profile and smoothly scrolls to chapter
    card.addEventListener('click', () => {
      if (window.selviAudio) {
        window.selviAudio.play();
      }
      const targetId = card.getAttribute('data-target');
      profileSection.classList.add('hidden-profile-gate');

      setTimeout(() => {
        if (targetId) {
          const el = document.getElementById(targetId);
          if (el) {
            el.scrollIntoView({ behavior: 'smooth' });
          }
        }
      }, 400);
    });
  });
}

/* ==========================================================================
   Streaming Live Progress Tracker (Section 28)
   ========================================================================== */
function initProgressTracker() {
  const chapterNameEl = document.getElementById('topbarCurrentChapter');
  const progressFill = document.getElementById('topbarProgressFill');

  const chapters = [
    { id: 'chapter-hero', label: 'SELF' },
    { id: 'chapter-shelf', label: 'EPISODES' },
    { id: 'chapter-nobigmoment', label: 'STORY' },
    { id: 'chapter-solo', label: 'SOLO' },
    { id: 'chapter-varkala', label: 'TRAVEL' },
    { id: 'chapter-reels', label: 'CREATE' },
    { id: 'chapter-lookbook', label: 'STYLE' },
    { id: 'chapter-college', label: 'MEMORIES' },
    { id: 'chapter-chess', label: 'CHESS' },
    { id: 'chapter-taste', label: 'PICKS' },
    { id: 'chapter-radio', label: 'MUSIC' },
    { id: 'chapter-dreamboard', label: 'DREAMS' },
    { id: 'chapter-day', label: 'DAY' },
    { id: 'chapter-memorywall', label: 'GALLERY' },
    { id: 'chapter-future', label: 'FUTURE' }
  ];

  window.addEventListener('scroll', () => {
    const scrollPos = window.scrollY + 200;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const progress = Math.min(100, Math.max(0, (window.scrollY / docHeight) * 100));

    if (progressFill) {
      progressFill.style.width = `${progress}%`;
    }

    // Determine current active chapter
    for (let i = chapters.length - 1; i >= 0; i--) {
      const el = document.getElementById(chapters[i].id);
      if (el && el.offsetTop <= scrollPos) {
        if (chapterNameEl && chapterNameEl.textContent !== chapters[i].label) {
          chapterNameEl.textContent = chapters[i].label;
        }
        break;
      }
    }
  }, { passive: true });
}

/* ==========================================================================
   08 — Solo Mode Controller
   ========================================================================== */
function initSoloMode() {
  const soloSection = document.getElementById('chapter-solo');
  const soloToggles = document.querySelectorAll('.js-solo-toggle');
  let isSoloActive = false;

  soloToggles.forEach(btn => {
    btn.addEventListener('click', () => {
      isSoloActive = !isSoloActive;
      soloToggles.forEach(b => {
        b.classList.toggle('active', isSoloActive);
        b.setAttribute('aria-pressed', isSoloActive);
      });

      if (soloSection) {
        soloSection.classList.toggle('solo-active', isSoloActive);
      }

      // Environmental soothing audio
      if (window.selviAudio) {
        window.selviAudio.toggleSoloAudio(isSoloActive);
      }
    });
  });
}

/* ==========================================================================
   09 — Varkala Escape & Full-screen Mode
   ========================================================================== */
function initVarkalaEscape() {
  const escapeBtn = document.getElementById('btnVarkalaEscape');
  if (!escapeBtn) return;

  escapeBtn.addEventListener('click', () => {
    openLightboxMedia({
      type: 'image',
      src: 'assets/selvi/varkala/varkala-cliff-sunset.jpg',
      caption: '📍 Varkala, Kerala (8.7379° N, 76.7163° E) — Crimson cliffs meeting Arabian Sea sunset'
    });
  });
}

/* ==========================================================================
   10 — Reel Suite & Video Previewer
   ========================================================================== */
function initReelSuite() {
  const reelCards = document.querySelectorAll('.reel-card-item');

  reelCards.forEach(card => {
    const video = card.querySelector('video');

    card.addEventListener('mouseenter', () => {
      if (video) {
        video.muted = true;
        video.play().catch(() => {});
      }
    });

    card.addEventListener('mouseleave', () => {
      if (video) {
        video.pause();
      }
    });

    card.addEventListener('click', () => {
      const src = card.getAttribute('data-reel-src');
      const caption = card.getAttribute('data-reel-caption');
      openLightboxMedia({
        type: 'video',
        src: src,
        caption: `🎬 Reel: ${caption}`
      });
    });
  });
}

/* ==========================================================================
   11 & 12 — Lookbook & Virtual Wardrobe
   ========================================================================== */
function initLookbookAndWardrobe() {
  // Wardrobe thumb selector
  const thumbBtns = document.querySelectorAll('.wardrobe-thumb-btn');
  const centralImg = document.getElementById('wardrobeCentralImg');
  const lookNumber = document.getElementById('wardrobeLookNumber');
  const lookName = document.getElementById('wardrobeLookName');
  const lookQuote = document.getElementById('wardrobeLookQuote');
  const paletteContainer = document.getElementById('wardrobePaletteRow');

  thumbBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const index = parseInt(btn.getAttribute('data-index'), 10);
      const look = selviData.wardrobeLooks[index];
      if (!look) return;

      thumbBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      if (centralImg) {
        centralImg.style.opacity = '0';
        setTimeout(() => {
          centralImg.src = look.image;
          centralImg.alt = look.title;
          centralImg.style.opacity = '1';
        }, 200);
      }

      if (lookNumber) lookNumber.textContent = look.number;
      if (lookName) lookName.textContent = look.title;
      if (lookQuote) lookQuote.textContent = look.quote;

      if (paletteContainer && look.palette) {
        paletteContainer.innerHTML = look.palette.map(c => 
          `<span class="palette-swatch" style="background-color: ${c};" title="${c}"></span>`
        ).join('');
      }
    });
  });

  // Editorial Look cards
  const lookCards = document.querySelectorAll('.look-cover-card');
  lookCards.forEach(card => {
    card.addEventListener('click', () => {
      const imgSrc = card.getAttribute('data-look-img');
      const title = card.getAttribute('data-look-title');
      const category = card.getAttribute('data-look-category');
      openLightboxMedia({
        type: 'image',
        src: imgSrc,
        caption: `✨ Editorial: ${title} — ${category}`
      });
    });
  });
}

/* ==========================================================================
   14 — Chess Interaction
   ========================================================================== */
function initChessInteraction() {
  const makeMoveBtn = document.getElementById('btnMakeMove');
  const movingPiece = document.getElementById('interactiveChessPiece');
  const revealToast = document.getElementById('chessMoveToast');
  let moveState = 0;

  if (!makeMoveBtn || !movingPiece) return;

  makeMoveBtn.addEventListener('click', () => {
    moveState = (moveState + 1) % 2;

    if (moveState === 1) {
      // Move Queen toward center/forward position
      movingPiece.style.transform = 'translate(120px, -110px) translateZ(18px)';
      if (revealToast) {
        revealToast.textContent = '“Next move: Dream bigger.”';
        revealToast.classList.add('active');
      }
      makeMoveBtn.innerHTML = 'RESET MOVE ♟️';
    } else {
      movingPiece.style.transform = 'translate(0, 0) translateZ(14px)';
      if (revealToast) {
        revealToast.classList.remove('active');
      }
      makeMoveBtn.innerHTML = 'MAKE A MOVE ♟️';
    }
  });
}

/* ==========================================================================
   15 — Taste of Selvi
   ========================================================================== */
function initTastePicks() {
  const cards = document.querySelectorAll('.taste-pick-card');
  cards.forEach(card => {
    card.addEventListener('click', () => {
      const cat = card.getAttribute('data-category');
      if (cat === 'varkala') {
        document.getElementById('chapter-varkala')?.scrollIntoView({ behavior: 'smooth' });
      } else if (cat === 'music') {
        document.getElementById('chapter-radio')?.scrollIntoView({ behavior: 'smooth' });
      } else if (cat === 'reels') {
        document.getElementById('chapter-reels')?.scrollIntoView({ behavior: 'smooth' });
      } else if (cat === 'chess') {
        document.getElementById('chapter-chess')?.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });
}

/* ==========================================================================
   16 — Selvi Radio Section
   ========================================================================== */
function initRadioSection() {
  const canvas = document.getElementById('radioWaveformCanvas');
  if (canvas && window.selviAudio) {
    window.selviAudio.startVisualizer(canvas);
  }

  const playBtns = document.querySelectorAll('.js-audio-play-toggle');
  playBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      if (window.selviAudio) {
        window.selviAudio.togglePlay();
      }
    });
  });

  const miniToggle = document.getElementById('miniPlayerToggle');
  if (miniToggle) {
    miniToggle.addEventListener('click', () => {
      if (window.selviAudio) {
        window.selviAudio.togglePlay();
      }
    });
  }

  const volumeSlider = document.getElementById('radioVolumeSlider');
  if (volumeSlider) {
    volumeSlider.addEventListener('input', (e) => {
      if (window.selviAudio) {
        window.selviAudio.setVolume(e.target.value);
      }
    });
  }

  const muteBtns = document.querySelectorAll('.js-audio-mute-toggle');
  muteBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      if (window.selviAudio) {
        window.selviAudio.toggleMute();
      }
    });
  });

  const progressTrack = document.getElementById('radioProgressTrack');
  if (progressTrack) {
    progressTrack.addEventListener('click', (e) => {
      const rect = progressTrack.getBoundingClientRect();
      const pct = Math.max(0, Math.min(1, (e.clientX - rect.left) / rect.width));
      if (window.selviAudio) {
        window.selviAudio.seek(pct);
      }
    });
  }
}

/* ==========================================================================
   17 — Mood Shuffle
   ========================================================================== */
function initMoodShuffle() {
  const shuffleBtn = document.getElementById('btnMoodShuffle');
  const heroBg = document.querySelector('.hero-bg-image');
  const heroQuote = document.querySelector('.hero-tagline-quote');

  const moods = [
    { name: "TRAVEL ✈️", img: "assets/selvi/varkala/varkala-cliff-sunset.jpg", quote: "“Some places feel like a different version of you.”" },
    { name: "REELS 🎥", img: "assets/selvi/fashion/selvi-pink-mesh.png", quote: "“Camera roll → edit → post → repeat.”" },
    { name: "FASHION ✨", img: "assets/selvi/fashion/selvi-purple-saree.png", quote: "“I love dressing up and trying different looks.”" },
    { name: "CHESS ♟️", img: "assets/selvi/portraits/selvi-black-ribbed-tying-hair.png", quote: "“Every move changes what comes next.”" },
    { name: "SOLO 🌙", img: "assets/selvi/portraits/selvi-black-ribbed-profile.png", quote: "“Sometimes being alone is peaceful.”" },
    { name: "COLLEGE 🎓", img: "assets/selvi/portraits/selvi-cottagecore-green.png", quote: "“Some chapters don't need explaining. They just make you smile.”" }
  ];

  if (!shuffleBtn) return;

  shuffleBtn.addEventListener('click', () => {
    const randomMood = moods[Math.floor(Math.random() * moods.length)];

    shuffleBtn.innerHTML = `<span>MOOD: ${randomMood.name}</span>`;

    if (heroBg) {
      heroBg.style.opacity = '0.3';
      setTimeout(() => {
        heroBg.src = randomMood.img;
        heroBg.style.opacity = '1';
      }, 300);
    }

    if (heroQuote) {
      heroQuote.textContent = randomMood.quote;
    }

    document.getElementById('chapter-hero')?.scrollIntoView({ behavior: 'smooth' });
  });
}

/* ==========================================================================
   21 — Main Character Mode
   ========================================================================== */
function initMainCharacterMode() {
  const mcToggles = document.querySelectorAll('.js-mc-toggle');
  let isMCActive = false;

  mcToggles.forEach(btn => {
    btn.addEventListener('click', () => {
      isMCActive = !isMCActive;
      document.body.classList.toggle('main-character-mode', isMCActive);
      mcToggles.forEach(b => b.classList.toggle('active', isMCActive));
    });
  });
}

/* ==========================================================================
   23 — Memory Wall Masonry & Lightbox
   ========================================================================== */
let activeLightboxIndex = 0;
const memoryItems = selviData.gallery;

function initMemoryWall() {
  const bricks = document.querySelectorAll('.masonry-brick');
  bricks.forEach((brick, index) => {
    brick.addEventListener('click', () => {
      activeLightboxIndex = index;
      openLightboxMedia({
        type: 'image',
        src: memoryItems[index].src,
        caption: memoryItems[index].caption
      });
    });
  });

  const lightbox = document.getElementById('globalLightbox');
  const closeBtn = document.getElementById('lightboxCloseBtn');
  const prevBtn = document.getElementById('lightboxPrevBtn');
  const nextBtn = document.getElementById('lightboxNextBtn');

  if (closeBtn) closeBtn.addEventListener('click', closeLightbox);
  if (prevBtn) prevBtn.addEventListener('click', () => navigateLightbox(-1));
  if (nextBtn) nextBtn.addEventListener('click', () => navigateLightbox(1));

  // Keyboard navigation
  window.addEventListener('keydown', (e) => {
    if (!lightbox.classList.contains('open')) return;
    if (e.key === 'Escape') closeLightbox();
    if (e.key === 'ArrowLeft') navigateLightbox(-1);
    if (e.key === 'ArrowRight') navigateLightbox(1);
  });
}

function openLightboxMedia(item) {
  const lightbox = document.getElementById('globalLightbox');
  const imgEl = document.getElementById('lightboxImg');
  const vidEl = document.getElementById('lightboxVideo');
  const captionEl = document.getElementById('lightboxCaption');

  if (!lightbox) return;

  if (item.type === 'video') {
    if (imgEl) imgEl.style.display = 'none';
    if (vidEl) {
      vidEl.style.display = 'block';
      vidEl.src = item.src;
      vidEl.play().catch(() => {});
    }
  } else {
    if (vidEl) {
      vidEl.style.display = 'none';
      vidEl.pause();
    }
    if (imgEl) {
      imgEl.style.display = 'block';
      imgEl.src = item.src;
    }
  }

  if (captionEl) {
    captionEl.textContent = item.caption || '';
  }

  lightbox.classList.add('open');
}

function closeLightbox() {
  const lightbox = document.getElementById('globalLightbox');
  const vidEl = document.getElementById('lightboxVideo');
  if (vidEl) vidEl.pause();
  if (lightbox) lightbox.classList.remove('open');
}

function navigateLightbox(dir) {
  if (!memoryItems || memoryItems.length === 0) return;
  activeLightboxIndex = (activeLightboxIndex + dir + memoryItems.length) % memoryItems.length;
  const item = memoryItems[activeLightboxIndex];
  openLightboxMedia({
    type: 'image',
    src: item.src,
    caption: item.caption
  });
}

/* ==========================================================================
   24 — Future Self Crossfade (Section 24)
   ========================================================================== */
function initFutureClimax() {
  const crossfadeImgs = document.querySelectorAll('.crossfade-img');
  if (crossfadeImgs.length <= 1) return;

  let current = 0;
  setInterval(() => {
    crossfadeImgs[current].classList.remove('active');
    current = (current + 1) % crossfadeImgs.length;
    crossfadeImgs[current].classList.add('active');
  }, 4500);
}

/* ==========================================================================
   27 — Selvi Remote Floating Controller
   ========================================================================== */
function initSelviRemote() {
  const trigger = document.getElementById('remoteFloatingTrigger');
  const modal = document.getElementById('selviRemoteModal');
  const closeBtn = document.getElementById('remoteCloseBtn');
  const chapterBtns = document.querySelectorAll('.remote-chapter-btn');

  if (trigger && modal) {
    trigger.addEventListener('click', () => modal.classList.add('open'));
  }

  if (closeBtn && modal) {
    closeBtn.addEventListener('click', () => modal.classList.remove('open'));
  }

  chapterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const targetId = btn.getAttribute('data-target');
      if (modal) modal.classList.remove('open');
      if (targetId) {
        document.getElementById(targetId)?.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });
}

/* ==========================================================================
   29 — Hidden Easter Egg
   ========================================================================== */
function initEasterEgg() {
  const egg = document.getElementById('easterEggChessPiece');
  const toast = document.getElementById('easterEggToast');

  if (!egg || !toast) return;

  egg.addEventListener('click', () => {
    toast.classList.add('show');
    setTimeout(() => {
      toast.classList.remove('show');
    }, 4500);
  });
}

/* ==========================================================================
   My List Drawer System
   ========================================================================== */
function initMyListSystem() {
  const toggleBtn = document.getElementById('btnMyListHero');
  const topbarBtn = document.getElementById('topbarMyListBtn');
  const drawer = document.getElementById('myListDrawer');
  const closeBtn = document.getElementById('myListCloseBtn');
  const listContainer = document.getElementById('myListItemsContainer');

  const openDrawer = () => {
    if (drawer) drawer.classList.add('open');
    renderMyList();
  };

  const closeDrawer = () => {
    if (drawer) drawer.classList.remove('open');
  };

  if (toggleBtn) toggleBtn.addEventListener('click', openDrawer);
  if (topbarBtn) topbarBtn.addEventListener('click', openDrawer);
  if (closeBtn) closeBtn.addEventListener('click', closeDrawer);

  function renderMyList() {
    if (!listContainer) return;
    listContainer.innerHTML = selviData.episodes.slice(0, 4).map(ep => `
      <div style="display:flex;gap:12px;margin-bottom:16px;background:#181818;padding:12px;border-radius:8px;border:1px solid rgba(255,255,255,0.06);align-items:center;">
        <img src="${ep.image}" style="width:70px;height:45px;object-fit:cover;border-radius:4px;" alt="${ep.title}">
        <div style="flex:1;">
          <div style="font-size:0.75rem;color:var(--accent-champagne);font-weight:700;">${ep.number}</div>
          <div style="font-size:0.9rem;color:#fff;font-weight:600;">${ep.title}</div>
        </div>
        <a href="${ep.target}" onclick="document.getElementById('myListDrawer').classList.remove('open')" style="font-size:0.75rem;padding:6px 12px;background:rgba(255,255,255,0.1);border-radius:4px;color:#fff;">WATCH</a>
      </div>
    `).join('');
  }
}
