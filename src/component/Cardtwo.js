import React from "react" ;




const Cardtwo = (card) => {
    return (
        <div class="card">
        <img src={card.image} class="card-img-top" alt="..." />
        <div class="card-body">
          <h5 class="card-title">{card.title}</h5>
          <p class="card-text">{card.body}</p>
          <p class="card-text"><small class="text-muted">{card.footer}</small></p>
        </div>
      </div>
    
    )
}

export default Cardtwo ;