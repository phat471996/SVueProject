export default function ({ isHMR, app, store, route, params, error, redirect }) {
  const defaultLocale = app.i18n.fallbackLocale
  // If middleware is called from hot module replacement, ignore it
  if (isHMR) return
  // Get locale from params
  const locale = params.lang || store.state.appLang.locale || defaultLocale
  if (!store.state.appLang.locales.includes(locale)) {
    return redirect(
      '/' + store.state.appLang.locale + route.fullPath
    )
    //return error({ message: 'This page could not be found.', statusCode: 404 })
  }


  // Set locale
  store.commit('setLang', locale)
  app.i18n.locale = store.state.appLang.locale
  // if(route.fullPath.split('/')[1] === ''){
  //   return redirect(route.fullPath + app.i18n.locale)
  // }


  if(locale !== defaultLocale && !store.state.appLang.locales.includes(route.fullPath.split('/')[1])) {
    return redirect(
      '/' + locale + route.fullPath
    )
  }

  // If route is /<defaultLocale>/... -> redirect to /...
  if (locale === defaultLocale && route.fullPath.indexOf('/' + defaultLocale) === 0 && route.fullPath.split('/') <= 3) {
    const toReplace = '^/' + defaultLocale + (route.fullPath.indexOf('/' + defaultLocale + '/') === 0 ? '/' : '')
    const re = new RegExp(toReplace)
    return redirect(
      route.fullPath.replace(re, '/')
    )
  }

}
