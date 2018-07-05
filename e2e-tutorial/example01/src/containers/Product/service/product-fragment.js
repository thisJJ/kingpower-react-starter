import gql from 'graphql-tag'

export default gql`
  fragment product on Product {
    ... on Product {
      tags {
        name
        label
        status
        score
      }
      sku
      video
      images {
        filename
        version
        baseUri
        prefix
      }
      relateSkus
      supplierCode
      sapCategory
      name
      shortDescription
      longDescription
      dutyFree
      pickup
      hotItem
      searchable
      exclusiveKP
      bestSeller
      prettyUrl
      brand {
        name
      }
      stock {
        price
        quantity
        previousPrice
      }
      lag
      ageRestriction
      attributeValues {
        name
        label
        value {
          name
          label
        }
      }
      variation {
        name
        label
      }
      child {
        sku
        supplierCode
        sapCategory
        name
        images {
          baseUri
          version
          filename
        }
        video
        shortDescription
        longDescription
        dutyFree
        pickup
        hotItem
        searchable
        exclusiveKP
        bestSeller
        lag
        soldOut
        ageRestriction
        stock {
          price
          quantity
          previousPrice
        }
        dealDuration{
          remark
          haveDeal
        }
        variationValue {
          name
          label
          value {
            name
            label
            image {
              filename
              version
              prefix
              baseUri
            }
          }
        }
        attributeValues {
          name
          label
          value {
            name
            label
          }
        }
      }
      variation {
        name
        display
        label
        values
      }
      categories {
        name
        label
      }
      relateProducts {
        sku
        name
        dutyFree
        pickup
        stock {
          price
          quantity
          previousPrice
        }
        images {
          filename
          version
          baseUri
        }
        dealDuration{
          remark
          haveDeal
        }
      }
      dealDuration{
        remark
        haveDeal
      }
    }
  }
`
