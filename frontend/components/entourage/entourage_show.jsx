import React from 'react';
import { Link } from 'react-router';

class EntourageShow extends React.Component {

  constructor(props){
    super(props);

  }

  componentDidMount(){
    this.props.requestEntourage(parseInt(this.props.params.entourageId));
  }

  componentWillUpdate(nextProps){
    if(this.props.params.entourageId !== nextProps.params.entourageId){
      this.props.requestEntourage(parseInt(nextProps.params.entourageId));

    }
  }

  render(){
    let dude = this.props.entourage;

    return (
      <div className="entourage-show-container">
        <img src={dude.pic_url} className="entourage-pic" />
        <div className="entourage-info">
          <div className="entourage-name">{dude.name}</div>
          <div className="entourage-bio">Bio: {dude.bio}</div>
        </div>
      </div>
    );
  }
}

export default EntourageShow;
