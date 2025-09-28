import { Component, AfterViewInit, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-main-home',
  imports: [],
  templateUrl: './main-home.html',
  styleUrl: './main-home.css'
})
export class MainHome implements AfterViewInit {
  @ViewChild('videoElement') videoElement!: ElementRef<HTMLVideoElement>;
  
  videoSource = 'iphone16.mp4';

  ngAfterViewInit() {
    // Attendre un peu que le DOM soit complètement chargé
    setTimeout(() => {
      this.initVideo();
    }, 100);
  }

  private initVideo() {
    const video = this.videoElement.nativeElement;
    
    console.log('Initializing video...', video);
    

    // Écouter les événements de la vidéo
    video.addEventListener('loadeddata', () => {
      console.log('Video loaded, attempting autoplay...');
      this.attemptAutoplay();
    });

    video.addEventListener('error', (e) => {
      console.error('Video error:', e);
    });

    // Si la vidéo est déjà chargée
    if (video.readyState >= 2) {
      this.attemptAutoplay();
    }
  }

  private attemptAutoplay() {
    const video = this.videoElement.nativeElement;
    
    // S'assurer que la vidéo est mutée pour l'autoplay
    video.muted = true;
    video.volume = 0;
    
    // Tentative de lecture automatique
    video.play()
      .then(() => {
        console.log('Autoplay successful!');
      })
      .catch(error => {
        console.log('Autoplay prevented by browser:', error);
        // Optionnel: afficher un bouton play
        this.showPlayButton();
      });
  }

  private showPlayButton() {
    // Optionnel: logique pour afficher un bouton play si l'autoplay échoue
    console.log('Consider showing a play button for user interaction');
  }
}
