import React from "react";

const Productlayout = ({children}: {
    children: React.ReactNode
}) => {

    return(<div>
        {children}
        Product layout
    </div>)
}
export default Productlayout;