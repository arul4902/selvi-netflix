/**
 * Audio Manager for Selvi Radio & Cinematic Experience
 * Powered by 'The Life of Ram' (Vijay Sethupathi / Govind Vasantha / '96)
 * Supports real-time HTML5 audio streaming, Web Audio API frequency analysis,
 * live canvas waveform visualization, and automated start playback.
 */

class SelviAudioManager {
  constructor() {
    this.audioSrc = 'assets/selvi/audio/The_Life_Of_Ram-MassTamilan.com.mp3';
    this.audioEl = null;
    this.ctx = null;
    this.sourceNode = null;
    this.analyser = null;
    this.dataArray = null;
    this.isPlaying = false;
    this.isMuted = false;
    this.volume = 0.8;
    this.currentTime = 0;
    this.duration = 340; // Approx 5:40 default, updated on loadedmetadata
    this.visualizerCanvas = null;
    this.visualizerCtx = null;
    this.isSourceConnected = false;
    this.autoplayAttempted = false;

    this.initAudioElement();
  }

  initAudioElement() {
    if (!this.audioEl) {
      this.audioEl = new Audio(this.audioSrc);
      this.audioEl.preload = 'auto';
      this.audioEl.loop = true;
      this.audioEl.volume = this.volume;

      this.audioEl.addEventListener('loadedmetadata', () => {
        if (this.audioEl.duration && !isNaN(this.audioEl.duration)) {
          this.duration = Math.floor(this.audioEl.duration);
          this.updateTimeDisplay();
        }
      });

      this.audioEl.addEventListener('timeupdate', () => {
        this.currentTime = Math.floor(this.audioEl.currentTime);
        this.updateTimeDisplay();
      });

      this.audioEl.addEventListener('play', () => {
        this.isPlaying = true;
        this.updateUI();
      });

      this.audioEl.addEventListener('pause', () => {
        this.isPlaying = false;
        this.updateUI();
      });
    }
  }

  initContext() {
    if (!this.ctx) {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      this.ctx = new AudioCtx();
      this.analyser = this.ctx.createAnalyser();
      this.analyser.fftSize = 64;
      const bufferLength = this.analyser.frequencyBinCount;
      this.dataArray = new Uint8Array(bufferLength);
    }

    if (this.ctx.state === 'suspended') {
      this.ctx.resume();
    }

    if (this.audioEl && !this.isSourceConnected) {
      try {
        this.sourceNode = this.ctx.createMediaElementSource(this.audioEl);
        this.sourceNode.connect(this.analyser);
        this.analyser.connect(this.ctx.destination);
        this.isSourceConnected = true;
      } catch (err) {
        console.warn('Audio node connection note:', err);
      }
    }
  }

  attemptAutoplay() {
    if (this.autoplayAttempted) return;
    this.autoplayAttempted = true;

    // First try direct play
    const playPromise = this.audioEl.play();
    if (playPromise !== undefined) {
      playPromise.then(() => {
        this.isPlaying = true;
        this.initContext();
        this.updateUI();
      }).catch(() => {
        // Browser autoplay blocked -> attach first-interaction listener
        const startAudioOnFirstGesture = () => {
          this.play();
          window.removeEventListener('pointerdown', startAudioOnFirstGesture);
          window.removeEventListener('keydown', startAudioOnFirstGesture);
          window.removeEventListener('click', startAudioOnFirstGesture);
        };
        window.addEventListener('pointerdown', startAudioOnFirstGesture, { once: true });
        window.addEventListener('keydown', startAudioOnFirstGesture, { once: true });
        window.addEventListener('click', startAudioOnFirstGesture, { once: true });
      });
    }
  }

  startVisualizer(canvasElement) {
    if (!canvasElement) return;
    this.visualizerCanvas = canvasElement;
    this.visualizerCtx = canvasElement.getContext('2d');
    this.renderWaveform();
  }

