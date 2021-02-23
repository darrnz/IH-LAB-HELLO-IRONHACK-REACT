import React from 'react' 

function Features(props) {
    return (
        <div class='componentes'>
            <img src= {props.src} alt = "feature" />
            <p class="encabezado">{props.text}</p>
            <p class="explicacion">{props.explicacion}</p>
        </div>
    )
}

export default Features