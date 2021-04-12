import Image from "next/image";
import React, { Component } from "react";
import ContactForm from "../components/ContactForm";
import { Header } from "../components/Header";

interface Props {

}
interface State {

}
export default class Page extends Component<Props, State> {
    constructor(props: Props) {
        super(props);
    }

    render() {

        return (
            <>
                <Header />
                <main id="contact">
                    <aside>
                        <h2 className="title">Kontakt</h2>

                        <section>
                            <Image 
                                src={`/img/profile.jpg`}
                                alt=""
                                layout="responsive"
                                width={200}
                                height={255}
                                quality={100}
                            />

                            <article>
                                <p>Ejendomsmægler</p>

                                <p>K. Peter Væltemig</p>

                                <p>
                                    Boligstjernen A/S<br/>
                                    Park allé 335<br/>
                                    2100 København Ø
                                </p>
                            </article>
                        </section>
                    </aside>
                    <section>
                        <ContactForm />
                    </section>
                </main>
            </>
        );
    }
}