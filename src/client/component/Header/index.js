import React from 'react';
import { connect } from 'react-redux';
import './index.scss';

const Header = (props) => (
  <div className="header">
    Welcome {props.loginUser}
  </div>
);
const mapStateToProps = state => {
  return {
    loginUser: state.loginReducer.loginUser,
  };
};

export default connect(
  mapStateToProps,
  null
)(Header);

