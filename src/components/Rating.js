import React from 'react';

class Rating extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      increasing: false,
      decreasing: false
    };
  }

//implement a componentWillReceiveProps
//nextProps passed into the method
//compare the nextProps rating to props rating
//call setState with the correct values
  componentWillReceiveProps(nextProps) {
    this.setState({
      //average score is increasing if someone likes the book
      increasing: this.props.rating < nextProps.rating,
      //decreasing when dislike the book
      decreasing: this.props.rating > nextProps.rating
    })
  }

  render() {
    let trend = 'stable';
    if (this.state.increasing) {
      trend = 'increasing';
    } else if (this.state.decreasing) {
      trend = 'decreasing';
    }

    return (
      <div>
        <p>Rating: {this.props.rating}</p>
        <p>Trend: {trend}</p>
      </div>
    )
  }
}

export default Rating;
