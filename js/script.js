{
    const Welcome = () =>{
        console.log("Witam na moim mini blogu o polskich górach")
    }
    
    const toggleBackground = () => {
        const body = document.querySelector(".body");
        const body1 = document.querySelector(".body1");

        body.classList.toggle("body1");
        if (spaner.innerText === "Old school") {
            spaner.innerText = "New school"
        } else {
            spaner.innerText = "Old school"
        }
    }


    const init =()=>{
        const button = document.querySelector(".button");
        
        
        let spaner = document.querySelector(".spaner");
        
        button.addEventListener("click", toggleBackground);
        Welcome();
    }
    init();
  
    
    
}