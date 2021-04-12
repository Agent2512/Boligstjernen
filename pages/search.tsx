import React, { ChangeEvent, Component } from "react";
import { Header } from "../components/Header";
import { IHouse, ISearchForm } from "../interfaces/interfaces";
import House from "../components/House";
import { SearchForm } from "../components/SearchForm";

import houses from "../data/houses.json";

interface Props {

}
interface State {
    search: ISearchForm | null

    searched: boolean
}
export default class Page extends Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = {
            search: null,
            searched: false
        }
    }

    handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        let { name, value } = e.target

        name == "zipCode" && this.setState({search: {...this.state.search, [name]:value}})
        name == "city" && this.setState({search: {...this.state.search, [name]:value}})
        

        name == "houseType" && this.setState(pre => {
            pre.search?.houseType == value && (value = "false");

            return {search: {...this.state.search, [name]:value}}
        });
        
        name == "minHouseSize" && this.setState({search: {...this.state.search, [name]:value}})
        name == "minGrundSize" && this.setState({search: {...this.state.search, [name]:value}})
        
        name == "minPrice" && this.setState({search: {...this.state.search, [name]:value}})
        name == "maxPrice" && this.setState({search: {...this.state.search, [name]:value}})
        
        name == "id" && this.setState({search: {...this.state.search, [name]:value}})
    }

    submitSearch = () => {
        this.setState(pre => {
            return { searched: !pre.searched }
        })
        console.log(this.state)
    }

    render() {
        const houseElements = houses.map((e: IHouse) => {
            return <House type={this.state.searched ? "small" : "full"} data={e} key={e.id} />
        });

        return (
            <>
                <Header />
                <main id="search">
                    <aside>
                        <h2 className="title">
                            Søg bolig
                        </h2>

                        <section>
                            <SearchForm handleChange={this.handleChange} submitSearch={this.submitSearch} data={this.state.search} />

                        </section>
                    </aside>

                    <section>
                        {houseElements}
                    </section>


                </main>
            </>
        );
    }
}