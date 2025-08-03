import Home from "./components/sections/Home"
import { useEffect,useState } from "react"



const Main = () => {

  const [isClient, setIsClient] = useState(false);
  useEffect(() => {
    if(typeof window !== 'undefined'){
    setIsClient(true);}
  }, []);
  return (
    <>{
    isClient?(<>
    <div className="overflow-hidden">
      <Home />
    </div>
    </>):
    (<></>)
    }
    </>
  )
}
export default Main