import { Button } from "react-bootstrap";
import { useState } from "react";
import { Card } from "react-bootstrap";

const ToggleSection = () => {
  const [show, setShow] = useState(false);

  return (
    <div className="d-flex flex-column align-items-center">
      <Button className="my-5" onClick={() => setShow(!show)}>
        {show ? "Nascondi sezione" : "Mostra sezione"}
      </Button>

      {show && (
        <Card style={{ width: "18rem" }}>
          <Card.Img
            variant="top"
            src="https://images.unsplash.com/photo-1719938570902-6fe35719cde9?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="wall of pinned cards"
          />
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>lorem ipsum </Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>
      )}
    </div>
  );
};

export default ToggleSection;
