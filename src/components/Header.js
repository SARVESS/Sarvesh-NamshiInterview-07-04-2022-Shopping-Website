import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import  {connect} from  'react-redux'
export class Header extends Component {
    componentDidMount() {
        console.log('this -> categories', this.props.categories);
    }
    componentDidUpdate() {
        console.log('this -> categories', this.props.categories);
    }
    render() {
        return (
            <div className="row">
              <div className="col-md-12">
                   { this.props.categories && (<nav className="navbar  navbar-dark bg-dark ">
                     <ul className="nav">
                      {this.props.categories.map((category) => {
                           return (<li className="nav-item" style={{ marginLeft: '20px', color: 'white' }} >{category}</li>)
                      })}     
                     </ul>
                  </nav>) }
                  <nav className="navbar ">
                        <ul className="nav">
                            <li className="nav-item" ><Link to="/" className="nav-link active">Products</Link></li>
                            <li className="nav-item"><Link to="/carts" className="nav-link">Carts : {this.props.numberCart}</Link></li>
                        </ul>
                  </nav>
              </div>
            </div>
        )
    }
}
const mapStateToProps = state =>{
    return{
        numberCart:state._todoProduct.numberCart,
        categories:state._todoProduct.categories || []
    }
}
export default connect(mapStateToProps,null)(Header)
