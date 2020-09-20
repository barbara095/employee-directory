import React from "react";
import "./style.css";

function Search(props) {
    return (
        <form>
            <div className="form-group">
                <label>Search</label>
                <input label="search-bar"
                    id="search"
                    onChange={props.handleInputChange}
                    value={props.search}
                    name="search"
                    type="text"
                    placeholder="Search for employee"
                />
                <button type="submit" onClick={props.handleFormSubmit} className="btn btn-success">
                    <i class="fa fa-search" aria-hidden="true"></i>
                 </button>
                 <br />
                 <button type="refresh" onClick={props.refreshPage} className="btn btn-danger">
                 <i class="fa fa-refresh" aria-hidden="true"></i>
                 </button>
            </div>
        </form>
    )
};

export default Search;