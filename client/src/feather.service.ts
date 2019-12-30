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
        timeout: 50000
      }))
      .configure(feathers.authentication({
        storage: window.localStorage
      }));
  }

  public service(name: string): Promise<any> {
    return this._feathers.service(name);
  }

  public authenticate(credentials?): Promise<any> {
    return this._feathers.authenticate(credentials);
  }

  public logout(): Promise<any> {
    return this._feathers.logout();
  }

  public reAuthenticate(): Promise<any> {
    return this._feathers.reAuthenticate();
  }

  public create(serviceName, query): Promise<any> {
    return this._feathers.service(serviceName).create(query);
  }

  public find(serviceName, query): Promise<any> {
    return this._feathers.service(serviceName).find(query);
  }
}
