import React from 'react';
import './categories.css';

export default function EditProfile() {
    return (
        
            <div className="afterEdit center">
                <div className="flex-column">
                    <i id="pic" className="fas fa-user-circle"></i>
                    <i id="cam" className="mb-3 center fas fa-camera"></i>
                </div>

                <div className="info mt-3 mx-5">
                    <div className="secondary mb-2">
                    <div className="row g-2 align-items-center">
                        <div className="col-auto">
                            <label htmlFor="text" className="ml-4 col-form-label">Name</label>
                        </div>
                        <div className="col-auto">
                            <input type="text" className="form-control"/>
                        </div>
                    </div>
                    </div>
                    <div id="age" className="mb-2">
                    <div className="row g-2 align-items-center">
                        <div className="col-auto">
                            <label htmlFor="text" className="col-form-label">Age</label>
                        </div>
                        <div className="col-auto">
                            <input type="text" className="form-control"/>
                        </div>
                    </div>
                    </div>
                    <div id="gender" className="mb-2">
                    <div className="row g-2 align-items-center">
                        <div className="col-auto">
                            <label htmlFor="text" className="col-form-label">Gender</label>
                        </div>
                        <div className="col-auto">
                            <input type="text" className="form-control"/>
                        </div>
                    </div>
                    </div>
                    <div id="skills" className="mb-2">
                    <div className="row g-2 align-items-center">
                        <div className="col-auto">
                            <label htmlFor="text" className="col-form-label">My Skills</label>
                        </div>
                        <div className="col-auto">
                            <input type="text" className="form-control"/>
                        </div>
                    </div>
                    </div>
                    <div id="aboutme" className="mb-2">
                    <div className="row g-2 align-items-center">
                        <div className="col-auto">
                            <label htmlFor="text" className="col-form-label">About Me</label>
                        </div>
                        <div className="col-auto">
                            <input type="text" className="form-control"/>
                        </div>
                    </div>
                    </div>
                    <div id="buttons" className='mt-5 mb-3 d-flex justify-content-between'>
                        <a href="/myprofile" className="btn btn-dark"><i className="mx-1 fas fa-arrow-left"></i>Go Back</a>
                        <a href="/myprofile" className="btn btn-dark">Save Changes</a>
                    </div>
                </div>
            </div>
    )
}
