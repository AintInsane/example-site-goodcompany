import Header from "../../components/Header/Header"
import Section from "../../components/Section/Section"
import Footer from "../../components/Footer/Footer"
import SectionContentWithImage from "../../components/Section/SectionContentWithImage"
import birdUrl from "./bird.jpg"
import povarUrl from "./povar.jpg"
import chaiUrl from "./chai.jpg"

export default function About(props) {

    return (
        <div>

            <Header/>

            <Section>

                <SectionContentWithImage
                    imagePlacement="start"
                    imageUrl={birdUrl}
                    title="КУМЫС ИНКОМПАРЕЙТЕД"
                    text={(
                        <div>
                            <div>
                                Наша компания берет начало в далеком 1798 году.
                                И на протяжении всех этих лет мы успешно успепали во всём!
                                От разработки алгоритмов автоматизации для мотыги до средств
                                навигации для голубей.
                            </div>
                        </div>
                    )}
                />

                <SectionContentWithImage
                    imagePlacement="end"
                    imageUrl={povarUrl}
                    title="НАШИ КЛИЕНТЫ"
                    text={(
                        <div>
                            <div>
                                Гордон Рамзи
                                Британский шеф-повар, ведущий британских телешоу The F Word,
                                «Кошмары на кухне» и «Адская кухня», а также их американских версий.
                                Фирменный ресторан Рамзи в Лондоне - Restaurant Gordon Ramsay - был удостоен
                                трёх звёзд Мишлен.
                            </div>
                        </div>
                    )}
                />

            </Section>

            <Section background="darkMedium">
                <SectionContentWithImage
                    imagePlacement="start"
                    imageUrl={chaiUrl}
                    title="НАША КОМАНДА"
                    text={(
                        <div>
                            <div>
                                Перевод на удалённый сервер. От 1000 ₽/мес/раб. место. Сопровождение. Тест бесплатно! · Качественный сервис. Большой опыт. Удобная оплата. Гарантия качества
                                100% безопасностьКнопка отключения.Ничего лишнего.Сопровождение
                            </div>
                        </div>
                    )}
                />
            </Section>

            <Footer/>

        </div>
    )

}