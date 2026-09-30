/**
 * SELVI — IN MY OWN FRAME
 * Centralized Personal Data & Configuration
 * Strict compliance: Uses ONLY authenticated facts provided in the Master Prompt.
 */

const selviData = {
  identity: {
    name: "Tamilselvi",
    nickname: "Selvi",
    coreTitle: "SELVI",
    subTitle: "IN MY OWN FRAME",
    heroSubtitle: "Travelling. Creating. Dressing up. Dreaming bigger.",
    tagline: "Sometimes being alone is peaceful.",
    secondaryConcept: "Main character. Her own pace. Her own story.",
    coreConcept: "My story doesn't need one defining moment. I'm still creating it.",
    badge: "A TAMILSELVI ORIGINAL",
    streamingStatus: "NOW STREAMING",
    categories: ["Travel", "Reels", "Fashion", "Dreams"]
  },

  personality: [
    { title: "Loves travelling", icon: "✈️", highlight: "Varkala, Kerala" },
    { title: "Loves making reels", icon: "🎬", highlight: "Camera roll → edit → post" },
    { title: "Enjoys being alone", icon: "🌙", highlight: "Peaceful solitude" },
    { title: "Loves dressing up", icon: "✨", highlight: "Trying different looks" },
    { title: "Enjoys college memories", icon: "🎓", highlight: "Unspoken smiles" },
    { title: "Plays chess", icon: "♟️", highlight: "One move at a time" },
    { title: "Aspiring model", icon: "💎", highlight: "Future issue" },
    { title: "Future entrepreneur", icon: "💼", highlight: "Building her own" }
  ],

  favourites: {
    food: {
      name: "Biryani",
      emoji: "🍛",
      tagline: "The comfort of authentic flavors and hearty joy."
    },
    music: {
      name: "Tamil songs",
      emoji: "🎵",
      tagline: "Soulful melodies and timeless rhythms on repeat."
    },
    movies: {
      name: "Vijay Sethupathi movies",
      emoji: "🎬",
      tagline: "Rooted character portrayals and effortless cinematic charisma."
    },
    destination: {
      name: "Varkala, Kerala",
      emoji: "🌊",
      coordinates: "8.7379° N, 76.7163° E",
      tagline: "Where red laterite cliffs embrace the Arabian Sea horizon."
    },
    activities: [
      { name: "Making reels", emoji: "🎥", tagline: "Finding poetry in short frames." },
      { name: "Playing chess", emoji: "♟️", tagline: "Patience, quiet strategy, and sharp moves." }
    ],
    whatSheEnjoys: "Being alone."
  },

  quotes: {
    personalThought: "Sometimes being alone is peaceful.",
    personalStyle: "I love dressing up and trying different looks.",
    messageToFutureSelf: "Keep going, your dreams are waiting.",
    narrationSolo: "Not lonely. Just comfortable with my own company.",
    varkalaQuote: "Some places feel like a different version of you.",
    chessQuote: "Every move changes what comes next.",
    reelsMicrocopy: "Camera roll → edit → post → repeat.",
    collegeQuotes: [
      "Some chapters don't need explaining.",
      "They just make you smile."
    ],
    noBigMoment: {
      question: "Favourite memory?",
      dots: "...",
      pauseText: "I don't have one.",
      transition: "Maybe that's okay.",
      realization: "My favourite chapter might not have happened yet.",
      conclusion: "Still creating memories."
    },
    futureClimax: {
      intro: "To the version of me who hasn't arrived yet…",
      highlight: "YOUR DREAMS ARE WAITING",
      sub: "Still becoming."
    },
    creditsFinal: "This season is still being written.",
    nextSeasonPrompt: "The best part? She hasn't become everything she's going to be yet."
  },

  profiles: [
    {
      id: "traveller",
      name: "THE TRAVELLER",
      icon: "✈️",
      targetId: "chapter-varkala",
      image: "assets/selvi/varkala/varkala-palms.png",
      bgImage: "assets/selvi/varkala/varkala-cliff-sunset.jpg",
      badge: "Wanderer Era"
    },
    {
      id: "creator",
      name: "THE CREATOR",
      icon: "🎬",
      targetId: "chapter-reels",
      image: "assets/selvi/portraits/selvi-heart-smile.png",
      bgImage: "assets/selvi/fashion/selvi-pink-bougainvillea.png",
      badge: "Reel Frame"
    },
    {
      id: "fashion",
      name: "THE FASHION GIRL",
      icon: "✨",
      targetId: "chapter-lookbook",
      image: "assets/selvi/fashion/selvi-purple-saree.png",
      bgImage: "assets/selvi/fashion/selvi-fairy-gown.png",
      badge: "Editorial Looks"
    },
    {
      id: "dreamer",
      name: "THE DREAMER",
      icon: "♡",
      targetId: "chapter-dreamboard",
      image: "assets/selvi/fashion/selvi-fairy-gown.png",
      bgImage: "assets/selvi/fashion/selvi-burgundy-cherry-2.png",
      badge: "Vision 2026+"
    },
    {
      id: "just-selvi",
      name: "JUST SELVI",
      icon: "★",
      targetId: "chapter-hero",
      image: "assets/selvi/portraits/selvi-pink-post.png",
      bgImage: "assets/selvi/portraits/selvi-cottagecore-green.png",
      badge: "The Original"
    }
  ],

  episodes: [
    {
      number: "EP 01",
      title: "Just Selvi",
      target: "#chapter-hero",
      duration: "45m",
      genre: "Original • Identity",
      image: "assets/selvi/portraits/selvi-heart-smile.png",
      description: "An unapologetic introduction to her world, her smile, and the rhythm of her everyday joy."
    },
    {
      number: "EP 02",
      title: "Solo Mode",
      target: "#chapter-solo",
      duration: "30m",
      genre: "Stillness • Peace",
      image: "assets/selvi/portraits/selvi-black-ribbed-profile.png",
      description: "Stepping away from noise. Finding comfort, clarity, and peace in her own solitary space."
    },
    {
      number: "EP 03",
      title: "Varkala",
      target: "#chapter-varkala",
      duration: "52m",
      genre: "Travel • Ocean",
      image: "assets/selvi/varkala/varkala-cliff-sunset.jpg",
      description: "Where crimson cliffs meet the Arabian waves. A sanctuary where time moves at the pace of the tides."
    },
    {
      number: "EP 04",
      title: "Reel Life",
      target: "#chapter-reels",
      duration: "28m",
      genre: "Creator • Frames",
      image: "assets/selvi/fashion/selvi-pink-mesh.png",
      description: "Every short video is a framed mood: outfit check, camera roll curation, rhythmic cuts, and repeat."
    },
    {
      number: "EP 05",
      title: "Different Looks, Same Me",
      target: "#chapter-lookbook",
      duration: "38m",
      genre: "Fashion • Editorial",
      image: "assets/selvi/fashion/selvi-purple-saree.png",
      description: "Dressing up as self-expression. From silk sarees to corset skirts, bold silhouettes, unchanged soul."
    },
    {
      number: "EP 06",
      title: "College Archives",
      target: "#chapter-college",
      duration: "42m",
      genre: "Memories • Film",
      image: "assets/selvi/college/college-archive-1.png",
      description: "Unplanned snapshots and quiet laughter. Chapters that require no explanation, just bring a smile."
    },
    {
      number: "EP 07",
      title: "Checkmate",
      target: "#chapter-chess",
      duration: "24m",
      genre: "Mind • Strategy",
      image: "assets/selvi/portraits/selvi-black-ribbed-tying-hair.png",
      description: "Thinking in angles and patience. Every move on the board mirrors how life is quietly designed."
    },
    {
      number: "EP 08",
      title: "Things I Love",
      target: "#chapter-taste",
      duration: "35m",
      genre: "Favorites • Taste",
      image: "assets/selvi/fashion/selvi-brown-geometric.png",
      description: "Biryani warmth, Vijay Sethupathi screen presence, Tamil melodies on loop, and quiet seaside dreams."
    },
    {
      number: "EP 09",
      title: "Dreaming Bigger",
      target: "#chapter-dreamboard",
      duration: "50m",
      genre: "Aspirations • Future",
      image: "assets/selvi/fashion/selvi-fairy-gown.png",
      description: "Stepping toward the spotlight. Modelling dreams and the blueprint of building a business from scratch."
    },
    {
      number: "EP 10",
      title: "Still Becoming",
      target: "#chapter-future",
      duration: "Finale",
      genre: "Climax • Horizon",
      image: "assets/selvi/fashion/selvi-burgundy-cherry-2.png",
      description: "The reminder to her future self: Keep going, your dreams are waiting. The story continues."
    }
  ],

  wardrobeLooks: [
    {
      id: "look-01",
      number: "LOOK 01",
      title: "The Regal Silks",
      category: "Traditional Elegance",
      image: "assets/selvi/fashion/selvi-purple-saree.png",
      palette: ["#4a154b", "#9d4edd", "#d4af37"],
      quote: "Timeless silk drape, silver jhumkas, and effortless poise."
    },
    {
      id: "look-02",
      number: "LOOK 02",
      title: "Cherry Corset Reverie",
      category: "Modern Romantic",
      image: "assets/selvi/fashion/selvi-burgundy-cherry-2.png",
      palette: ["#631226", "#e63946", "#ffffff"],
      quote: "Deep wine sculpted bodice paired with a playful cherry-tiered sweep."
    },
    {
      id: "look-03",
      number: "LOOK 03",
      title: "Tulle Fairytale",
      category: "Dream Sequence",
      image: "assets/selvi/fashion/selvi-fairy-gown.png",
      palette: ["#ff758f", "#ffb3c1", "#f72585"],
      quote: "Voluminous flared butterfly tulle gown ready for high-fashion frames."
    },
    {
      id: "look-04",
      number: "LOOK 04",
      title: "Botanical Floral Cowl",
      category: "Garden Bloom",
      image: "assets/selvi/portraits/selvi-heart-smile.png",
      palette: ["#f72585", "#7209b7", "#ffe5ec"],
      quote: "Sleeveless floral cowl silhouette with radiant garden warmth."
    },
    {
      id: "look-05",
      number: "LOOK 05",
      title: "Cottagecore Botanics",
      category: "Daylight Ease",
      image: "assets/selvi/portraits/selvi-cottagecore-green.png",
      palette: ["#2d6a4f", "#74c69d", "#f8f9fa"],
      quote: "Smocked white maxi with botanical ivy motifs and sunlit glow."
    },
    {
      id: "look-06",
      number: "LOOK 06",
      title: "Midnight Monochrome",
      category: "Downtown Chic",
      image: "assets/selvi/portraits/selvi-black-ribbed-tying-hair.png",
      palette: ["#141414", "#ffffff", "#8d99ae"],
      quote: "Scalloped lace hem, ribbed texture, and minimal monochrome attitude."
    },
    {
      id: "look-07",
      number: "LOOK 07",
      title: "Earth & Palms",
      category: "Resort Aesthetic",
      image: "assets/selvi/fashion/selvi-red-palmtree.png",
      palette: ["#d90429", "#e8d3a7", "#111111"],
      quote: "Crimson resort button-down with woven palm silhouettes and ivory trousers."
    },
    {
      id: "look-08",
      number: "LOOK 08",
      title: "Velvet Plum Salwar",
      category: "Heritage Grace",
      image: "assets/selvi/fashion/selvi-purple-salwar.png",
      palette: ["#3c096c", "#7b2cbf", "#e0aaff"],
      quote: "Intricate neck embroidery with flowing ombre dupatta."
    }
  ],

  reels: [
    {
      id: "reel-01",
      number: "REEL 01",
      caption: "Pink Bloom Mood",
      src: "assets/selvi/reels/reel_07.mp4",
      poster: "assets/selvi/portraits/selvi-heart-smile.png",
      badge: "Trending Sound"
    },
    {
      id: "reel-02",
      number: "REEL 02",
      caption: "Saree Aesthetic Frame",
      src: "assets/selvi/reels/reel_08.mp4",
      poster: "assets/selvi/fashion/selvi-purple-saree.png",
      badge: "Silk Glow"
    },
    {
      id: "reel-03",
      number: "REEL 03",
      caption: "Confidence & Rose Hue",
      src: "assets/selvi/reels/reel_09.mp4",
      poster: "assets/selvi/fashion/selvi-burgundy-cherry-3.png",
      badge: "Editorial Reel"
    },
    {
      id: "reel-04",
      number: "REEL 04",
      caption: "Quiet Motion Story",
      src: "assets/selvi/reels/reel_01.mp4",
      poster: "assets/selvi/fashion/selvi-blue-croptop.png",
      badge: "Style Reel"
    },
    {
      id: "reel-05",
      number: "REEL 05",
      caption: "Daylight Curations",
      src: "assets/selvi/reels/reel_02.mp4",
      poster: "assets/selvi/fashion/selvi-pink-mesh.png",
      badge: "Creator Life"
    },
    {
      id: "reel-06",
      number: "REEL 06",
      caption: "Vibes & Transitions",
      src: "assets/selvi/reels/reel_03.mp4",
      poster: "assets/selvi/fashion/selvi-cream-casual.png",
      badge: "Behind The Scenes"
    }
  ],

  dayInHerWorld: [
    { step: "01", title: "GET READY", emoji: "✨", desc: "Setting the tone with curated energy." },
    { step: "02", title: "PICK A LOOK", emoji: "👗", desc: "Dressing up and trying different looks." },
    { step: "03", title: "MAKE A REEL", emoji: "🎥", desc: "Framing aesthetics, angles, and natural glow." },
    { step: "04", title: "BIRYANI", emoji: "🍛", desc: "The non-negotiable comfort food." },
    { step: "05", title: "TAMIL MUSIC", emoji: "🎧", desc: "Melodies that stay on perpetual repeat." },
    { step: "06", title: "CHESS", emoji: "♟️", desc: "One move at a time. Strategy in silence." },
    { step: "07", title: "SOLO TIME", emoji: "🌙", desc: "Sometimes being alone is peaceful." },
    { step: "08", title: "DREAM BIGGER", emoji: "♡", desc: "Modelling. Entrepreneurship. What's next." }
  ],

  collegeArchives: [
    {
      title: "Archive Frame A",
      stamp: "MEM // 01",
      src: "assets/selvi/college/college-archive-1.png",
      note: "Unfiltered campus light."
    },
    {
      title: "Archive Frame B",
      stamp: "MEM // 02",
      src: "assets/selvi/college/college-archive-2.png",
      note: "Smiles that need no words."
    },
    {
      title: "Archive Frame C",
      stamp: "MEM // 03",
      src: "assets/selvi/college/college-archive-3.png",
      note: "Walking between lecture bells."
    },
    {
      title: "Archive Frame D",
      stamp: "MEM // 04",
      src: "assets/selvi/college/college-archive-4.png",
      note: "Quiet moments by the green posts."
    }
  ],

  varkalaGallery: [
    {
      type: "landscape",
      src: "assets/selvi/varkala/varkala-cliff-sunset.jpg",
      caption: "Laterite Cliffs & Arabian Horizon",
      tag: "Varkala Cliffside"
    },
    {
      type: "portrait",
      src: "assets/selvi/varkala/varkala-palms.png",
      caption: "Coastal Crimson Silhouette",
      tag: "Resort Walk"
    },
    {
      type: "landscape",
      src: "assets/selvi/varkala/varkala-beach-waves.jpg",
      caption: "Tidal Waves at Dusk",
      tag: "Arabian Sea"
    },
    {
      type: "portrait",
      src: "assets/selvi/varkala/varkala-solitude.png",
      caption: "Peace In The Breeze",
      tag: "Solo Frame"
    }
  ],

  gallery: [
    { src: "assets/selvi/portraits/selvi-heart-smile.png", caption: "Original Smile", category: "portraits" },
    { src: "assets/selvi/fashion/selvi-purple-saree.png", caption: "Silk Drapes & Jhumkas", category: "fashion" },
    { src: "assets/selvi/fashion/selvi-burgundy-cherry-2.png", caption: "Cherry Tiered Silhouette", category: "fashion" },
    { src: "assets/selvi/fashion/selvi-fairy-gown.png", caption: "Butterfly Tulle Volume", category: "fashion" },
    { src: "assets/selvi/portraits/selvi-cottagecore-green.png", caption: "Summer Cottage Bloom", category: "portraits" },
    { src: "assets/selvi/fashion/selvi-bronze-kurti.png", caption: "Thread Embroidered Silk", category: "fashion" },
    { src: "assets/selvi/portraits/selvi-black-ribbed-tying-hair.png", caption: "Effortless Updo", category: "portraits" },
    { src: "assets/selvi/fashion/selvi-red-palmtree.png", caption: "Crimson Palm Shirt", category: "fashion" },
    { src: "assets/selvi/fashion/selvi-purple-salwar.png", caption: "Heritage Kurti & Dupatta", category: "fashion" },
    { src: "assets/selvi/portraits/selvi-pink-post.png", caption: "Sunlit Promenade", category: "portraits" },
    { src: "assets/selvi/fashion/selvi-cream-casual.png", caption: "Wide-Leg Ease", category: "fashion" },
    { src: "assets/selvi/varkala/varkala-cliff-sunset.jpg", caption: "Varkala Sunset Shore", category: "travel" },
    { src: "assets/selvi/fashion/selvi-burgundy-cowl-skirt.png", caption: "Burgundy Cowl & Midi", category: "fashion" },
    { src: "assets/selvi/fashion/selvi-black-floral-maxi.png", caption: "Black Floral Silhouette", category: "fashion" },
    { src: "assets/selvi/fashion/selvi-pink-mesh.png", caption: "Mesh Rose Top", category: "fashion" },
    { src: "assets/selvi/portraits/selvi-flowers-back.png", caption: "Bougainvillea Contemplation", category: "portraits" }
  ],

  dreams: {
    modelling: {
      number: "01",
      title: "MODELLING",
      headline: "ONE DAY, THE CAMERA WON'T JUST BE FOR REELS.",
      subhead: "Modelling.",
      status: "IN DEVELOPMENT",
      tagline: "High fashion editorial frames, runway silhouettes, and magazine spreads.",
      mockIssue: "SELVI — FUTURE ISSUE",
      image: "assets/selvi/fashion/selvi-fairy-gown.png"
    },
    business: {
      number: "02",
      title: "MY OWN BUSINESS",
      headline: "BUILD SOMETHING OF MY OWN.",
      subhead: "Start a business.",
      status: "IN DEVELOPMENT",
      tagline: "Independent vision. Built from ground up.",
      card: {
        project: "UNKNOWN",
        founder: "SELVI",
        status: "DREAMING → BUILDING"
      },
      image: "assets/selvi/fashion/selvi-burgundy-cowl-skirt.png"
    }
  },

  soundtrack: {
    title: "THE LIFE OF RAM",
    artist: "Govind Vasantha • Pradeep Kumar",
    album: "'96 • Vijay Sethupathi",
    genre: "Tamil Soul • The Solitude Anthem",
    duration: "05:40",
    src: "assets/selvi/audio/The_Life_Of_Ram-MassTamilan.com.mp3"
  },

  credits: {
    title: "SELVI",
    subtitle: "IN MY OWN FRAME",
    starring: "Tamilselvi",
    alsoStarring: [
      { item: "Biryani", emoji: "🍛" },
      { item: "Tamil Music", emoji: "🎵" },
      { item: "Reels", emoji: "🎬" },
      { item: "Chess", emoji: "♟️" },
      { item: "Varkala", emoji: "🌊" },
      { item: "Different Looks", emoji: "✨" },
      { item: "Peaceful Solitude", emoji: "🌙" }
    ],
    dreamSequences: ["Modelling", "Entrepreneurship"],
    directedBy: "Her Own Choices",
    finalLine: "This season is still being written."
  },

  nextSeason: {
    wait: "WAIT...",
    sub: "There's more.",
    cards: [
      {
        tag: "NEXT SEASON",
        era: "MODEL ERA ✨",
        status: "COMING SOON",
        image: "assets/selvi/fashion/selvi-fairy-gown.png",
        desc: "Editorial campaigns and high fashion frames."
      },
      {
        tag: "NEXT SEASON",
        era: "FOUNDER ERA 💼",
        status: "COMING SOON",
        image: "assets/selvi/fashion/selvi-burgundy-cowl-skirt.png",
        desc: "Building a brand from the ground up."
      }
    ],
    finalQuote: "The best part? She hasn't become everything she's going to be yet."
  }
};

if (typeof module !== 'undefined' && module.exports) {
  module.exports = selviData;
}
