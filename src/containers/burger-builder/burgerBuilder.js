import React, {Component} from 'react';
import Aux from '../../hoc/aux';
import Burger from '../../components/Burger/Burger'

class BurgerBuilder extends Component {
    /*constructor(props){
        super(props);
    }*/
    state={
        ingredients: {
            salad: 2,
            bacon: 3,
            cheese: 0,
            meat:0
        }
    }
    render(){
        return (
            <Aux>
                <Burger ingredients={this.state.ingredients}/>
                <div> Build Controls</div>
            </Aux>
        )
    }
}
export default BurgerBuilder;