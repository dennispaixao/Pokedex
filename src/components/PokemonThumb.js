import React from 'react'

const PokemonThumb = ({id, image, name, type, infos, _callback }) => {
    const style = type + " thumb-container";
    const abilitiesList=infos.abilities.map((i)=>i.ability.name+" ")

    return (
        <div className={style}>
            <div className="number"><small>#0{id}</small></div>
            <img src={image} alt={name} />
            <div className="detail-wrapper">
                <h3>{name}</h3>
                <small>Type: {type}</small>
            </div>
            <button onClick={()=>{alert(
                abilitiesList                
                ); console.log(infos) }} > Ver Habilidades </button>
        </div>
    )
}

export default PokemonThumb
