import * as glob from 'fast-glob';
import { Loader } from '../core/Loader';
import { IInnerApplication, PureObject } from '../definitions/core';
import { IOptions } from '../definitions/config';
import { extractModule } from '../utils/exports';

export default class AstroboyControllerLoader extends Loader<Partial<IOptions>, IInnerApplication<Partial<IOptions>>> {
  load() {
    const app = this.app;
    let controllers: PureObject = {};
    const entries = glob.sync([`${app.ROOT_PATH}${this.config.pattern}`], {
      dot: true,
    });
    (<string[]>entries)
      .filter(i => !i.includes('.d.ts'))
      .forEach(entry => {
        const key = this.resolveExtensions(entry.split('controllers/')[1], true);
        controllers[key] = extractModule(entry);
      });
    app.controllers = controllers;
  }
}
