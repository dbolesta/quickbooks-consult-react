import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Shop extends Component {
  constructor(props) {
    super(props);

    this.state = {
      items: []
    };
  }

  async componentDidMount() {
    const response = await fetch(
      'https://fortnite-api.theapinetwork.com/upcoming/get',
      {
        headers: {
          Authorization: '5b5981826964644ceee61a6f22ae8bd6'
        }
      }
    );

    const json = await response.json();

    this.setState({
      items: json
    });
  }

  render() {
    const { data } = this.state.items;
    if (data) {
      return (
        <div>
          <h1>This is the eternal Shop page</h1>
          <div>{console.log(data)}</div>
          {data.map(item => (
            <h1 key={item.itemId}>
              <Link to={`/shop/${item.itemId}`}>
                {item.item.name}
              </Link>
            </h1>
          ))}

          {/* {this.state.items.data.map(item => (
            <h1 key={item.itemid}>
              <Link to={`shop/${item.itemid}`}>{item.name}</Link>
            </h1>
          ))} */}
        </div>
      );
    } else return <div>There was nothing</div>;
  }
}
export default Shop;
