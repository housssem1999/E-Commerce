import firebase from 'firebase/app';
import { Subject } from 'rxjs';
import { Appareil } from '../models/Appareil';




export class AppareilsService {
    appareils$ = new Subject <Appareil[]>();

    appareilsList: Appareil[] = [
    ];

    addAppareil(appareil: Appareil) {
        this.appareilsList.push(appareil);
        this.emitAppareils();
    }
    emitAppareils() {
        this.appareils$.next(this.appareilsList.slice());
    }
    saveData() {
        return new Promise((resolve, reject) => {
          firebase.database().ref('appareils').set(this.appareilsList).then(
            (data) => {
              resolve(data);
            },(error) => {
              reject(error);
            });
          });
        }
  
      retrieveData() {
        return new Promise((resolve, reject) => {
          firebase.database().ref('appareils').once('value').then(
            (data) => {
              this.appareilsList = data.val();
              this.emitAppareils();
              resolve('Données récupérées avec succès !');
            }, (error) => {
              reject(error);
            });
        });
      }


}