import React, { Component } from 'react';
import axios from 'axios';

class GiphyApi extends Component {
  state = {
    searchInput: '',
    giphyResults: [],
  }

  componentDidMount() {
    this.getGiphy('Rick and Morty');
  }

  getGiphy(searchTerm) {
    const baseApiUrl = 'https://api.giphy.com/v1/gifs/search';
    const apiKey = 'XSuWA8pcf51tUzZuSektOtgaKbbzk50M';
    // const searchTerm = 'Rick and Morty';

    // axios({
    //   method: 'GET',
    //   url: `${baseApiUrl}?api_key=${apiKey}&q=${searchTerm}`
    // })
    axios.get(`${baseApiUrl}?api_key=${apiKey}&q=${searchTerm}`)
      .then((response) => {
        console.log(response);
        const giphyPkg = response.data;
        const giphyImgs = giphyPkg.data;

        this.setState({
          giphyResults: giphyImgs
        })
      })
      .catch((err) => {
        console.warn(err);
      });
  }

  changeSearch = (event) => {
    this.setState({
      searchInput: event.target.value
    },
    () => {
      console.log(this.state.searchInput);
    });
  }

  clickSearch = (event) => {
    this.getGiphy(this.state.searchInput);
  }

  render() {
    const giphyElements = this.state.giphyResults.map((item, index) => {
      return <div key={index}><img src={item.images.original.url} alt={item.title} /></div>
    });

    return (
      <div>
        Giphy API
        <div>
          <input
            type="text"
            placeholder="Giphy Search"
            onChange={this.changeSearch}
            name="search"
          />
          <button onClick={this.clickSearch}>Search</button>
        </div>
        <div>
          {giphyElements}
        </div>
      </div>
    );
  }
}

export default GiphyApi;