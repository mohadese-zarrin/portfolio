import React from 'react'

function Profile() {
    return (
        <div className='main-section profile-section'>
            <div className='section bio'>
                <h1 className='text'>
                    hello! 
                    I'm <span className='highlight'>Mohadese Zarrin</span>.
                    <br/>
                    I'm front-end web developer.
                </h1>
                {/* <h1>I'm Mohadese Zarrin.</h1>
                <h1>I'm front-end web developer.</h1> */}
            </div>
            <div className='section profile-pic-container'>
                <div className='profile-pic'></div>
            </div>
        </div>
    )
}

export default Profile
