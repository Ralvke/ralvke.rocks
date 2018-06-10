const picoRouter = (routes, notFound) => {
  const {pathname} = window.location
  const route = routes[pathname]

  if (route) {
    return route
  }

  return notFound
}

export default picoRouter
