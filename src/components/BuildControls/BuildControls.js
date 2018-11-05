import React from 'react';
import classes from './BuildControls.module.scss';
import BuildControl from './BuildControl/BuildControl';

const controls = [
    { label: 'Salad', type: 'salad'},
    { label: 'Bacon', type: 'bacon'},
    { label: 'Cheese', type: 'cheese'},
    { label: 'Meat', type: 'meat'}
]

const buildControls = (props) => (
    <div className={classes.BuildControls}>
        {controls.map(ctrl => {
            return (
                <BuildControl key={ctrl.label} label={ctrl.label}
                added={()=> {
                    props.ingridentAdded(ctrl.type)
                }}
                removed={()=> 
                    props.ingridentRemoved(ctrl.type) 
                } 
                disabled = {props.disabled[ctrl.type]}/>
            )
        })} 
    </div>
)
export default buildControls;