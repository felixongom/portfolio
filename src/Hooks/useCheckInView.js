import { useEffect, useState} from 'react'

function useInView(ref) {
    const [isIntersecting, setIsIntersecting] = useState(false)
    
    useEffect(()=>{
      let currentRef = ref.current
      const observer = new IntersectionObserver(([entery])=>setIsIntersecting(entery.isIntersecting));
        observer.observe(currentRef);
        return ()=>{observer.disconnect(currentRef)};
    }, [ref])
   
  return isIntersecting
}

export default useInView