import { ChangeEvent } from "react";

interface Props {
    handleChange: (e: ChangeEvent<HTMLInputElement>) => void,
    submitSearch: () => void,
    value: string
}

export function SearchBar(props: Props) {
    return (
        <form className="SearchBar">
            <div className="formGroup">
                <input
                    type="text"
                    name="search"
                    value={props.value}
                    placeholder="søg by, post eller adresse"
                    onChange={e => props.handleChange(e)} />

                <input type="button" value="søg" onClick={props.submitSearch} />
            </div>
        </form>
    )
}