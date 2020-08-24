import React from 'react';
import Button from './filled-btn'

export default {
    title: 'Compontes/xiQ-Button/Filled',
    component: Button,
    
};
const Template = (args) => <Button {...args} />;

export const Filled = Template.bind({})
Filled.args = {
    label: 'Button',
};