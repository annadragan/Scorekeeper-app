import Create from './Create.js';

export default {
  title: 'components/Create',
  component: Create,
};

const Template = args => <Create {...args} />;

export const Default = Template.bind({});
Default.args = {
  take: 'Create game',
};
