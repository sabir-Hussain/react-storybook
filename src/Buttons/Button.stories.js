import React from 'react';
import Button from './Button'

export default {
    title: 'Compontes/xiQ-Button',
    component: Button,
    
};
const Template = (args) => <Button {...args} />;

export const SmartButton = Template.bind({})
SmartButton.args = {
    label: 'Button',
};