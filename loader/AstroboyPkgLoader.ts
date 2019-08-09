import * as path from 'path';
import * as fs from 'fs';
import { Loader } from '../core/Loader';
import { IInnerApplication } from '../definitions/core';
import { IOptions } from '../definitions/config';
import { extractModule } from '../utils/exports';

export default class AstroboyPkgLoader extends Loader<Partial<IOptions>, IInnerApplication<Partial<IOptions>>> {
  load() {
    const pkgPath = path.resolve(__dirname, '../package.json');

    if (fs.existsSync(pkgPath)) {
      this.app.pkg = extractModule(pkgPath);
    }
  }
}
