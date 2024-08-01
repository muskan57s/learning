
function Mobile(props)
{

    const {price,brand}=props
    return(
        <div>
            Mobile Product Details
          
            <p className='border p-5 rounded-full m-5 border-red-400'>
                This is the details of my mobile product.
            </p>
            <p>The brand is {brand} & price is {price}</p>
        </div>
    )
}

export default Mobile;