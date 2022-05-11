import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Camera, CameraOptions } from '@ionic-native/camera';
import { NavController } from 'ionic-angular';
import { Appareil } from '../../models/Appareil';
import { AppareilsService } from '../../Services/appareil.service';


@Component({
  selector: 'page-appareil-form',
  templateUrl: 'appareil-form.html',
})
export class AppareilFormPage implements OnInit {
  appareilForm: FormGroup;
  image = '';
  inputText:string='';
  inputText1:string='';
  constructor(private formBuilder: FormBuilder,
        public navCtrl: NavController,
        public appareilsService: AppareilsService,
        public camera: Camera
        ) {}
    ngOnInit() {
    this.initForm();
    }
    initForm() {
    this.appareilForm = this.formBuilder.group({
    name: ['', Validators.required],
    description: this.formBuilder.array([])
    });
    }
    getDescriptionArray() {
      return this.appareilForm.get('description') as FormArray;
    }
    onAddDescription() {
      let newControl = this.formBuilder.control('');
      this.getDescriptionArray().controls.push(newControl);
    }
    onRemoveDescription(index: number) {
      this.getDescriptionArray().removeAt(index);
    }
    onSubmitForm() {
      let newFruit = new Appareil(this.appareilForm.get('name').value);
      for (let control of this.getDescriptionArray().controls) {
      newFruit.description.push(control.value);
      }
      newFruit.name=this.inputText;
      newFruit.Prix=this.inputText1+"DT";
      newFruit.imagePath=this.image;
      console.log(this.image);
      this.appareilsService.addAppareil(newFruit);
      this.navCtrl.pop();
      }
      async addPhoto(source: string) {
        if (source === 'camera') {
        console.log('camera');
        const cameraPhoto = await this.openCamera();
        this.image = 'data:image/jpg;base64,' + cameraPhoto;
        } else {
        console.log('library');
        const libraryImage = await this.openLibrary();
        this.image = 'data:image/jpg;base64,' + libraryImage;
        }
        }
      async openCamera() {
        const options: CameraOptions = {
        quality: 100,
        destinationType: this.camera.DestinationType.DATA_URL,
        encodingType: this.camera.EncodingType.JPEG,
        mediaType: this.camera.MediaType.PICTURE,
        targetWidth: 1000,
        targetHeight: 1000,
        sourceType: this.camera.PictureSourceType.CAMERA
        };
        return await this.camera.getPicture(options);
        }
      async openLibrary() {
        const options: CameraOptions = {
        quality: 100,
        destinationType: this.camera.DestinationType.DATA_URL,
        encodingType: this.camera.EncodingType.JPEG,
        mediaType: this.camera.MediaType.PICTURE,
        targetWidth: 1000,
        targetHeight: 1000,
        sourceType: this.camera.PictureSourceType.PHOTOLIBRARY
        };
        return await this.camera.getPicture(options);
        }
                 
  }
