import React from "react";
import {SearchIcon} from "@primer/octicons-react";

export class SearchPanel extends React.Component {
    state = {
        searchText: "Start typing"
    }

    onChangeHandler = (event) => {
        let value = event.target.value;
        this.setState((state) => {
            return {
                searchText: value
            }
        })
    }

    onFocusHandler = () => {
        this.onChangeHandler({target:{value:""}})
    }

    onSubmitHandler = (event) => {
        event.preventDefault();
        this.props.SubmitFormHandler(this.state.searchText);
    }

    render() {
        return (
            <form className="row mt-2 mb-2 justify-content-md-center" action="" onSubmit={this.onSubmitHandler}>
                <input type="text"
                       className={"form-control col"}
                       name="search"
                       id="search-panel"
                       value={this.state.searchText}
                       onChange={this.onChangeHandler}
                       onFocus={this.onFocusHandler}
                />
                <button className="btn btn-outline-success col-2" type="submit">
                    <SearchIcon size={24} />
                </button>
            </form>
        )
    }

}