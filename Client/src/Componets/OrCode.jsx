/* eslint-disable no-unused-vars */
import React, { useState } from 'react'

const OrCode = () => {
    const [img, setImg] = useState('');
    const [loading, setLoading] = useState(false);
    const [qrCode, setQrCode] = useState("Abi")

    function generateOR() {
        setLoading(true)
        try {
            const url = `https://api.qrsserver.com/v1/create-qr-code/?size=150x150&data=${qrCode}`;
            setImg(url)

        } catch (error) {
            console.log("Error While Generating OR Code" + error)

        }
        finally{
            setLoading(false)
        }

    }
    return (
        <div className='app-container'>
            <h1>OR Code Generator</h1>
            {loading && <p>Please Wait...</p>}
            {img && <img src={img} className='QR-Code-Image' />}
            <div>
                <label htmlFor='dataInput' className='input-Label'>Data For QR Code</label>
                <input className='dataInput' type='text' placeholder='Enter Data For QR Code' />


                <label htmlFor='dataInput' className='input-Label'>image_size (eg:300)</label>
                <input className='sizeInput' type='text' placeholder='Enter image size' />

                <button className='Enter-btn' onClick={generateOR}>Generate QR Code</button>
                <button className='Download-btn'>Download QR Code</button>


            </div>

        </div>
    )
}

export default OrCode