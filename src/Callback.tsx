import React, {useState} from 'react'



// // A.
// function ParentComponent(){
//     const[childData,SetChildData]=useState('')
//     const handleChildData=(data)=>{
//         SetChildData(data);
//     };
// return(
//     <div>
// <ChildComponent sendDataToParent={handleChildData}/>
// </div>
// );
// }


// // B.

// <ChildComponent sendDataToParent={handleChildData}/>







// // C.
// function ReturnName(name:string,{sendDataToParent}){
//     const sendData =()=>{
//         const data = name;
//         sendDataToParent(data);
//     };
// }

// export {ParentComponent, ReturnName}

function Parent(){
    const [count,setCount] = useState();
    return(
        <div>
        <p> COUNT {count}</p>
        </div>
    );
}


function Child({setCount}){
return(
<div className="child">
<button onClick={() => setCount(1)}> 1 </button>
</div>
);
}


sendDeckId = (data)=>{
    setActualDeckUrl(data);
}