import React from 'react';
import Aux from '../hoc/aux';
import classes from './layout.module.scss';

const layout = (props) => (
    <Aux>
        <div>Toolbar, SideDrawer, Backdrop</div>
        <main className={classes.layoutMain}>
            {props.children}
        </main>
    </Aux>
)
export default layout;


