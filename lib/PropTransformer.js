import React from 'react';


class PropTransformer extends Component {
  static defaultProps = {
    transforms: {},
  };
  getTransformedProps = (origProps) => {
    const { transforms } = this.props;

    return Object.keys(transforms).reduce((result, propKey) => ({
      ...result,
      [propKey]: transforms[propKey](origProps[propKey]),
    }), origProps);
  };
  render() {
    const transformedChildren = (
      React.Children.map(this.props.children, (child) => (
        React.cloneElement(child, this.getTransformedProps(child.props))
      ))
    );

    if (Array.isArray(this.props.children)) {
      return transformedChildren;
    } else if (this.props.children) {
      return transformedChildren[0];
    }

    return null;
  }
}
