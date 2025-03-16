export function Contact() {
    return (
        <div className="container-fluid d-flex flex-column mt-5" >
            <div className="row flex-fill">
                <div className="col-12 d-flex justify-content-center align-items-center">
                    <div className="d-flex justify-content-center align-items-center text-center flex-column">
                        <h3>Contacto</h3>
                        <p>Si tienes alguna duda o sugerencia, no dudes en contactarme.</p>
                    </div>
                </div>
            </div>
            <div className="row flex-fill m-3">
                <div className="col-12 d-flex justify-content-center align-items-start">
                    <div className="text-white ">
                        <a href="https://github.com/OmarG1011" target="_blank">
                            <i className="fa-brands mx-3 fa-github fa-3x text-black"></i>
                        </a>
                        <a href="https://www.linkedin.com/in/oscar-omar-ortega-gonzalez-6247b2301?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank">
                            <i className="fa-brands mx-3 fa-linkedin fa-3x text-primary"></i>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};