  renderWaveform() {
    requestAnimationFrame(() => this.renderWaveform());
    if (!this.visualizerCanvas || !this.visualizerCtx) return;

    const width = this.visualizerCanvas.width;
    const height = this.visualizerCanvas.height;
    const ctx = this.visualizerCtx;

    ctx.clearRect(0, 0, width, height);

    if (!this.isPlaying) {
      // Idle gentle subtle line
      ctx.beginPath();
      ctx.moveTo(0, height / 2);
      for (let x = 0; x < width; x += 10) {
        const y = height / 2 + Math.sin(x * 0.05 + Date.now() * 0.002) * 3;
        ctx.lineTo(x, y);
      }
      ctx.strokeStyle = 'rgba(212, 175, 55, 0.25)';
      ctx.lineWidth = 2;
      ctx.stroke();
      return;
    }

    if (this.analyser && this.dataArray) {
      this.analyser.getByteFrequencyData(this.dataArray);
      const barWidth = (width / this.dataArray.length) * 1.5;
      let x = 0;

      for (let i = 0; i < this.dataArray.length; i++) {
        const barHeight = (this.dataArray[i] / 255) * height * 0.9 + 4;

        // Gradient from warm champagne to burgundy
        const grad = ctx.createLinearGradient(0, height, 0, height - barHeight);
        grad.addColorStop(0, '#801B36');
        grad.addColorStop(0.6, '#D4AF37');
        grad.addColorStop(1, '#FFF2D6');

        ctx.fillStyle = grad;
        ctx.fillRect(x, height - barHeight, barWidth - 2, barHeight);

        x += barWidth;
      }
    }
  }

  togglePlay() {
    if (this.isPlaying) {
      this.pause();
    } else {
      this.play();
    }
  }

  play() {
    this.initContext();
    this.audioEl.play().then(() => {
      this.isPlaying = true;
      this.updateUI();
    }).catch(e => console.log('Playback error:', e));
  }

  pause() {
    if (this.audioEl) {
      this.audioEl.pause();
    }
    this.isPlaying = false;
    this.updateUI();
  }

  seek(percentage) {
    if (this.audioEl && this.duration) {
      this.audioEl.currentTime = this.duration * percentage;
      this.currentTime = Math.floor(this.audioEl.currentTime);
      this.updateTimeDisplay();
    }
  }

  setVolume(val) {
    this.volume = parseFloat(val);
    if (this.audioEl) {
      this.audioEl.volume = this.isMuted ? 0 : this.volume;
    }
  }

  toggleMute() {
    this.isMuted = !this.isMuted;
    if (this.audioEl) {
      this.audioEl.volume = this.isMuted ? 0 : this.volume;
    }
    this.updateUI();
  }

  toggleSoloAudio(enable) {
    if (enable) {
      // Gently soften soundtrack volume for peaceful solo mode
      if (this.audioEl) {
        this.audioEl.volume = this.isMuted ? 0 : this.volume * 0.4;
      }
    } else {
      if (this.audioEl) {
        this.audioEl.volume = this.isMuted ? 0 : this.volume;
      }
    }
  }

  updateTimeDisplay() {
    const mins = Math.floor(this.currentTime / 60);
    const secs = (this.currentTime % 60).toString().padStart(2, '0');
    const totMins = Math.floor(this.duration / 60);
    const totSecs = (this.duration % 60).toString().padStart(2, '0');

    const currElem = document.getElementById('radioCurrentTime');
    const totElem = document.getElementById('radioDuration');
    const progressBar = document.getElementById('radioProgressBar');
    const miniCurrent = document.getElementById('miniTimeCurrent');

    if (currElem) currElem.textContent = `${mins}:${secs}`;
    if (totElem) totElem.textContent = `${totMins}:${totSecs}`;
    if (miniCurrent) miniCurrent.textContent = `${mins}:${secs}`;
    if (progressBar && this.duration > 0) {
      const pct = (this.currentTime / this.duration) * 100;
      progressBar.style.width = `${pct}%`;
    }
  }

  updateUI() {
    const playBtns = document.querySelectorAll('.js-audio-play-toggle');
    playBtns.forEach(btn => {
      if (this.isPlaying) {
        btn.innerHTML = '<span class="play-icon">⏸</span><span>PAUSE</span>';
        btn.classList.add('playing');
        btn.setAttribute('aria-label', 'Pause The Life of Ram');
      } else {
        btn.innerHTML = '<span class="play-icon">▶</span><span>PLAY</span>';
        btn.classList.remove('playing');
        btn.setAttribute('aria-label', 'Play The Life of Ram');
      }
    });

    const miniPlayBtn = document.getElementById('miniPlayerToggle');
    if (miniPlayBtn) {
      miniPlayBtn.innerHTML = this.isPlaying ? '⏸' : '▶';
    }

    const muteBtns = document.querySelectorAll('.js-audio-mute-toggle');
    muteBtns.forEach(btn => {
      btn.innerHTML = this.isMuted ? '🔇' : '🔊';
    });

    const dock = document.getElementById('dockedMusicPlayer');
    if (dock) {
      if (this.isPlaying) {
        dock.classList.add('active');
      }
    }
  }
}

window.selviAudio = new SelviAudioManager();

// Trigger autoplay on site load
window.addEventListener('DOMContentLoaded', () => {
  window.selviAudio.attemptAutoplay();
});
