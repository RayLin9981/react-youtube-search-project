// search_bar.js
import React, {Component} from "react"; // 原本下面要寫 React.Component {} 直接額外宣告
// 等同於 const Component = React.Component


class SearchBar extends Component {
    constructor(props){
        super(props); //  不寫會有 error
        this.state = {term: ''};
    }
    render(){ // Class 裡面一定要有 render, 並回傳 JSX, 不然會有 error 
        // this.state.term = event.target.value  看起來好像跟下面一樣，但是 BAD

        return (
        <div className="search-bar">
            <input
                value={this.state.term}
                onChange={event => this.onInputChange(event.target.value)} /> 
        </div>
        // 如果把 onChange 刪掉的話， 就沒辦法打字了
        //  onChange={e => this.setState({term: e.target.value }) } 
        );
    }

   
    onInputChange(term){
        this.setState({term})
        this.props.onSearchTermChange(term)
    }
}

export default SearchBar;
