const InputNumber = ({label,defaultValue,onChange})=>{
    return <div class="form-floating">
    <input class="form-control" defaultValue={defaultValue} onChange={onChange} id="inputPhone" type="number" placeholder="Enter your email..." />
    <label for="inputPhone">{label}</label>
    </div>
}

export default InputNumber;
