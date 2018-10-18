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
    letrero: false,
    meetingSpace: false,
    all: true
  }

  constructor(public navCtrl: NavController, private api: ProvidersApiServiceProvider) { }

  ionViewDidLoad() {
    this.state('inno-bar')
  }

  action(place:string){
    console.log(`action`)
    switch(place){
      case 'all':
      if(this.lights.all){
        this.lights.cowork = false
        this.lights.workshopCentral = false
        this.lights.workshopLateral = false
        this.lights.impresoras3D = false
        this.lights.ideas1 = false
        this.lights.ideas2 = false
        this.lights.freeWorkDerecho = false
        this.lights.freeWorkIzquierdo = false
        this.lights.innoBar = false
        this.lights.letrero = false
        this.lights.meetingSpace = false
        this.lights.all = false
        this.turnOff('cowork')
        this.turnOff('workshop central')
        this.turnOff('workshop lateral')
        this.turnOff('impresoras 3d')
        this.turnOff('ideas 1')
        this.turnOff('ideas 2')
        this.turnOff('free work derecho')
        this.turnOff('free work izquierdo')
        this.turnOff('inno-bar')
        this.turnOff('letrero')
        this.turnOff('meeting space')
        console.log('Apagar todo')
      }else{
        this.lights.cowork = true
        this.lights.workshopCentral = true
        this.lights.workshopLateral = true
        this.lights.impresoras3D = true
        this.lights.ideas1 = true
        this.lights.ideas2 = true
        this.lights.freeWorkDerecho = true
        this.lights.freeWorkIzquierdo = true
        this.lights.innoBar = true
        this.lights.letrero = true
        this.lights.meetingSpace = true
        this.lights.all = true
        this.turnOn('cowork')
        this.turnOn('workshop central')
        this.turnOn('workshop lateral')
        this.turnOn('impresoras 3d')
        this.turnOn('ideas 1')
        this.turnOn('ideas 2')
        this.turnOn('free work derecho')
        this.turnOn('free work izquierdo')
        this.turnOn('inno-bar')
        this.turnOn('letrero')
        this.turnOn('meeting space')
        console.log('Encender todo')
      }
      break
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
      case 'workshop central':
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
      case 'meeting space':
      console.log(this.lights.meetingSpace)
      if(this.lights.meetingSpace == true){
        this.lights.meetingSpace = false
        this.turnOff(place)
      }else{
        this.lights.meetingSpace = true
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
      case 'meeting space':
      this.lights.meetingSpace = true
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
      case 'meeting space':
      this.lights.meetingSpace = false
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
    console.log(`state function: ${place}`)
    console.time('estado')
    this.api.statusLight(place)
    .then((res:any) =>{
      switch(place){
        case 'cowork':
        this.lights.cowork = (res == '1') ? true:false
        break
        case 'workshop cental':
        this.lights.workshopCentral = (res == '1') ? true:false
        break
        case 'workshop lateral':
        this.lights.workshopLateral = (res == '1') ? true:false
        break
        case 'impresoras 3d':
        this.lights.impresoras3D = (res == '1') ? true:false
        break
        case 'ideas 1':
        this.lights.ideas1 = (res == '1') ? true:false
        break
        case 'ideas 2':
        this.lights.ideas2 = (res == '1') ? true:false
        break
        case 'free work derecho':
        this.lights.freeWorkDerecho = (res == '1') ? true:false
        break
        case 'free work izquierdo':
        this.lights.freeWorkIzquierdo = (res == '1') ? true:false
        break
        case 'inno-bar':
        this.lights.innoBar = (res == '1') ? false:true
        break
        case 'letrero':
        this.lights.letrero = (res == '1') ? true:false
        break
        case 'meeting space':
        this.lights.meetingSpace = false
        break
      }
      console.timeEnd('estado')
      console.log(`${place}: ${(res == '1') ? 'Apagado':'Encendido' }`)
    })
    .catch((reason) => {
      console.timeEnd('estado')
      console.log('Error', reason)
    })
  }

}
