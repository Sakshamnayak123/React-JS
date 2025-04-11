const Map=()=>{
    const student=["java","css","html","cpp","php"];
    const ans = student.map((key)=>{
      return(
        <>
       <option>{key}</option>-
  
        </>
      )
    });
  return(
    <>
    <h1>welcome to Cybrom</h1>
    <select >{ans}</select>
    </>
  )
}
export default Map;