export const heroComponentQuery = (id: string) => 
  `heroComponent(id: "${id}", idType: SLUG) {
    heading
    introText
    bodyContent
    subheading
    image {
      node {
        sourceUrl(size: LARGE)
        mediaDetails {
          file
          height
          width
        }
      }
    }
  }`

export const newsComponentQuery = (quantity: number) => 
  `posts(first: ${quantity}) {
    nodes {
      id
      title
      uri
      slug
      excerpt(format: RENDERED)
      featuredImage {
        node {
          sourceUrl(size: MEDIUM)
        }
      }
    }
  }`

export const postById = (id: string) => `{
    post(
      id: "${id}"
      idType: SLUG
    ) {
      content
      title
      date
    }
  }`

  export const threeColComponent = (id: string) => 
  `threeColumnComponent(id: "${id}", idType: SLUG) {
    subheading
    heading
    col1Heading
    col1Image {
      nodes {
        sourceUrl(size: LARGE)
      }
    }
    col1Content(format: RAW)
    col2Heading
    col2Image {
      nodes {
        sourceUrl(size: LARGE)
      }
    }
    col2Content(format: RAW)
    col3Heading
    col3Image {
      nodes {
        sourceUrl(size: LARGE)
      }
    }
    col3Content(format: RAW)
  }`
