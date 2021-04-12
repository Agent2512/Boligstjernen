import { ChangeEvent } from "react";
import { ISearchForm } from "../interfaces/interfaces";

interface Props {
    handleChange: (e: ChangeEvent<HTMLInputElement>) => void,
    submitSearch: () => void,
    data: ISearchForm | null
}

export function SearchForm(props: Props) {
    return (
        <form className="SearchForm">

            <div className="formGroup">
                <input
                    type="text"
                    name="city"
                    value={props.data?.city}
                    placeholder="By"
                    onChange={e => props.handleChange(e)} />
            </div>

            <div className="formGroup">
                <input
                    type="text"
                    name="zipCode"
                    value={props.data?.zipCode}
                    placeholder="Post. Nr"
                    onChange={e => props.handleChange(e)} />
            </div>

            <div className="formGroup-check">
                <input
                    type="checkbox"
                    name="houseType"
                    value="villa"
                    checked={props.data?.houseType=="villa"&&true}
                    onChange={e => props.handleChange(e)} />
                <label>villa</label>

                <input
                    type="checkbox"
                    name="houseType"
                    value="rækkehus"
                    checked={props.data?.houseType=="rækkehus"&&true}
                    onChange={e => props.handleChange(e)} />
                <label>rækkehus</label>

                <input
                    type="checkbox"
                    name="houseType"
                    value="lejighed"
                    checked={props.data?.houseType=="lejighed"&&true}
                    onChange={e => props.handleChange(e)} />
                <label>lejighed</label>

                <input
                    type="checkbox"
                    name="houseType"
                    value="landejendom"
                    checked={props.data?.houseType=="landejendom"&&true}
                    onChange={e => props.handleChange(e)} />
                <label>landejendom</label>
            </div>

            <div className="formGroup">
                <input
                    type="text"
                    name="minHouseSize"
                    value={props.data?.minHouseSize}
                    placeholder="Min. boligareal m²"
                    onChange={e => props.handleChange(e)} />
            </div>

            <div className="formGroup">
                <input
                    type="text"
                    name="minGrundSize"
                    value={props.data?.minGrundSize}
                    placeholder="Min. grundareal m²"
                    onChange={e => props.handleChange(e)} />
            </div>

            <div className="formGroup">
                <input
                    type="text"
                    name="minPrice"
                    value={props.data?.minPrice}
                    placeholder="Min. pris i DKK"
                    onChange={e => props.handleChange(e)} />
            </div>

            <div className="formGroup">
                <input
                    type="text"
                    name="maxPrice"
                    value={props.data?.maxPrice}
                    placeholder="Maks. pris i DKK"
                    onChange={e => props.handleChange(e)} />
            </div>

            <div className="formGroup">
                <input
                    type="text"
                    name="id"
                    value={props.data?.id}
                    placeholder="Emnenummer"
                    onChange={e => props.handleChange(e)} />
            </div>

            <div className="formGroup">
                <input type="button" value="søg" onClick={props.submitSearch} />
            </div>
        </form>
    )
}