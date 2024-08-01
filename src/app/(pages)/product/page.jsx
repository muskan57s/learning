
import Form from "@/app/components/product/form";
import Mobile from "@/app/components/product/mobile";
import Phone from "@/app/components/product/phone";

function productPage()
{
    return(
        <div>
           product page.
            <Form/>
            <Phone company='ambassdor' rate={40000}/>
            <Mobile brand='iphone' price={80000}/>
        </div>
    )
}

export default productPage;