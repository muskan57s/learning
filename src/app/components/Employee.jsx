"use client"

export default function Employee(props)
{
    console.log(props)
    // const name = props.name;
    // const id = props.id;

    const {name,id} = props;
    const handleClick=()=>{
        console.log("You Have cliked me")
        alert("OOPs!! Clicked me...")
    }
    return(
        <div className='my-4 border border-gray-400 p-3'>
            This is employee page.
            <p>
                Employee ID is {id}, and Name is {name}  
                
            </p>

            <button onClick={handleClick}  className='px-5 py-1 bg-gray-600 text-gray-50'>Click Here</button>
       
        <p className='my-5'>
            <form>

        <label htmlFor="txtName">Enter Name</label>
         <input id="txtName" className='border outline-none border-green-400 p-1' type="text"/>
            </form>
        </p>
       
        </div>
    )
}