import { useEffect } from "react/cjs/react.development";
import { getStaticProps } from "../../components/getStaticProps"



function Index({props}) {
  useEffect(()=>{

    getStaticProps();
  },[])
  return (
    <div>index</div>
  )
}

Index.getStaticProps = (context)=> {
  return {
    props: {}, // will be passed to the page component as props
  }
}

export default Index