"use client"
import {useForm} from 'react-hook-form'

function mainPage() {

    const {register}=useForm()
  return (
    <div>
        <div className="max-w-s ">
            <div>
                <form>
                    <feildset>
                        <label>Enter Name:</label>
                        <input type="text" className='outline-border-none border border-gray-600'/>
                    </feildset>
                </form>
            </div>
        </div>
    </div>
  )
}

export default mainPage