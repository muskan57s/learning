"use client"

function FruitDetails(props) {
    console.log(props.item.name)
    // const itemName = props.item.name;
    // const rate = props.item.rate;

    // Destructuring
    const {name,rate} = props.item;

  return (
    <div>
        {/* Child Component  */}
        <p>
            Item Name is {name}, Rate is {rate}
        </p>
    </div>
  )
}

export default FruitDetails