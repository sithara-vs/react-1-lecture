// import React from 'react'
// function FunctionalComponent() {
//     return (
//     <div>
//         <h1>This is a header</h1>
        
//     </div>
//     )
// }
// export default FunctionalComponent; 




import React from 'react'

function FunctionalComponent(props) {
    console.log(props)
    return (
        <div>
            <h1>This is a child component</h1>
            <p>This is my prop {props.someProp}</p>
        </div>
    )
}

export default FunctionalComponent 