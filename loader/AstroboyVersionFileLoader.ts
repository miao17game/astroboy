import * as glob from 'fast-glob';
import * as path from 'path';
import { Loader } from '../core/Loader';
import { IInnerApplication, PureObject } from '../definitions/core';
import { IOptions } from '../definitions/config';
import { extractModule } from '../utils/exports';

export default class AstroboyVersionFileLoader extends Loader<Partial<IOptions>, IInnerApplication<Partial<IOptions>>> {
  load() {
    let versionMap: PureObject = {};

    this.dirs.forEach(item => {
      const entries = glob.sync([`${item.baseDir}${this.config.pattern}`], {
        dot: true,
      });
      entries.forEach(entry => {
        const key = path.basename(entry as string, '.json');
        versionMap[key] = extractModule(entry as string);
      });
    });

    this.app.versionMap = versionMap;
  }
}
