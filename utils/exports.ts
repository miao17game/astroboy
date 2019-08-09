import * as lodash from 'lodash';

/** 只支持用于TS编译的ES模块，不支持JS */
function isTsCompiledEsModule(exports: any) {
  return exports && lodash.isPlainObject(exports) && !!exports.__esModule;
}

function defaultExtractFn(exports: any) {
  if (isTsCompiledEsModule(exports) && exports.default) {
    return exports.default;
  }
  return exports;
}

export function extractModule(modulePath: string, extractFn = defaultExtractFn) {
  const exports = require(modulePath);
  return extractFn(exports);
}
