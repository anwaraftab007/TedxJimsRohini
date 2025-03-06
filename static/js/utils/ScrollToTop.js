import React from "react";
import { withRouter } from "react-router-dom";

class ScrollToTop extends React.Component {
    componentDidUpdate(prevProps) {
      if (
        this.props.location.pathname !== prevProps.location.pathname
      ) {
        window.scrollTo(0, 0);
        window.$('.classy-menu').removeClass('menu-on');
        window.$('.navbarToggler').removeClass('active');
      }
    }
  
    render() {
      return null;
    }
  }
  
  export default withRouter(ScrollToTop);