import React from 'react';
import Button from './outline-btn'

export default {
    title: 'Compontes/xiQ-Button/Outline',
    component: Button,
    
};
const Template = (args) => <Button {...args} />;

export const Outline = Template.bind({})
Outline.args = {
    label: 'Button',
};