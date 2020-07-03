import React from 'react';
import { Card, Icon, Image } from 'semantic-ui-react';

const CardExampleCard = ({ user }) => (
  <div className='container' style={{ margin: '8px' }}>
    <Card>
      <Image
        src='https://react.semantic-ui.com/images/avatar/large/matthew.png'
        wrapped
        ui={false}
      />
      <Card.Content>
        <Card.Header>{user.name}</Card.Header>
        <Card.Meta>
          <span className='date'>{user.phone}</span>
        </Card.Meta>
        <Card.Description>{user.email}</Card.Description>
      </Card.Content>
      <Card.Content extra>
        <a>
          <Icon name='cloud' />
          {user.website}
        </a>
      </Card.Content>
    </Card>
  </div>
);

export default CardExampleCard;
