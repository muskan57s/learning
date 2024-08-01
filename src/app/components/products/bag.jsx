

function Bag(props) {
  // props is an object that receives the value that is been given in the page.jsx
  // console.log(props.fruit)

  // Props are read only. it can not be modified
  // props.fruit = "jjksdksjfhsdk";
  return (
    <div className='border border-yellow my-5 p-5'>This is my bag with : {props.fruit}, Rate is {props.rate}</div>
  ) 
}

export default Bag