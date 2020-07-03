import React from 'react';
import withLoading from '../HOC/withLoading';
import Card from '../components/Card';
import { Container } from 'semantic-ui-react';

const UserList = (props) => {
  const RenderUsers = () => {
    return props.users.map((user, index) => {
      return <Card key={'user-' + index} user={user} />;
    });
  };

  return (
    <Container
      style={{
        display: 'flex',
        justifyContent: 'center',
        maxWidth: '80%',
        flexWrap: 'wrap',
      }}
    >
      <RenderUsers />
    </Container>
  );
};

export default withLoading(UserList);
