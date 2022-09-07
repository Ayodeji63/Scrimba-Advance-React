import React, {Component} from "react"
import {withToggler} from "./HOCs/withToggler"

// class Favorite extends Component {
//     // state = {
//     //     isFavorited: false
//     // }
    
//     // toggleFavorite = () => {
//     //     this.setState(prevState => {
//     //         return {
//     //             isFavorited: !prevState.isFavorited
//     //         }
//     //     })
//     // }
    
//     render() {
//         return (
//             <div>
//                 <h3>Click heart to favorite</h3>
//                 <h1>
//                     <span 
//                         onClick={this.props.toggle}
//                     >
//                         {this.props.on ? "❤️" : "♡"}
//                     </span>
//                 </h1>
//             </div>
//         ) 
//     }
// }

const Favorite = (props) => {
    return (
        <div>
                <h3>Click heart to favorite</h3>
                 <h1>
                     <span 
                        onClick={props.toggle}>
                        {props.on ? "❤️" : "♡"}
                     </span>
                 </h1>
             </div> 
    )
}

const SuperchargedFavoriteComponent = withToggler(Favorite, {defaultOnValue: false})
export default SuperchargedFavoriteComponent