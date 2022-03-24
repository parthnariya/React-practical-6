// import UserCard from "./components/userlist/UserCard";
import UserDetailCard from "./components/UserDetailCard/UserDetailCard";
import UserList from "./components/Userlist/UserList";
import Container from "./container/Container";
import AppStyle from "./styled/App.style.js";
import { useSelector } from "react-redux";
function App() {
  const user = useSelector((state) => state.card.user);
  return (
    <AppStyle>
      <Container>
        {user && (
          <UserDetailCard
            email={user.email}
            name={user.name}
            avatar={user.avatar}
          />
        )}
        <UserList />
      </Container>
    </AppStyle>
  );
}

export default App;
