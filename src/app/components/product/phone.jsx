"use client"

function Phone(props) {
    console.log(props)
    const seeClick=()=>{
    console.log("welcome")
    alert("Welcome to my page")
    
  }

    // Destructuring :-
    // const company= props.company;
    // const rate =props.rate;

  const {company,rate} = props;


  return (
    <div class='border border-green-500 p-3 m-3 '>
        <p>the name of {company}, and rate is {rate}</p>
        <button onClick={seeClick} class='px-4 py-1 text-slate-100 bg-yellow-900'>click</button>
    </div>
  )
}

export default Phone