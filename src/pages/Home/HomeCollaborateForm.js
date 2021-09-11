import './HomeCollaborateForm.css'

export default function HomeCollaborateForm() {
    return (
        <div className="HomeCollaborateForm">
            <h3 className="HomeCollaborateForm-title">Let's collaborate!<br/>
                <div className="HomeCollaborateForm-text">xxxxx xxxxx xxxxx xxxxx xxxxxxxxxxx</div>
            </h3>

            <div className="HomeCollaborateForm-form">

                <div className="HomeCollaborateForm-row">
                    <div className="HomeCollaborateForm-field">
                        <div>First name</div>
                        <input className="HomeCollaborateForm-fieldInput" type="text"/>
                    </div>
                    <div className="HomeCollaborateForm-field">
                        <div>Second name</div>
                        <input className="HomeCollaborateForm-fieldInput" type="text"/>
                    </div>
                </div>

                <div className="HomeCollaborateForm-row">
                    <div className="HomeCollaborateForm-field">
                        <div>E-mail adress</div>
                        <input className="HomeCollaborateForm-fieldInput" type="email"/>
                    </div>
                    <div className="HomeCollaborateForm-field">
                        <div>Xxxxxxxx</div>
                        <input className="HomeCollaborateForm-fieldInput" type="text"/>
                    </div>
                </div>

                <div className="HomeCollaborateForm-row">
                    <div className="HomeCollaborateForm-field">
                        <div>Xxxxxxxx</div>
                        <input className="HomeCollaborateForm-fieldInput" type="text"/>
                    </div>
                    <div className="HomeCollaborateForm-field">
                        <div>Xxxxxx</div>
                        <input className="HomeCollaborateForm-fieldInput" type="text"/>
                    </div>
                </div>

                <div className="HomeCollaborateForm-field">
                    <div className="inputcolor">Message</div>
                    <textarea className="HomeCollaborateForm-fieldInput"/>
                </div>
            </div>

        </div>
    )
}