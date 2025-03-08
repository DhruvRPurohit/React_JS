import React from 'react'
import { Accordion } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import './../node_modules/bootstrap/dist/css/bootstrap.min.css'

const Assesment = () => {
    let data = [
        {
            Que : "What is your return Policy ?",
            ans : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus et odit at commodi voluptate non? Fugiat dicta soluta sapiente quaerat!"
        },
        {
            Que : "What is your return Policy ?",
            ans :"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Exercitationem necessitatibus odit incidunt harum ea vel provident rerum recusandae quae officia rem, temporibus reprehenderit totam asperiores, eius delectus possimus, assumenda architecto. Laborum nulla illum reprehenderit laudantium temporibus delectus minus vitae? Inventore sint accusamus dolores velit ullam minima molestiae dignissimos neque ab. "
             
        },
        {
            Que : "Can i purchase Items agaim ?",
            ans : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus et odit at commodi voluptate non? Fugiat dicta soluta sapiente quaerat!"
        },

    ]
  return (
    <div>
        <div className='Accordion-container container mt-5'>
        {
            data.map((Items)=>(
                <Accordion >
                    <Accordion.Header className=''>
                        <h3>{Items.Que}</h3>
                    </Accordion.Header>
                    <Accordion.Body>
                        <small>{Items.ans}</small>
                    </Accordion.Body>
                </Accordion>
            ))
        }
        </div>
    </div>
  )
}

export default Assesment