import React, { Component } from 'react'
import {Link, Redirect} from 'react-router-dom'
import {connect} from 'react-redux'
import {onLogoutUser} from '../actions'

class Header extends Component {
    render() {
        const {user} = this.props

        if(user.username === ''){
            return (
                <div>
                    <nav className="navbar navbar-expand-sm navbar-light bg-dark mb-3">
                            <div className="container">
                                <Link className="navbar-brand text-white" to="/">Shipperz</Link>
                                <button className="navbar-toggler" data-toggle="collapse" data-target="#navbarNav2">
                                    <span className="navbar-toggler-icon"></span>
                                </button>
        
                                <div className="collapse navbar-collapse row p-2" id="navbarNav2">
                                    <form className="input-group col-12 col-md-7 ml-auto">
                                        <input type="text" className="form-control mr-2" placeholder="Search" />
                                        <button className="btn btn-outline-success">Search</button>
                                    </form>
                                    <ul className="navbar-nav ml-auto col-12 col-md-5">
                                        <li className="nav-item mt-2">
                                            <Link className="nav-a" to="/">All Product</Link>
                                        </li>
                                        
                                        <li className="nav-item m-1">
                                            <Link className="nav-a" to="/register"><button className="btn btn-primary">Register</button></Link>
                                        </li>
                                        <li className="nav-item m-1">
                                            <Link className="nav-a" to="/login"><button className="btn btn-success">Login</button></Link>
                                        </li>
                                        
                                    </ul>
                                </div>
                            </div>
                        </nav>
                </div>
            )
        } else {
            return (
                <div>
                    <Redirect to="/"/>
                <nav className="navbar sticky-top navbar-expand-md navbar-light bg-dark mb-3">
                    <div className="container">
                        <Link className="navbar-brand text-white" to="/"><i className="fa fa-shopping-cart"></i> WELCOME TO Shipperz</Link>
                        <button className="navbar-toggler" data-toggle="collapse" data-target="#navbarNav2">
                            <span className="navbar-toggler-icon"></span>
                        </button>

                        <div className="collapse navbar-collapse row p-2" id="navbarNav2">
                            <form className="input-group col-12 col-md-7 ml-auto">
                                <input type="text" className="form-control mr-2" placeholder="Search" />
                                <button className="btn btn-outline-success">Search</button>
                            </form>
                            <ul className="navbar-nav ml-auto col-12 col-md-5">
                                <li className="nav-item mt-2">
                                    <Link className="nav-link text-primary" to="/">All Product</Link>
                                </li>
                                <li className="nav-item dropdown mt-2">
                                    <Link to="/asd" className="nav-link dropdown-toggle text-primary" data-toggle="dropdown">Hallo {user.username}</Link>
                                    <div className="dropdown-menu">
                                        <Link to="/manageproduct" className="dropdown-item">Manage Product</Link>
                                        <Link to="/" className="dropdown-item">Lihat Product</Link>
                                        <Link to="/cart" className="dropdown-item">Cart</Link>
                                        <button onClick={this.props.onLogoutUser} className="dropdown-item">Logout</button>
                                    </div>
                                </li>
                            </ul>
                            
                        </div>
                    </div>
                </nav>
            </div>
            )
        }
            
        
    }
}

const mapStateToProps = state => {
    return {user: state.auth}
}

export default connect(mapStateToProps, {onLogoutUser})(Header)