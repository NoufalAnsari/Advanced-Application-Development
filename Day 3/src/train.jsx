import React, { useState } from 'react';
import Nav from './Nav';
import { Form, Button, Input, Modal, SelectPicker } from 'rsuite';
import { Link } from 'react-router-dom';

const selectAge = ['Kids-below 12', 'Teen-below 18', 'Adult-Above 18', 'Aged-Above 50'].map(item => ({
    label: item,
    value: item
  }));

const selectData = ['daily-mornig', 'daily-evening', 'weekend', 'one month'].map(item => ({
  label: item,
  value: item
}));

const Textarea = React.forwardRef((props, ref) => <Input {...props} as="textarea" ref={ref} />);

const Courses = () => {
  const [open, setOpen] = useState(false);
  const [formValue, setFormValue] = useState({
    name: '',
    email: '',
    password: '',
    textarea: ''
  });

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  const cardsData = [
    {
      id: 1,
      imageUrl: 'https://images.unsplash.com/photo-1640117227173-b6970c105b1e?q=80&w=1965&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      title: 'Adam Ray',
      description: 'With 10 years of Experience',
    },
    {
      id: 2,
      imageUrl: 'https://plus.unsplash.com/premium_photo-1666299537073-6d7cab09db36?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      title: 'Amy Clark',
      description: 'With 8 years of Experience',
    },
    {
      id: 3,
      imageUrl: 'https://plus.unsplash.com/premium_photo-1664528917131-f82be45ef625?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      title: 'Lora Grey',
      description: 'With 7 Years of Experience',
    },
    {
      id: 4,
      imageUrl: 'https://images.unsplash.com/photo-1531715210939-d957bc76aee7?q=80&w=1836&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      title: 'Naro Ras',
      description: 'With 9 years of Experience',
    },
  ];

  return (
    <div>
      <Nav />
      <br />
      <div style={{ textAlign: 'center' }}>
        <h1>MEET OUR EXPERIENCED YOGA TEACHERS WHO ARE DEDICATED TO GUIDING YOU ON YOUR YOGA JOURNEY.</h1>
        <p>Experience personalized guidance and support from our knowledgeable yoga instructors, tailored to your individual needs and goals. We aim to lead by example and deliver quality yoga education from a heartfelt place. We believe in spending time in nature in order to feel enriched from the soul outward. We share everything we know with our students and offer the best tools we have to enrich their lives. We help our students discover their passions, live authentically and become the happiest they have ever been. For us, yoga is not just an exercise, a philosophy or a fashion choice. It is our lifestyle...</p>
        <br />
        <h2>Select your Teacher</h2>
      </div>
      <div style={cardListContainerStyle} className="card-list-container">
        {cardsData.map((card) => (
          <div
            key={card.id}
            style={{ ...cardContainerStyle, ...cardContainerHoverStyle }}
            className="card-container"
          >
            <img src={card.imageUrl} alt={card.title} style={cardImageStyle} />
            <div style={cardContentStyle} className="card-content">
              <h2 style={cardTitleStyle} className="card-title">{card.title}</h2>
              <p style={cardDescriptionStyle} className="card-description">{card.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};


export default Courses

// Inline styles with different class names
const cardListContainerStyle = {
  display: 'flex',
  justifyContent: 'space-between',
  margin: '20px',
};

const cardContainerStyle = {
  width: '300px',
  border: '1px solid #ddd',
  borderRadius: '8px',
  overflow: 'hidden',
  boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
  transition: 'box-shadow 0.3s ease',
};

const cardContainerHoverStyle = {
  ':hover': {
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
  },
};

const cardImageStyle = {
  height: '150px',
  width: '100%',
  objectFit: 'cover',
};

const cardContentStyle = {
  padding: '20px',
};

const cardTitleStyle = {
  fontSize: '1.5em',
  marginBottom: '10px',
};

const cardDescriptionStyle = {
  color: '#666',
};

const cardButtonStyle = {
  backgroundColor: '#3498db',
}