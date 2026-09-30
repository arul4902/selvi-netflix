# SELVI — IN MY OWN FRAME
### A Cinematic Streaming-Platform Experience for Tamilselvi

An immersive personal streaming-inspired platform celebrating individuality, peace in solitude, creative storytelling, and future aspirations.

> “My story doesn't need one defining moment. I'm still creating it.”
> 
> “Sometimes being alone is peaceful.”
> 
> “Main character. Her own pace. Her own story.”

---

## ✦ Features

- **Cinematic Prologue**: Monogram light sweep animation with skip option.
- **Dynamic Profile Gate**: Interactive persona selector with live atmospheric background shifting (*The Traveller*, *The Creator*, *The Fashion Girl*, *The Dreamer*, *Just Selvi*).
- **Featured Original Hero**: Ken Burns cinematic camera push, film grain, and editorial title composition.
- **Continue Watching Shelf**: 10-episode horizontal carousel with card hover expansion and progress indicators.
- **“No Big Moment” Narrative**: Turning the absence of a single favorite memory into a message of open horizons and calm optimism.
- **Solo Mode Sanctuary**: A distraction-free zen mode with calm dark visuals, reduced UI, and environmental soundscapes.
- **Varkala Escape**: Red laterite cliffs, Arabian sea waves, coastal film strip, and full-screen Escape Mode.
- **Reel Life Suite**: 9:16 vertical video cards with hover playback preview and timeline scrubber.
- **Lookbook & Virtual Wardrobe**: Interactive wardrobe selector and digital high-fashion magazine covers.
- **College Archives**: Timestamped retro film-grain memories.
- **3D Chess Interaction**: Isometric CSS 3D board with interactive legal Queen move and narrative toast reveal.
- **Selvi Radio**: Featuring ***The Life of Ram*** (*'96 • Vijay Sethupathi*) with live real-time audio waveform visualizer and docked persistent mini-player.
- **Mood Shuffle**: Dynamic mood randomizer adapting typography, quotes, and ambient lighting.
- **Future Self & Next Season**: Emotional climax leading to end credits and previews for the *Model Era* & *Founder Era*.
- **Selvi Remote**: Floating streaming controller with instant chapter jumps.
- **Hidden Easter Egg**: Interactive secret chess piece.

---

## ✦ Project Structure

```
├── index.html                    # Master semantic HTML5 interface
├── serve.js                      # Node.js HTTP streaming server
├── assets/
│   ├── css/
│   │   └── styles.css            # Cinematic UI tokens, 3D chess, grain, responsive design
│   ├── js/
│   │   ├── selviData.js          # Centralized configuration (authentic facts only)
│   │   ├── audioManager.js       # Audio engine (The Life of Ram, Web Audio analyser, waveform)
│   │   └── app.js                # Core interactive controllers
│   └── selvi/
│       ├── portraits/            # Authentic photo portraits
│       ├── fashion/              # Editorial styles & lookbook frames
│       ├── reels/                # 9 MP4 video reels
│       ├── varkala/              # Varkala cliff & ocean imagery
│       ├── college/              # Nostalgic college film archives
│       └── audio/                # The Life of Ram soundtrack
```

---

## ✦ Getting Started

To run locally with Node.js:

```bash
node serve.js
```

Then visit **http://localhost:3000** in your browser.
