import React, { Component } from 'react';


export default class PropTransformer extends Component {
  constructor(props) {
    super(props);
    this.getTransformedProps = this.getTransformedProps.bind(this);
  }
  getTransformedProps(origProps, i) {
    const { transforms } = this.props;

    return Object.keys(transforms).reduce((result, propKey) => {
      return Object.assign({}, result, {[propKey]: transforms[propKey](origProps[propKey], i)})
    }, origProps);
  }
  render() {
    const transformedChildren = (
      React.Children.map(this.props.children, (child, i) => (
        React.cloneElement(child, this.getTransformedProps(child.props, i))
      ))
    );

    if (Array.isArray(this.props.children)) {
      return <div>{transformedChildren}</div>;
    } else if (this.props.children) {
      return transformedChildren[0];
    }


    return null;
  }
}
PropTransformer.defaultProps = {
  transforms: {},
};
