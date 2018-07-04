import gql from 'graphql-tag'
import { getApi, getApiBasic } from '~/helpers/init-apollo'

export async function loadProductBySKU(sku = '', { lang = 'EN' } = {}) {
  const { data: { product } } = await getApi().query({
    query: gql`
      query getProducts($sku: String, $lang: LocaleType) {
        product(sku: $sku, lang: $lang) {
          totalCount
          data {
            ... on Product {
              tags {
                name
                label
                status
                score
              }
              name
              shortDescription
              dutyFree
              pickup
              images {
                filename
                version
              }
              stock {
                price
              }
            }
          }
        }
      }
    `,
    variables: {
      sku,
      lang
    }
  })
  return product
}

