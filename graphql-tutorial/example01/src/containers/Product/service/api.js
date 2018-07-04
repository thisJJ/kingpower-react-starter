import gql from 'graphql-tag'
import { getApi } from '~/config/init-apollo'
import productFragment from './product-fragment'
export async function loadProductBySKU(sku = '', lang = 'EN') {
  const { data: { product } } = await getApi().query({
    query: gql`
      query getProduct($sku: String, $lang: LocaleType) {
        product(sku: $sku lang: $lang) {
          ...product
        }
      }

      ${productFragment}
    `,
    variables: {
      sku,
      lang
    }
  })

  return product
}