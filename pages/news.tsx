import React, { Component } from "react";
import { Header } from "../components/Header";
import Posts from "../components/Posts";

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
                <main id="news">
                    <h1 className="title">Nyheder</h1>

                    <Posts />
                </main>
            </>
        );
    }
}