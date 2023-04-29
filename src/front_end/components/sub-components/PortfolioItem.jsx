import { Markup } from 'interweave';
import Modal from 'react-bootstrap/Modal'
import { useState } from 'react';

export default function PortfolioItem (props) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div class="col col-sm-12 col-md-12 col-lg-6 col-xxl-4 mt-3">
        <div class="card w-10">
          <img src={props.image} class="card-img-top" alt={props.alt}/>
          <div class="card-body">
          <h5 class="card-title">{props.title}</h5>
            <Markup content={props.description} />
          <button class="btn btn-primary mt-2" type="button" onClick={handleShow}>
            Read More
          </button>
          </div>
        </div>

        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>{props.title}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Markup content={props.content} />
          </Modal.Body>
          <Modal.Footer>
            <button class="btn btn-primary" type="button" onClick={handleClose}>
              Close
            </button>
          </Modal.Footer>
        </Modal>
      </div>
  )
}