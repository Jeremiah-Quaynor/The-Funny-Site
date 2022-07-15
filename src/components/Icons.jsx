import React from 'react'
import { TiArrowShuffle, TiBatteryCharge, TiCalendar, TiDocumentAdd, TiHome, TiZoomInOutline } from 'react-icons/ti'

function Icons () {

    const Footer = () => {
        <footer>
            <h3>30 days of React</h3>
            <div>
                <small>Copyright &copy; {new Date().getFullYear()}</small>
            </div>
        </footer>
    }




    return (
        <>
            <h1>Welcome To The World Of Icons</h1>
            <TiHome />
            <TiBatteryCharge />
            <TiArrowShuffle />
            <TiCalendar />
            <TiZoomInOutline />
            <TiBatteryCharge />

            <TiDocumentAdd/>
            <Footer />
        </>
    )
}

export default Icons