const InputEmail = ({label,defaultValue,onChange})=>{
    return <div class="form-floating">
    <input class="form-control" defaultValue={defaultValue} onChange={onChange} id="inputEmail" type="email" placeholder="Enter your email..." />
    <label for="inputEmail">{label}</label>
    </div>
}

export default InputEmail;