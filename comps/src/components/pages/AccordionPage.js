import Accordion from "../Accordion";

function AccordionPage() {
  const items = [
    {
      id: 1,
      label: 'JS',
      content: 'Front-end and Back-end'
    },
    {
      id: 2,
      label: 'React',
      content: 'Front-end DOM manipulator'
    },
    {
      id: 3,
      label: 'Phyton',
      content: 'Back-end'
    }
  ]

  return (
    <Accordion items={ items } />
  )
};

export default AccordionPage;