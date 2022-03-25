
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import UserListContainer from "./container/UserListContainer";
import { getUser } from "./store/user-slice";
import AppStyle from "./styled/App.style.js";
function App() {
  const dispatch = useDispatch()
  const {currentPage} = useSelector(state => state.user)
  useEffect(() => {
   dispatch(getUser(currentPage)) 
  },[])
  
  return (
    <AppStyle>
      <UserListContainer />
    </AppStyle>
  );
}

export default App;
