import Employee from "@/app/components/Employee";
import FruitDetails from "@/app/components/fruitDetails";
import Mobile from "@/app/components/product/mobile";
import Phone from "@/app/components/product/phone";
import Bag from "@/app/components/products/bag"

function products(){
    var fruitItem={
        name:"Grapes",
        rate:140
    }
    const AppleItem = {name:"Apple Kasmiri",rate:390}
    var num=900;
    return(
        <div className='max-w-4xl mx-auto mt-5' >
            {/* Parent Component  */}
            <div className='border border-green-500 p-5 mb-4 bg-slate-500 text-lg font-mono'>
                This is my product page.
            </div>
            <Bag fruit="Apple.." rate={120}/>
            {/* <Bag fruit="Banana" rate={80}/>
            <Bag fruit="Orange" rate={210}/>
            <Bag fruit="Grapes" rate={450}/> */}

            <FruitDetails item={fruitItem}/>
            <FruitDetails item={{name:"Apple",rate:145}} />
            <FruitDetails item={AppleItem} />
           
            <Employee  id={2222} name="Lalit Ranjan" />
            <Employee  id={9012} name="P.K.Sena" />
            <Employee  id={7666} name="R.Malhotra" />
            <Phone company='Redmi' rate={3020} />
            <Phone company='oneplus' rate={5020} />
            <Phone company='Apple' rate={90000} />
        

        
        </div>
    )
}

export default products;


