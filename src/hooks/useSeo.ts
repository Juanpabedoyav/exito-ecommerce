import { useEffect } from "react"

type SeoProps ={
  title: string 
  description: string 

}

const useSeo = ({title, description}:SeoProps)=>{

  useEffect(() => {
    document.title = title
    document
      .querySelector("meta[name=\"description\"]")
      ?.setAttribute("content", description)
  }, [title, description])


  
}

export default useSeo