// import Map from "./31march";



// import Cybrom from "./Cybrom";

// const college={
//   name:"SIRT College",
//   fees:50000,
//   city:"Bombay",
//   subject:"java"
// };
// const App=()=>{
//   ruturn(
//     <>
//     <h1 align="center">Welcome to my website</h1>

//     <Cybrom                                           
//     name={college.name}
//     fees={college.fees}
//     city={college.city}
//     subject={college.subject}/>
//     </>
    
   
    
//   );
// };

// export default App;





// const student=[
//   {
//     "roll no.":143,
//     "name":"saksham",
//     "city":"bhopal",
//     "fees":3400
//   },

//   {
//     "roll no.":143,
//     "name":"saksham",
//     "city":"bhopal",
//     "fees":3400
//   },


//   {
//     "roll no.":143,
//     "name":"saksham",
//     "city":"bhopal",
//     "fees":3400
//   },


//   {
//     "roll":143,
//     "name":"saksham",
//     "city":"bhopal",
//     "fees":3400
//   },
// ];
// const Map=()=>{
// const ans = student.map((key)=>{
//   return(
//     <>
//     <tr>
//     <td>{key.roll}</td>
//     <td>{key.name}</td>
//     <td>{key.city}</td>
//     <td>{key.fees}</td>
      
//     </tr>
//     </>
//   )
// });
// return(
//  <>
//  <table border="1" width="400">
// <tr>
//   <td>rollno</td>
//   <td>name</td>
//   <td>city</td>
//   <td>city</td>

// </tr>
//  </table>
//  </>
// )
// }
// export default Map;



// const App=()=>{
//     return(
//         <>
//         <h1>hell</h1>
//         <Map/>
//         </>
//     )
// }
// export default App;



// const App=()=>{
//     return(
//         <>
//         <h1>hell</h1>
        
//         </>
//     )
// }
// export default App;







// import { BrowserRouter,Route,Routes} from "react-router-dom";
// import Layout from "./layout";
// import Home from "./Home";
// import About from "./About";
// import Contract from "./Contract";


// const App=()=>{
//     return(
//         <>
// <BrowserRouter>
// <Routes>
// <Route path="/" element={<Layout/>}>
// <Route path="Home" element={<Home/>}/>
// <Route path="Contract" element={<Contract/>}/>
// <Route path="About" element={<About/>}/>



// </Route>
// </Routes>
// </BrowserRouter>
//         </>
//     )
// }
// export default App;




// const App=()=>{
//     const student=["java","css","html","cpp","php"];
//     const ans = student.map((key)=>{
//       return(
//         <>
//        <option>{key}</option>
  
//         </>
//       )
//     });
//   return(
//     <>
//     <h1>welcome to Cybrom</h1>
//     <select >{ans}</select>
//     </>
//   )
// }
// export default App;







// const App=()=>{
//     return(
//         <div style={{border:"2px solid blue",width:"300px",
//             borderRadius:"30px",margin:"auto",backgroundColor:"yellow", padding:"center"}}> 




//               <div style={{border:"2px solid green",width:"230px",
//             borderRadius:"20px",margin:"30px",backgroundColor:"green",
//             padding:"center", }}>
                
//                 <div style={{border:"2px solid red",width:"160px",
//                 borderRadius:"10px",margin:"30px",backgroundColor:"red",padding:"center",
//                 color:"black",fontSize:"20px",lineHeight:"3",textAlign:"center"}}> 
                    
//                     This is about portion
                
//                  </div>
//                 </div>  
//              </div>
//     ) 
// }
// export default App;







// const App=()=>{
//     return(
//         <div style={{border:"2px solid blue",width:"300px",borderRadius:"30px",
//             margin:"auto",backgroundColor:"yellow", padding:"200px",textAlign:"center",color:"black",fontSize:"20px",lineHeight:"3"}}> 
//             This is about portion
//             </div>

// )
//  }
//  export default App;









// // inline css ko object form me likhna ka way
// const inlinecssOBJ={
// color:"blue",
// fontSize:"20px",
// backgroundColor:"lightgray",
// padding:"10px",
// borderRadius:"5px",
// };
// const App=()=>{
//     return(
//         <>
//         <h1 style={inlinecssOBJ}>HELLO SAKSHAM WELCOME WITH INLINE </h1>      
//             </>    
//     )
// }
// export default App; 














// // external css ko add karna

//  const App=()=>{
//         return(
//             <>
//             <h1 className="okk">hell</h1>
//             <h1 id="id">hell</h1>
            
//             </>
//         )
//     }
//     export default App;
    

// import img1 from "./image/g.jpg"

// const App=()=>{
//     return(
//         <>
//         <h1>This is image</h1>
//         <img src={img1} width="300" height="300"/>
        
//         </>
//     )
// }
// export default App;



//use effect run when run when application randor something



// import {useState, useEffect} from "react";
// const App=()=>{
//     const [count,setCount]=useState(0);

//     useEffect(()=>{
//         setTimeout(()=>{
//             setCount(count+1)

//         },1000);
//     });
//     return(
//         <>
//         <h1>This is image {count}</h1>
        
//         </>
//     )
// }
// export default App;


// import {useState, useEffect} from "react";
// const App=()=>{
//     const [count,setCount]=useState(0);

//     useEffect(()=>{
//         setTimeout(()=>{
//             setCount(count+1)

//         },1000);
//     });
//     return(
//         <>
//         <h1>This is image {count}</h1>
        
//         </>
//     )
// }
// export default App;





// import {useState, useEffect} from "react";
// const App=()=>{
//     const [count,setCount]=useState(0);
//     const [multi,setMulti]=useState(0);

//     useEffect(()=>{
//         setMulti(count*2) 
//         },[count])
  
//     return(
//         <>
//         <h1>This is image :{count}</h1>
//         <h2>This is multi :{multi}</h2>
//         <button onClick={()=>{setCount (count+1)}}>clickhere</button>
//         </>
//     )
// }
// export default App;




// MULTIPLE INPUT HANDLE      //` SPEAD OPERATOR STUDY IN JS

import {useState} from "react";
import axios from "axios";
const App=()=>{
    const [input,setInput]=useState({}); // input {}
    //input{rolln0:121,name:"saksham",city:"bhopal",fees:45600}
    const handleInput=(e)=>{

        let name=e.target.name;
        let value=e.target.value;
        setInput(value=>({...value,[name]:value}));
        console.log(input);
    }
   const handleSubmit=async()=>{
    let api=" ";
    const response=await axios.post(api,input);
    console.log(response);
    alert("Data succesfully save!!!")
   }
  
    return(
        <>
        <h1>Application form</h1>
        Enter rollno: <input type="text" name="rollno" onChange={handleInput}/> <br/>

        Enter name: <input type="text" name="name" onChange={handleInput}/> <br/>

        Enter city: <input type="text" name="city" onChange={handleInput}/> <br/>

        Enter fees: <input type="text" name="fees" onChange={handleInput}/> <br/>

        <button onClick={handleSubmit}>save</button>
    
    </> 
    )
}
export default App;




NamedNodeMap+




data save    by           Promise
ata save    by           await