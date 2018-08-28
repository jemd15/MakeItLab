import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ProvidersApiServiceProvider } from '../../providers/providers-api-service/providers-api-service';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  lights = {
    cowork: false,
    workshopCentral: false,
    workshopLateral: false,
    impresoras3D: false,
    ideas1: false,
    ideas2: false,
    freeWorkDerecho: false,
    freeWorkIzquierdo: false,
    innoBar: false,
    letrero: false
  }

  constructor(public navCtrl: NavController, private api: ProvidersApiServiceProvider) { }

  ionViewDidLoad() {
    console.log('panel de switches')
    console.log(this.state('cowork'))
    this.state('cowork')
    this.state('workshop cental')
  }

  action(place:string){
    console.log(`action`)
    switch(place){
      case 'cowork':
      console.log(this.lights.cowork)
      if(this.lights.cowork == true){
        this.lights.cowork = false
        this.turnOff(place)
      }else{
        this.lights.cowork = true
        this.turnOn(place)
      }
      break
      case 'workshop cental':
      console.log(this.lights.workshopCentral)
      if(this.lights.workshopCentral == true){
        this.lights.workshopCentral = false
        this.turnOff(place)
      }else{
        this.lights.workshopCentral = true
        this.turnOn(place)
      }
      break
      case 'workshop lateral':
      console.log(this.lights.workshopLateral)
      if(this.lights.workshopLateral == true){
        this.lights.workshopLateral = false
        this.turnOff(place)
      }else{
        this.lights.workshopLateral = true
        this.turnOn(place)
      }
      break
      case 'impresoras 3d':
      console.log(this.lights.impresoras3D)
      if(this.lights.impresoras3D == true){
        this.lights.impresoras3D = false
        this.turnOff(place)
      }else{
        this.lights.impresoras3D = true
        this.turnOn(place)
      }
      break
      case 'ideas 1':
      console.log(this.lights.ideas1)
      if(this.lights.ideas1 == true){
        this.lights.ideas1 = false
        this.turnOff(place)
      }else{
        this.lights.ideas1 = true
        this.turnOn(place)
      }
      break
      case 'ideas 2':
      console.log(this.lights.ideas2)
      if(this.lights.ideas2 == true){
        this.lights.ideas2 = false
        this.turnOff(place)
      }else{
        this.lights.ideas2 = true
        this.turnOn(place)
      }
      break
      case 'free work derecho':
      console.log(this.lights.freeWorkDerecho)
      if(this.lights.freeWorkDerecho == true){
        this.lights.freeWorkDerecho = false
        this.turnOff(place)
      }else{
        this.lights.freeWorkDerecho = true
        this.turnOn(place)
      }
      break
      case 'free work izquierdo':
      console.log(this.lights.freeWorkIzquierdo)
      if(this.lights.freeWorkIzquierdo == true){
        this.lights.freeWorkIzquierdo = false
        this.turnOff(place)
      }else{
        this.lights.freeWorkIzquierdo = true
        this.turnOn(place)
      }
      break
      case 'inno-bar':
      console.log(this.lights.innoBar)
      if(this.lights.innoBar == true){
        this.lights.innoBar = false
        this.turnOff(place)
      }else{
        this.lights.innoBar = true
        this.turnOn(place)
      }
      break
      case 'letrero':
      console.log(this.lights.letrero)
      if(this.lights.letrero == true){
        this.lights.letrero = false
        this.turnOff(place)
      }else{
        this.lights.letrero = true
        this.turnOn(place)
      }
      break
    }
  }

  turnOn(place:string){
    console.log(`turn on`)
    switch(place){
      case 'cowork':
      this.lights.cowork = true
      break
      case 'workshop cental':
      this.lights.workshopCentral = true
      break
      case 'workshop lateral':
      this.lights.workshopLateral = true
      break
      case 'impresoras 3d':
      this.lights.impresoras3D = true
      break
      case 'ideas 1':
      this.lights.ideas1 = true
      break
      case 'ideas 2':
      this.lights.ideas2 = true
      break
      case 'free work derecho':
      this.lights.freeWorkDerecho = true
      break
      case 'free work izquierdo':
      this.lights.freeWorkIzquierdo = true
      break
      case 'inno-bar':
      this.lights.innoBar = true
      break
      case 'letrero':
      this.lights.letrero = true
      break
    }
    this.api.turnOnLight(place)
    .then((res:any) =>{
      this.state(place)
    })
    .catch((reason) => {
      console.log('Error', reason)
    })
  }

  turnOff(place:string){
    console.log(`turn off`)
    switch(place){
      case 'cowork':
      this.lights.cowork = false
      break
      case 'workshop cental':
      this.lights.workshopCentral = false
      break
      case 'workshop lateral':
      this.lights.workshopLateral = false
      break
      case 'impresoras 3d':
      this.lights.impresoras3D = false
      break
      case 'ideas 1':
      this.lights.ideas1 = false
      break
      case 'ideas 2':
      this.lights.ideas2 = false
      break
      case 'free work derecho':
      this.lights.freeWorkDerecho = false
      break
      case 'free work izquierdo':
      this.lights.freeWorkIzquierdo = false
      break
      case 'inno-bar':
      this.lights.innoBar = false
      break
      case 'letrero':
      this.lights.letrero = false
      break
    }
    this.api.turnOffLight(place)
    .then((res:any) =>{
      this.state(place)
    })
    .catch((reason) => {
      console.log('Error', reason)
    })
  }

  state(place:string){
    console.log(`state`)
    this.api.statusLight(place)
    .then((res:any) =>{
      switch(place){
        case 'cowork':
        this.lights.cowork = (place = '1') ? true:false
        break
        case 'workshop cental':
        this.lights.workshopCentral = (place = '1') ? true:false
        break
        case 'workshop lateral':
        this.lights.workshopLateral = (place = '1') ? true:false
        break
        case 'impresoras 3d':
        this.lights.impresoras3D = (place = '1') ? true:false
        break
        case 'ideas 1':
        this.lights.ideas1 = (place = '1') ? true:false
        break
        case 'ideas 2':
        this.lights.ideas2 = (place = '1') ? true:false
        break
        case 'free work derecho':
        this.lights.freeWorkDerecho = (place = '1') ? true:false
        break
        case 'free work izquierdo':
        this.lights.freeWorkIzquierdo = (place = '1') ? true:false
        break
        case 'inno-bar':
        this.lights.innoBar = (place = '1') ? true:false
        break
        case 'letrero':
        this.lights.letrero = (place = '1') ? true:false
        break
      }
    })
    .catch((reason) => {
      console.log('Error', reason)
    })
  }

}
