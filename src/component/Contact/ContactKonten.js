import * as React from 'react'
import TipeText from './ContactForm/TipeText.js'
import TipeNumb from './ContactForm/TipeNumb'
import TipeEmail from './ContactForm/TipeEmail'
import TextArea from './ContactForm/TextArea'


const ContactKonten = ({defaultValue,onChange})=>{
const [form,setForm] = React.useState({
    Name:'',
    Email:'',
    Phone:'',
    Message:''
})

const handleSubmit = (event)=>{
    event.preventDefault()
    
    if(!form.Name && !form.Email && !form.Phone && !form.Message){
        alert('Tolong disi Terlebih Dahulu!')
    } else {
        alert('Berhasil di isi')
    }
    
}

    return <div className="row justify-content-center">
                <div className="col-lg-8 col-xl-7">  
                    <form onSubmit={handleSubmit}>
                        <TipeText label='Name' defaultValue={form.Name} onChange={(e)=>setForm({...form, Name:e.target.value})}/>
                        <TipeNumb label='Phone Number' defaultValue={form.Phone} onChange={(e)=>setForm({...form, Phone:e.target.value})}/>
                        <TipeEmail label='Email Address' defaultValue={form.Email} onChange={(e)=>setForm({...form, Email:e.target.value})}/>
                        <TextArea label='Message' defaultValue={form.Message} onChange={(e)=>setForm({...form, Message:e.target.value})}/><br/>
                        <button className="btn btn-primary btn-xl" type="submit">Send</button>
                    </form>
                </div>
            </div>
}

export default ContactKonten;