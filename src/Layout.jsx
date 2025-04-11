import { Link,Outlet } from "react-router-dom";

const Layout=()=>{
  return(
    <>
    <Link to="Home">Home</Link>
    <Link to="About">About us</Link>
    <Link to="Contact">Contact us</Link>
    <hr size="4" color="red"/>


    <Outlet/>

    <hr size="4" color="red"/>
    www.mycompany.com
    </>
  )
}
export default Layout;