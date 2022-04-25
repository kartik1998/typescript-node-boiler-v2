require('dotenv').config();
import { Defaults } from '@lib/types';
import defaults from './defaults';

export class Config {
  private _data: any = {};
  constructor(conf: Defaults) {
    this._setConfig(conf);
  }

  private _setConfig(conf: Defaults) {
    const defaults = conf.defaults;
    this._data = JSON.parse(JSON.stringify(defaults));
    const env = process.env.NODE_ENV;
    if (env && conf[env]) {
      // override conf keys for specific env, example development, staging etc.
      Object.keys(conf[env]).forEach((key) => this.set(key, conf[env][key]));
    }
    // override all keys with process environment
    Object.keys(process.env).forEach((key) => this.set(key, process.env[key]));
  }

  public get() {
    return this._data;
  }

  public set(key: string, value: any) {
    this._data[key] = value;
  }
}

export default new Config(defaults);