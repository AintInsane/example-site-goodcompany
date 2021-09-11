import Header from "../../components/Header/Header"
import Section from "../../components/Section/Section"
import SectionWithForm from "../../components/SectionWithForm/SectionWithForm"
import SectionWithCta from "../../components/SectionWithCta/SectionWithCta"
import Footer from "../../components/Footer/Footer"
import HomeCollaborateContent from "./HomeCollaborateContent"
import HomeCollaborateForm from "./HomeCollaborateForm"

export default function Home() {
    return (
        <div>

            <Header />

            <SectionWithForm
                content={(
                    <HomeCollaborateContent />
                )}
                form={(
                    <HomeCollaborateForm />
                )}
            />

            <Section background="darkMedium">

            </Section>

            <Section>cotent</Section>

            <Section background="darkMedium" />

            <SectionWithCta topBackground="darkMedium" bottomBackground="dark" />

            <Footer />

        </div>
    )
}