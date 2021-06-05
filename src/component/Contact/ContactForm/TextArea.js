const TextArea = ({label,defaultValue,onChange})=>{
    return <div className="form-floating">
    <textarea defaultValue={defaultValue} onChange={onChange} className="form-control" id="inputMessage" placeholder="Enter your message here..." style={{height: "12rem"}}></textarea>
    <label for="inputMessage">{label}</label>
</div>

}

export default TextArea;