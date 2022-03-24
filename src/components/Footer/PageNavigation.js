import React, {useState} from "react";
import PageNavigationStyle from "../../styled/PageNavigation.style";
function PageNavigation(props) {
  const [style1, setStyle1] = useState('orange')
  const [style2, setStyle2] = useState('whitesmoke')
  const page1Handler = () => {
    setStyle1('orange')
    setStyle2('whitesmoke')
    props.pageHandler(1)
  }
  const page2Handler = () => {
    setStyle2('orange')
    setStyle1('whitesmoke')
    props.pageHandler(2)
  }
  
  return (
    <PageNavigationStyle>
      <div className="Button" onClick={page1Handler} style = {{backgroundColor : `${style1}`}}>1</div>
      <div className="Button" onClick={page2Handler} style = {{backgroundColor : `${style2}`}}>2</div>
    </PageNavigationStyle>
  );
}

export default PageNavigation;
