const InputText = ({label,defaultValue,onChange})=>{
    return <div class="form-floating">
    <input class="form-control" defaultValue={defaultValue} onChange={onChange} id="inputName" type="text" placeholder="Enter your name..." />
    <label for="inputName">{label}</label>
</div>

}

export default InputText;