const doctors= JSON.parse(localStorage.getItem('doctors'))

const buscadorContainer=document.querySelector(".user-cards")

const searchinput=document.querySelector("[data-search]")

let medicos=[]

medicos=doctors.map(medico=>{
  const cardBuscador=document.createElement("div")
    cardBuscador.classList.add("card-buscador","text-center","hide-buscador")
    cardBuscador.setAttribute("href",`detail-doctor.html#${medico.id}`)
        cardBuscador.innerHTML=`
        <a class="text-decoration-none text-dark fw-bold" href="detail-doctor.html#${medico.id}"> <img class="img-buscador" src="${medico.imagen}">${medico.name}</a>
        `
        buscadorContainer.appendChild(cardBuscador)
        return{name:medico.name,
            id:medico.id,
            imagen:medico.imagen,
            element:cardBuscador,
        }
    })
console.log(medicos);
searchinput.addEventListener('input', e=>{
    const value=e.target.value.trim().toLowerCase()
    console.log(value);
   if(value===""){
    medicos.forEach(medico=>{
            medico.element.classList.toggle("hide-buscador",true)
        
    })
    }
    medicos.forEach(medico=>{
        const visible=medico.name.trim().toLowerCase().includes(value)
        if(visible&&value.length>0){
            medico.element.classList.toggle("hide-buscador",false)
        }else{
            medico.element.classList.toggle("hide-buscador",true)
        }
    })

})