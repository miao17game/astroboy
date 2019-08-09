import { Loader } from '../core/Loader';
import { IInnerApplication } from '../definitions/core';
import { IOptions } from '../definitions/config';
import { BaseClass } from '../core/base/BaseClass';
import { extractModule } from '../utils/exports';

const requestProto = require('koa/lib/request');
const responseProto = require('koa/lib/response');
const contextProto = require('koa/lib/context');
const applicationProto = require('koa/lib/application').prototype;
const completeAssign = require('complete-assign');

export default class AstroboyExtendLoader extends Loader<Partial<IOptions>, IInnerApplication<Partial<IOptions>>> {
  load() {
    // application extend
    this.globDirs(this.config.applicationPattern || [], entries => {
      entries.forEach(entry => {
        completeAssign(applicationProto, extractModule(entry as string));
      });
    });

    // context extend
    this.globDirs(this.config.contextPattern || [], entries => {
      entries.forEach(entry => {
        completeAssign(contextProto, extractModule(entry as string));
      });
    });

    // request extend
    this.globDirs(this.config.requestPattern || [], entries => {
      entries.forEach(entry => {
        completeAssign(requestProto, extractModule(entry as string));
      });
    });

    // response extend
    this.globDirs(this.config.responsePattern || [], entries => {
      entries.forEach(entry => {
        completeAssign(responseProto, extractModule(entry as string));
      });
    });

    // controller extend
    this.globDirs(this.config.controllerPattern || [], entries => {
      entries.forEach(entry => {
        completeAssign(BaseClass.prototype, extractModule(entry as string));
      });
    });
  }
}
