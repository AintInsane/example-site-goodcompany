import './HomeCollaborateForm.css'

export default function HomeCollaborateForm() {
    return (
        <div className="HomeCollaborateForm">
            <div className="HomeCollaborateForm-title">
                Let's collaborate!
            </div>
            <div className="HomeCollaborateForm-text">
               Ready to begin our joutney?Drop us a message and we'll
                get in touch with your asap.
            </div>


            <div className="HomeCollaborateForm-form">

                <div className="HomeCollaborateForm-row">
                    <div className="HomeCollaborateForm-field">
                        <div>First name</div>
                        <input className="HomeCollaborateForm-fieldInput" type="text"
                               placeholder="Type your name"
                        />
                    </div>
                    <div className="HomeCollaborateForm-field">
                        <div>Last name</div>
                        <input className="HomeCollaborateForm-fieldInput" type="text"
                               placeholder="Type your last name"
                        />
                    </div>
                </div>

                <div className="HomeCollaborateForm-row">
                    <div className="HomeCollaborateForm-field">
                        <div>E-mail address</div>
                        <input className="HomeCollaborateForm-fieldInput" type="email"
                               placeholder="e-mail@address.com"
                        />
                    </div>
                    <div className="HomeCollaborateForm-field">
                        <div>Telephone number</div>
                        <input className="HomeCollaborateForm-fieldInput" type="text"
                               placeholder="+0 000 000 00 00"
                        />
                    </div>
                </div>

                <div className="HomeCollaborateForm-row">
                    <div className="HomeCollaborateForm-field">
                        <div>Budget</div>
                        <input className="HomeCollaborateForm-fieldInput" type="text"
                               placeholder="Chose a budget"
                        />
                    </div>
                    <div className="HomeCollaborateForm-field">
                        <div>Title</div>
                        <input className="HomeCollaborateForm-fieldInput" type="text"
                               placeholder="Type the title"
                        />
                    </div>
                </div>

                <div className="HomeCollaborateForm-field">
                    <div className="inputcolor">Message</div>
                    <textarea className="HomeCollaborateForm-fieldInput"
                              placeholder="Type your message here"
                    />
                </div>
            </div>
            <input className="HomeCollaborateForm-submit" type="submit" value="Drop it in our inbox"/>
        </div>
    )
}