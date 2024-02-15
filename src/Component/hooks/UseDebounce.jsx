import { useEffect, useRef } from "react"

const UseDebounce = (fun, delay) =>{
    const timeOutIdRef = useRef(null);
    useEffect(()=>{
        return()=>{
            if(timeOutIdRef.current){
                clearTimeout(timeOutIdRef.current)
            }
        }
    },[])
    const debounceCallBack = (...args)=>{
        if(timeOutIdRef.current){
            clearTimeout(timeOutIdRef.current);
        }
        setTimeout(()=>{
            timeOutIdRef.current=fun(...args);
        }, delay);
    }
    return debounceCallBack
}
export default UseDebounce