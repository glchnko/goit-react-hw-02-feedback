import { Component } from "react";
import Section from "./Section/Section";



class Feedback extends Component {
   state = {
    good: 0,
    neutral: 0,
    bad: 0
    };

    

   render () {
      return (
        <>
          <Section title = {'Please leave feedback'}></Section>
          <Section title = {'Statistics'}></Section>
        </>
      )
   }
}
export default Feedback;
