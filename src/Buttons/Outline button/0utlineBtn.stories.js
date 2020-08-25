import React from 'react';
import Button from './OutlineBtn'

export default {
    title: 'Compontes/xiQ-Button',
    component: Button,
    
};
const Template = (args) => <Button {...args} />;

export const Outline = Template.bind({})
Outline.args = {
    label: 'Button',
};