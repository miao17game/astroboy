import { MiddlewareFactory } from '../../../../definitions';

/**
 * X-Frame-Options
 * DENY 表示该页面不允许在 frame 中展示，即便是在相同域名的页面中嵌套也不允许。
 * SAMEORIGIN 表示该页面可以在相同域名页面的 frame 中展示。
 * ALLOW-FROM uri 表示该页面可以在指定来源的 frame 中展示。
 * https://developer.mozilla.org/zh-CN/docs/Web/HTTP/X-Frame-Options
 */
const factory: MiddlewareFactory<string, any> = function(options = 'SAMEORIGIN', app) {
  return async function frameOptions(ctx, next) {
    ctx.set('X-Frame-Options', options);
    await next();
  };
};

export = factory;