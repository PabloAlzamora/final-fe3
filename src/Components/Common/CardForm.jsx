const CardForm = ({user}) => {
    const capitalizedName = user.name.charAt(0).toUpperCase() + user.name.slice(1);
    return (
      <h3 className="message">
      ** Gracias {capitalizedName} , nos contactaremos a la brevedad vía email **
    </h3>
    )
  }
  
  export default CardForm