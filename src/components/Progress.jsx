import {useState,useEffect} from 'react'

function Progress() {
  const [progress, setProgress] = useState(0);

  useEffect(()=>{
    // Set up an interval to increment progress
    const interval = setInterval(() => {
        setProgress((prev) => {
          if (prev >= 100) {
            clearInterval(interval); // Stop the interval when progress reaches 100
            return 100; // Cap progress at 100
          }
          return prev + 1; // Increment progress by 1
        });
      }, 10); // Adjust the interval duration for desired animation speed (10ms here)
  
    // Cleanup the interval when the component unmounts
    return () => clearInterval(interval);
  },[])
     
     return (
      <>
      <div style={{backgroundColor:"#768799", height:"20px",width:"500px",marginTop:"200px"}}>
        <div style={{backgroundColor:"#adf16e",width:`${progress}%`, height:"20px"}}></div>
       </div>
      </>
       
     )
}

export default Progress