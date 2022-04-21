import React from 'react'

function Alert(props) {
    // const capatalize =(word)=>{
    //     const lower = word.toLowerCase();
    //     return lower.charAt(0).toUpperCase() + lower.slice(1);
    // }
    return (
        <>
         <div className="alert alert-warning alert-dismissible fade show" role="alert">
                  <h4>{props.alert}</h4>
                <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
            </div>


        </>
    )

}

export default Alert