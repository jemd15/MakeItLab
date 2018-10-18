import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the ProvidersApiServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ProvidersApiServiceProvider {

  constructor(public api: HttpClient) { }

  turnOnLight(place:string){
    let data = {
      ip: null,
      port: 81,
      id: null
    }
    switch(place){
      case 'cowork':
        data.ip = '192.168.0.80'
        data.id = 4
      break
      case 'workshop cental':
        data.ip = '192.168.0.51'
        data.id = 1
      break
      case 'workshop lateral':
        data.ip = '192.168.0.58'
        data.id = 8
      break
      case 'impresoras 3d':
        data.ip = '192.168.0.61'
        data.id = 10
      break
      case 'ideas 1':
        data.ip = '192.168.0.57'
        data.id = 7
      break
      case 'ideas 2':
        data.ip = '192.168.0.56'
        data.id = 6
      break
      case 'free work derecho':
        data.ip = '192.168.0.55'
        data.id = 5
      break
      case 'free work izquierdo':
        data.ip = '192.168.0.52'
        data.id = 2
      break
      case 'inno-bar':
        data.ip = '192.168.0.59'
        data.id = 9
      break
      case 'letrero':
        data.ip = '192.168.0.62'
        data.id = 12
      break
      case 'meeting space':
        data.ip = ''
        data.id = ''
      break
    }
    console.log(`http://${data.ip}:${data.port}/onled/${data.id}`)
    return this.api.get(`http://${data.ip}:${data.port}/onled/${data.id}`).toPromise()
  }

  turnOffLight(place:string){
    let data = {
      ip: null,
      port: 81,
      id: null
    }
    switch(place){
      case 'cowork':
        data.ip = '192.168.0.80'
        data.id = 4
      break
      case 'workshop cental':
        data.ip = '192.168.0.51'
        data.id = 1
      break
      case 'workshop lateral':
        data.ip = '192.168.0.58'
        data.id = 8
      break
      case 'impresoras 3d':
        data.ip = '192.168.0.61'
        data.id = 10
      break
      case 'ideas 1':
        data.ip = '192.168.0.57'
        data.id = 7
      break
      case 'ideas 2':
        data.ip = '192.168.0.56'
        data.id = 6
      break
      case 'free work derecho':
        data.ip = '192.168.0.55'
        data.id = 5
      break
      case 'free work izquierdo':
        data.ip = '192.168.0.52'
        data.id = 2
      break
      case 'inno-bar':
        data.ip = '192.168.0.59'
        data.id = 9
      break
      case 'letrero':
        data.ip = '192.168.0.62'
        data.id = 12
      break
      case 'meeting space':
        data.ip = ''
        data.id = ''
      break
    }
    console.log(`http://${data.ip}:${data.port}/offled/${data.id}`)
    return this.api.get(`http://${data.ip}:${data.port}/offled/${data.id}`).toPromise()
  }

  statusLight(place:string){
    let data = {
      ip: null,
      port: 81,
      id: null
    }
    switch(place){
      case 'cowork':
        data.ip = '192.168.0.80'
        data.id = 4
      break
      case 'workshop cental':
        data.ip = '192.168.0.51'
        data.id = 1
      break
      case 'workshop lateral':
        data.ip = '192.168.0.58'
        data.id = 8
      break
      case 'impresoras 3d':
        data.ip = '192.168.0.61'
        data.id = 10
      break
      case 'ideas 1':
        data.ip = '192.168.0.57'
        data.id = 7
      break
      case 'ideas 2':
        data.ip = '192.168.0.56'
        data.id = 6
      break
      case 'free work derecho':
        data.ip = '192.168.0.55'
        data.id = 5
      break
      case 'free work izquierdo':
        data.ip = '192.168.0.52'
        data.id = 2
      break
      case 'inno-bar':
        data.ip = '192.168.0.59'
        data.id = 9
      break
      case 'letrero':
        data.ip = '192.168.0.62'
        data.id = 12
      break
      case 'meeting space':
        data.ip = ''
        data.id = ''
      break
    }
    console.log(`http://${data.ip}:${data.port}/estado/${data.id}`)
    return this.api.get(`http://${data.ip}:${data.port}/estado/${data.id}`).toPromise()
  }

}
