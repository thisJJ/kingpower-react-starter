import { setContext } from 'apollo-link-context'
import { ApolloClient } from 'apollo-client'
import { createHttpLink } from 'apollo-link-http'
import fetch from 'isomorphic-fetch'
import { InMemoryCache } from 'apollo-cache-inmemory'
import { from } from 'apollo-link'
import Cookie from 'js-cookie'

import { clientSecret as secret } from '~/config/environments'
import { ACCESS_TOKEN_KEY } from '~/config/global-variables'
import config from '~/config/environments'

export class ApolloBuilder {

  constructor() {
    this._middlewares = []
  }

  withAccessToken(token) {
    this._middlewares = this._middlewares.concat(
      new ApolloMiddlewareBuilder()
        .withHeader('authorization', `Bearer ${ token }`)
        .withHeader('Platform', config.platform)
        .build()
    )
    return this
  }

  withClientSecret(token) {
    this._middlewares = this._middlewares.concat(
      new ApolloMiddlewareBuilder()
        .withHeader('authorization', `Basic ${ token }`)
        .withHeader('Platform', config.platform)
        .build()
    )
    return this
  }

  build(uri) {
    const httpLink = createHttpLink({
      uri,
      fetch,
      credentials: 'same-origin',
    })
    return new ApolloClient({
      link: from([ ...this._middlewares, httpLink ]),
      cache: new InMemoryCache(),
    })
  }
}

export class ApolloMiddlewareBuilder {

  constructor() {
    this._headers = {}
  }

  withHeader(header, value) {
    this._headers[header] = value
    return this
  }

  build() {
    return setContext(() => ({
      headers: {
        ...this._headers,
      },
    }))
  }
}

export const getApi = (accessToken = Cookie.get(ACCESS_TOKEN_KEY)) => (
  new ApolloBuilder()
    .withAccessToken(accessToken)
    .build(config.apiEndpoint)
)
export const getApiBasic = (clientSecret = secret) => (
  new ApolloBuilder()
    .withClientSecret(clientSecret)
    .build(config.apiEndpoint)
)
