import * as assert from 'assert';
import * as lodash from 'lodash';
import { Loader } from '../core/Loader';
import { IInnerApplication } from '../definitions/core';
import { IOptions } from '../definitions/config';
import { extractModule } from '../utils/exports';

class AstroboyBootLoader extends Loader<Partial<IOptions>, IInnerApplication<Partial<IOptions>>> {
  load() {
    this.globDirs(this.config.pattern || [], entries => {
      entries.forEach(entry => {
        const boot = extractModule(entry as string);
        assert(lodash.isFunction(boot), `${entry} must return a function.`);
        boot(this.app);
      });
    });
  }
}

export = AstroboyBootLoader;
