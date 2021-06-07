const counters = document.querySelectorAll('.counter')

const speed = 100

counters.forEach(counter=>{
    const updateCount=()=>{
        const target= +counter.getAttribute('data-target')

        const count = +counter.innerText

        const ctr= parseInt(target/speed)

        if(count < target){
            counter.innerText=count+ctr
            setTimeout(updateCount,0.5)
        }else{
            count.innerText=target
        }
    }

    updateCount()
})