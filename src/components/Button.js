import './Button.scss'


function Button({value, setValue}){


  function handleDecrement(){
    if(setValue){
        setValue(value  - 1)
    }
  }

  function handleIncrement(){
    if(setValue){
        setValue(value  + 1)
    }
  }
    return(
        <>
          
        <button className="num-increment" onClick={handleDecrement}> Decrement </button>

        <button className="num-decrement" onClick={handleIncrement}> increment </button>
    
        </>
    )
}
export default Button;