import { Injectable } from '@angular/core';
import * as io from 'socket.io-client';
const feathers = require('@feathersjs/client');
import { environment } from 'environments/environment';

@Injectable()
export class Feathers {
  private _feathers = feathers();                     
  private _socket = io(environment.API);      

  constructor() {
    this._feathers
      .configure(feathers.socketio(this._socket, {
        timeout: 15000
      }))  
      .configure(feathers.authentication({                   
        storage: window.localStorage
      }))
  }

  public service(name: string) {
    return this._feathers.service(name);
  }

  public authenticate(credentials?): Promise<any> {
    return this._feathers.authenticate(credentials);
  }

  public logout() {
    return this._feathers.logout();
  }
}