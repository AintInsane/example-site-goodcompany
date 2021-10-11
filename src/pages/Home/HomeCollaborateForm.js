import Typography from "../../components/Typography/Typography";
import './HomeCollaborateForm.css'

export default function HomeCollaborateForm() {
    return (
        <div className="HomeCollaborateForm" >
            <Typography variant="h2" paragraph>
                Let's collaborate!
            </Typography>
            <Typography  variant="text1" color="secondary" paragraph>
               Ready to begin our journey?Drop us a message and we'll
                get in touch with your asap.
            </Typography>


            <div className="HomeCollaborateForm-form">

                <div className="HomeCollaborateForm-formRow">

                    <label className="HomeCollaborateForm-field">
                        <div className="HomeCollaborateForm-fieldLabel">First name</div>
                        <input
                            className="HomeCollaborateForm-fieldInput"
                            placeholder="Type your name"
                        />
                    </label>

                    <label className="HomeCollaborateForm-field">
                        <div className="HomeCollaborateForm-fieldLabel">Last name</div>
                        <input
                            className="HomeCollaborateForm-fieldInput"
                            placeholder="Type your last name"
                        />
                    </label>

                </div>

                <div className="HomeCollaborateForm-formRow">

                    <label className="HomeCollaborateForm-field">
                        <div className="HomeCollaborateForm-fieldLabel">E-mail address</div>
                        <input
                            className="HomeCollaborateForm-fieldInput"
                            placeholder="email@example.com"
                        />
                    </label>

                    <label className="HomeCollaborateForm-field">
                        <div className="HomeCollaborateForm-fieldLabel">Telephone number</div>
                        <input
                            className="HomeCollaborateForm-fieldInput"
                            placeholder="+0 000 000 00 00"
                        />
                    </label>

                </div>

                <div className="HomeCollaborateForm-formRow">

                    <label className="HomeCollaborateForm-field">
                        <div className="HomeCollaborateForm-fieldLabel">Budget</div>
                        <input
                            className="HomeCollaborateForm-fieldInput"
                            placeholder="Chose a budget"
                        />
                    </label>

                    <label className="HomeCollaborateForm-field">
                        <div className="HomeCollaborateForm-fieldLabel">Title</div>
                        <input
                            className="HomeCollaborateForm-fieldInput"
                            placeholder="Type the title"
                        />
                    </label>

                </div>

                <div className="HomeCollaborateForm-formRow">

                    <label className="HomeCollaborateForm-field">
                        <div className="HomeCollaborateForm-fieldLabel">Message</div>
                        <textarea
                            className="HomeCollaborateForm-fieldInput"
                            placeholder="Type your message here"
                            rows="5"
                        />
                    </label>

                </div>

            </div>

            <input className="HomeCollaborateForm-button" type="button" value="Drop it in our inbox"/>

        </div>
    )
}