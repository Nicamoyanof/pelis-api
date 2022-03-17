export async function getStaticProps({ params: {slug} }) {
    // ↓add 
    console.log(`Building slug: ${slug}`)
  }