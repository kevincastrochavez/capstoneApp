import React, { Component } from "react";
import * as actions from "../../actions";
import { connect } from "react-redux";

class OrderDetailsInfo extends Component {
  componentDidMount() {
    this.props.fetchUserInformation();
  }

  render() {
    const { data } = this.props;
    return (
      <div className="order-details__info">
        <div className="order-details__info-section">
          <div className="order-details__info-section-title">
            <h3>Delivery</h3>
          </div>

          <div className="order-details__info-section-user">
            <p>{data.name}</p>
            <p>{`${data.address1}, ${data.address2}`}</p>
            <p>{`${data.city}, ${data.zipcode} ${data.country}`}</p>
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  const { data } = state.information;

  return {
    data,
  };
}

export default connect(mapStateToProps, actions)(OrderDetailsInfo);
