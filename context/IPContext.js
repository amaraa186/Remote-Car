import React, { useState, useEffect } from 'react'
const IPContext = React.createContext()

export const IPAddress = props => {
    const [ipaddress, setIpaddress] = useState()

    const getIpaddress = (ip) => {
        setIpaddress(ip)
    }

    return (
        <IPContext.Provider value={{ipaddress, getIpaddress}}>
            {props.children}
        </IPContext.Provider>
    )
}

export default IPContext;