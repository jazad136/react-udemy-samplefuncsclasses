import React from "react";

class ImageCard extends React.Component {
  constructor(props) { 
    super(props);
    this.state = { spans : 0 }; 
    this.imageRef = React.createRef();
  }

  componentDidMount() { 
    // reach into the dom and figure out height
    // add a listener to a callback. 
    this.imageRef.current.addEventListener('load', this.setSpans)
  }


  setSpans = () => { 
    // reach into the dom and figure out height
    // console.log(this.imageRef.current.clientHeight)
    const height = this.imageRef.current.clientHeight;
    const spans = Math.ceil(height / 10) + 1; // + 1
    this.setState({ spans });

  }
  render() {
    const { description, urls } = this.props.image;
    return (
      <div style={{gridRowEnd: `span ${this.state.spans}`}}>
        <img ref={this.imageRef} alt={description} src={urls.regular} />
      </div>
    );
  }
}
export default ImageCard;
