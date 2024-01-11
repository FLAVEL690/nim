import { Component, OnInit } from '@angular/core';
import { AnimationController, ModalController } from '@ionic/angular';

@Component({
  selector: 'app-game',
  templateUrl: './game.page.html',
  styleUrls: ['./game.page.scss'],
})
export class GamePage implements OnInit {

  tabDisplay: any[] = []
  pile: number = 20;
  joueur: string = '';
  nameGamer: string = '';
  message: string = '';
  modalIsOpen: boolean = false;
  nombreDuJoueurCourant = 0;
  displayNbSystem = false

  constructor(
    private animationCtrl: AnimationController,
    private modale: ModalController,
  ) {
    this.openModal();
  }

  // eslint-disable-next-line @angular-eslint/no-empty-lifecycle-method
  ngOnInit() {
  }

  nouveauJeu() {
    
  }

  // Retirer un nombre d'objets de la pile

  retirer(nombre: number) {
    // Vérifier que le coup est valide
   
  }

  estTermine() {
    // Le jeu est terminé si la pile est vide
    
  }

  jouerSysteme() {
    
  }


  nbBatSubs() {
    if (this.pile > 20) {
      this.pile--
    }
  }

  nbBatAdd() {
    this.pile++
  }

  openModal() {
    this.pile = 0;
    this.pile = 20;
    this.modalIsOpen = true
  }

  closeModal() {
    this.modale.dismiss();
    this.modalIsOpen = false
  }


  //======================= ANIMATION ========================

  enterAnimation = (baseEl: HTMLElement) => {
    const root = baseEl.shadowRoot;

    const backdropAnimation = this.animationCtrl
      .create()
      .addElement(root?.querySelector('ion-backdrop')!)
      .fromTo('opacity', '0.01', 'var(--backdrop-opacity)');

    const wrapperAnimation = this.animationCtrl
      .create()
      .addElement(root?.querySelector('.modal-wrapper')!)
      .keyframes([
        { offset: 0, opacity: '0', transform: 'scale(0)' },
        { offset: 1, opacity: '0.99', transform: 'scale(1)' },
      ]);

    return this.animationCtrl
      .create()
      .addElement(baseEl)
      .easing('ease-out')
      .duration(500)
      .addAnimation([backdropAnimation, wrapperAnimation]);
  };

  leaveAnimation = (baseEl: HTMLElement) => {
    return this.enterAnimation(baseEl).direction('reverse');
  };

}
