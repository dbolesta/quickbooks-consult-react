import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class ItemDetail extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: null
    };
  }

  // const fetchItem = async () => {
  //   const fetchItem = await fetch(
  //     `https://fortnite-api.theapinetwork.com/item/get?id=${
  //       match.params.id
  //     }`,
  //     {
  //       headers: {
  //         Authorization: '5b5981826964644ceee61a6f22ae8bd6'
  //       }
  //     }
  //   );
  //   const item = await fetchItem.json();
  //   console.log(item);
  //   setItem(item);
  // };

  async componentDidMount() {
    const itemId = this.props.match.params.id;
    console.log('itemdetail mounted');
    console.log(itemId);
    const fetchItem = await fetch(
      `https://fortnite-api.theapinetwork.com/item/get?id=${itemId}`,
      {
        headers: {
          Authorization: '5b5981826964644ceee61a6f22ae8bd6'
        }
      }
    );
    const jsonData = await fetchItem.json();
    console.log('is this the data');
    console.log(jsonData);
    this.setState({
      data: jsonData
    });
  }

  render() {
    const { data } = this.state;
    if (data) {
      console.log('here is data?');
      console.log(data);
      const { name, images, description, rarity } = data.data.item;
      return (
        <div>
          <h1>{name}</h1>
          <img src={images.background} alt={description} />
          <br />
          <q>{description}</q>
          <p>{rarity}</p>
          {/* <h1>{item.name}</h1>
          <img src={item.images.icon} alt="" />
          <h2>
            <q>{item.description || 'no desc'}</q>
          </h2> */}
        </div>
      );
    } else return <h1>Loading...</h1>;
  }
}

export default ItemDetail;
