import React from 'react'

function Alert(){
    return(
        <div className="alert alert-warning alert-dismissible fade show" role="alert">
            <strong>Alert</strong> 
            <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
        </div>
    )
}

export default Alert