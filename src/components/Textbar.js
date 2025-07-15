import React,{useState} from 'react'

export default function Textbar(props) {

  const [Text, setText] = useState("Enter the text here");
    const [charcount,setCharcount]= useState(null);
    const [preview, setPreview] = useState(null);
    const [wordcount, setWordcount] = useState(null)

    const word_count=()=>{
      let word1count=((Text.split(" ")).length);
      if (Text.endsWith(" ")){
        word1count=word1count-1;
      }
      
      if (Text== null){
        word1count=word1count-1;}
      setWordcount("Word count: " + word1count);
    }
    setTimeout(word_count,1.0*1.0)

  const Lowercase=()=>{
    let newtext=Text.toLowerCase();
    setText(newtext)
    props.showalert("Changed to lowercase","success")}

    const cleartext=()=>{
      setText("")
      props.showalert("Cleared text","success")
    }

    {const pre_view=()=>{
      let text=Text;
      setPreview(text);}
      setTimeout(pre_view,1.0*1.0)

    const char_count=()=>{
      let count=Text.length;
      setCharcount("Character count: " + count);}
      setTimeout(char_count,1.0*1.0)

    const abc=()=>{
        let newtext=Text.toUpperCase();
        setText(newtext)
        props.showalert("Changed to uppercase","success")
    }
    const cvb=(event)=>{
        setText(event.target.value)
    }
    

return (
<div className={`mb-3 height-100vh text-${props.mode==="light"?"dark":"light"} p-3 `}>
  <label htmlFor="exampleFormControlTextarea1" className= "form-label" ><h1>Enter the text below:</h1></label>
  <textarea className="form-control " id="exampleFormControlTextarea1" value={Text} onChange={cvb} rows="13"></textarea>
  <button type="button" className="btn btn-primary mx-3" onClick={abc}>Convert into uppercase</button>
  <button type="button" className="btn btn-primary mx-3" onClick={Lowercase}>Convert into lowercase</button>
  <button type="button" className="btn btn-primary mx-3 my-3" onClick={cleartext}>Clear text</button>
  <p className="my-2">{charcount}</p>
  <p className="my-2">{wordcount}</p>
  <h3>Preview: </h3>
  <p>{preview}</p>
</div>
  );
}
}