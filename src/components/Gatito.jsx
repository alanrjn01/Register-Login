import React from 'react';

function Gatito(props) {
    const {imagen,titulo,desc} = props
    console.log(imagen)
    console.log(titulo)
    console.log(desc)
  return (
        <div style={{display:'inline-block'}}>
            <div style={{display: 'inline-block', marginRight: '20px',marginLeft: '10px',marginTop: '10px', border: '1px solid black'}}>
            <div>
                <img src={imagen} alt="" />
            </div>
            <h3>{titulo}</h3>
            <p>{desc}</p>
        </div>
        </div>
  )
}

export default Gatito;