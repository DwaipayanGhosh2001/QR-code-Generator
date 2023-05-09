import React, { useRef, useState } from "react";
import QRCode from "react-qr-code";
import { Button, Form, Input, InputGroup } from "reactstrap";
const Generate = () =>
{
    const itemRef = useRef(null);
    const [item, setItem] =useState("");

    const submit = () => {
setItem(itemRef.current.value);
    }
   
return(
    <>
    <div className="container">
<QRCode value={item} style={{padding: "20px"}} />
  </div>
  <div className="form">
    <Form>
    <Input  type="text" innerRef={itemRef}/>
    <Button color="danger" onClick={submit}>Generate</Button>
    </Form>
</div>
    </>
  
    
)
}
export default Generate;