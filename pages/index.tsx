import React, { ChangeEvent, Component } from "react";
import { Header } from "../components/Header";
import House from "../components/House";
import { SearchBar } from "../components/SearchBar";
import { IHouse } from "../interfaces/interfaces";

import houses from "../data/houses.json";

interface Props {

}
interface State {
    search: string
}
export default class Page extends Component<Props, State> {
    constructor(props: Props) {
        super(props);

        this.state = {
            search: "",
        }
    }

    handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target
        name == "search" && this.setState({ [name]: value })
    }

    submitSearch = () => {
        console.log(this.state)
    }

    render() {

        const houseElements = houses.map((e:IHouse) => {
            return <House type="full" data={e} key={e.id}/>
        });

        return (
            <>
                <Header />
                <main id="index">
                    <aside>
                        <h2 className="title">
                            Velkommen hos Boligstjernen
                        </h2>

                        <section>
                            <p>
                                Her kan du se vores aktuelle udbud af boliger
                                Du er også meget velkommen til at kontakte os og få rådgivning når du skal købe din næste bolig og få:
                            </p>

                            <ul>
                                <p>ersonlig køberrådgiver</p>
                                <p>økonomisk overblik</p>
                                <p>oplysning om købelov</p>
                                <p>oplysning om købsforsikringer</p>
                                <p>afdragsfri finansiering</p>
                                <p>...ingen omkostninger, hvis I ikke køber</p>
                            </ul>

                            <SearchBar handleChange={this.handleChange} submitSearch={this.submitSearch} value={this.state.search} />
                        </section>
                    </aside>

                    <section>
                        {houseElements[0]}
                    </section>

                    
                </main>
            </>
        );
    }
}