import React, { Component } from 'react';

class LineItem extends Component {
  render() {
    let { lineItem } = this.props;
    let image = lineItem.variant.images[0];

    return (
      <div className="shipment-line-item row">
        <div className="col-md-2 thumsbnail">
          <img className="shipment-line-item-image img-responsive img-center"
                alt={ lineItem.variant.name }
                src={ process.env.REACT_APP_API_HOST + image.mini_url } />
        </div>

        <div className="col-md-10">
          <p>
            { lineItem.variant.name }
          </p>

          <p>
            { `${ lineItem.variant.display_price } x ${ lineItem.quantity }` }
          </p>
        </div>
      </div>
    );
  };
};

export default LineItem;