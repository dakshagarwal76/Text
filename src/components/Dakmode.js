import React,{useState} from 'react'

export default function DarkMode() {

const [Style, setStyle] = useState({
        mode:"Light",
        color:"Black",
        backgroundColor:"White",
        btntext:"Change into dark mode"
    });

const togglestyle=()=>{
    if (Style.mode==="Light"){
        setStyle({
        mode: "Dark",
        color: "White",
        backgroundColor: "Black",
        btntext: "Change into light mode"
    });}
    
    else{
        setStyle({
            mode: "Light",
            color: "Black",
            backgroundColor: "White",
            btntext: "Change into dark mode"
            });
    }};

return (
    <div style={Style}>
                <div className="accordion" id="accordionExample">
        <div className="accordion-item" >
            <h2 className="accordion-header">
            <button className="accordion-button" style={Style} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                Accordion Item #1
            </button>
            </h2>
            <div id="collapseOne" style={Style} className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
            <div style={Style} className="accordion-body">
                <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classNamees that we use to style each element. These classNamees control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
            </div>
            </div>
        </div>
        <div className="accordion-item">
            <h2 className="accordion-header">
            <button style={Style} className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                Accordion Item #2
            </button>
            </h2>
            <div id="collapseTwo" style={Style} className="accordion-collapse collapse" data-bs-parent="#accordionExample">
            <div className="accordion-body">
                <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classNamees that we use to style each element. These classNamees control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
            </div>
            </div>
        </div>
        <div className="accordion-item">
            <h2 className="accordion-header">
            <button className="accordion-button collapsed" style={Style} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                Accordion Item #3
            </button>
            </h2>
            <div id="collapseThree" style={Style} className="accordion-collapse collapse" data-bs-parent="#accordionExample">
            <div className="accordion-body">
                <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classNamees that we use to style each element. These classNamees control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
            </div>
            </div>
        </div>
        </div>
        <button type="button" className="btn btn-primary" onClick={togglestyle}>{Style.btntext}</button>
        <p>Mode: {Style.mode}</p>
    </div>
  );
}