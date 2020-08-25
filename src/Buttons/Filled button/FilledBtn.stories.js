import React from 'react';
import Button from './FilledBtn'

export default {
    title: 'Compontes/xiQ-Button',
    component: Button,
    
};
const Template = (args) => <Button {...args} />;

export const Filled = Template.bind({})
Filled.args = {
    label: 'Button',
};