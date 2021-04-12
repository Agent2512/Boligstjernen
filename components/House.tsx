import { Component } from "react";
import Link from 'next/link';
import Image from 'next/image'
import { IHouse } from "../interfaces/interfaces";


interface Props {
    type: "full" | "small" | "no-description"
    data: IHouse
}
interface State {

}
export default class House extends Component<Props, State> {
    constructor(props: Props) {
        super(props);
    }

    render() {
        if (this.props.type == "small") {
            return (
                <article className={`House ${this.props.type}`} key={this.props.data.id} >
                    <Image
                        src={`/img/house/${this.props.data.mainImage}`}
                        alt="main house image"
                        layout="responsive"
                        width={800}
                        height={450}
                    />

                    <div>
                        <Link href={{ pathname: "/showHouse", query: { house: this.props.data.id.toString() } }} >
                            <a>{`${this.props.data.address}, ${this.props.data.zipCode}, ${this.props.data.city}`}</a>
                        </Link>

                        <table >
                            <tbody>
                                <tr>
                                    <td>Adresse:</td>
                                    <td>{this.props.data.address}</td>
                                </tr>
                                <tr>
                                    <td>Post nr:</td>
                                    <td>{this.props.data.zipCode}</td>
                                </tr>
                                <tr>
                                    <td>By:</td>
                                    <td>{this.props.data.city}</td>
                                </tr>
                                <tr>
                                    <td>Bolig:</td>
                                    <td>{this.props.data.houseSize}</td>
                                </tr>
                                <tr>
                                    <td>Grund:</td>
                                    <td>{this.props.data.grundSize}</td>
                                </tr>
                                <tr>
                                    <td>Pris:</td>
                                    <td>{this.props.data.price}</td>
                                </tr>
                                <tr>
                                    <td>Emnenummer:</td>
                                    <td>{this.props.data.id}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </article>
            )
        }
        else {
            return (
                <article className={`House ${this.props.type}`} key={this.props.data.id} >
                    <Link href={{ pathname: "/showHouse", query: { house: this.props.data.id.toString() } }} >
                        <a>{`${this.props.data.address}, ${this.props.data.zipCode}, ${this.props.data.city}`}</a>
                    </Link>

                    <div className="mainImage">
                        <Image
                            src={`/img/house/${this.props.data.mainImage}`}
                            alt="main house image"
                            width={800}
                            height={450}
                            layout="responsive"
                        />
                    </div>

                    {this.props.data.images.map(i => {
                        const num = (this.props.data.images.indexOf(i) + 1);

                        if (num <= 3) return (
                            <div className={`Thumbnail${this.props.data.images.indexOf(i) + 1}`} key={i} >
                                <Image
                                    src={`/img/house/${i}`}
                                    alt="Thumbnail image of house"
                                    width={180}
                                    height={100}
                                    layout="responsive"
                                />
                            </div>
                        )
                    })}

                    <div className="Thumbnail4">
                        <Image
                            src={`/img/error.png`}
                            alt="Thumbnail image of maps"
                            width={180}
                            height={100}
                            layout="responsive"
                        />
                    </div>

                    <table className="info1">
                        <tbody>
                            <tr>
                                <td>Adresse:</td>
                                <td>{this.props.data.address}</td>
                            </tr>
                            <tr>
                                <td>Post nr:</td>
                                <td>{this.props.data.zipCode}</td>
                            </tr>
                            <tr>
                                <td>By:</td>
                                <td>{this.props.data.city}</td>
                            </tr>
                        </tbody>
                    </table>

                    <table className="info2">
                        <tbody>
                            <tr>
                                <td>Bolig:</td>
                                <td>{this.props.data.houseSize}</td>
                            </tr>
                            <tr>
                                <td>Grund:</td>
                                <td>{this.props.data.grundSize}</td>
                            </tr>
                            <tr>
                                <td>Pris:</td>
                                <td>{this.props.data.price}</td>
                            </tr>
                            <tr>
                                <td>Emnenummer:</td>
                                <td>{this.props.data.id}</td>
                            </tr>
                        </tbody>
                    </table>
                
                    {(this.props.type == "full") && (
                        <article className="article">
                            <h3 className="title">{this.props.data.title}</h3>
                            <div className="text">
                                {this.props.data.text}
                            </div>
                        </article>
                    )}
                
                </article>
            )
        }
    }
}