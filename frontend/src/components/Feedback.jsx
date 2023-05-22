import React, { useState } from "react";
import {useDispatch} from 'react-redux'
import {
  FormControl,
  FormLabel,
  Input,
  RadioGroup,
  HStack,
  Radio,
  Button,
  Heading,
  Flex,
} from "@chakra-ui/react";
import { addFeedback } from "../redux/action";

const Feedback = () => {
  const dispatch = useDispatch()
  const [feedback, setFeedback] = useState({
    title: "",
    descriptionOfFeedback: "",
    like: false,
    images: "",
    submitter_name: "",
    submitter_email: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFeedback({
      ...feedback,
      [name]: value,
    });
  };

  const handleRadio = ()=>{
    setFeedback({
        ...feedback,
        like:Boolean(!feedback.like)
    })
  }
  console.log(feedback)
  
  const handleSubmit = (e)=>{
    e.preventDefault();
    dispatch(addFeedback(feedback)) 
  }

  return (
    <Flex flexDirection={"column"} width={"500px"} m={"10px auto"}>
      <Heading>Feedback Form</Heading>
      <FormControl mt={"50px"}>
        <FormLabel mt={"10px"}>Title</FormLabel>
        <Input
          type="title"
          placeholder="Enter Title"
          name="title"
          onChange={handleChange}
        />
        <FormLabel mt={"20px"}>Description of Feedback</FormLabel>
        <Input
          type="description"
          placeholder="Enter description"
          name="descriptionOfFeedback"
          onChange={handleChange}
        />
        <RadioGroup
          value={feedback.like || !feedback.like}
          mt={"20px"}
          onChange={handleRadio}
        >
          <HStack spacing="24px">
            <Radio value={feedback.like ? true : false}>Like</Radio>
            <Radio value={!feedback.like ? true : false}>Dislike</Radio>
          </HStack>
        </RadioGroup>
        <FormLabel mt={"20px"}>Images</FormLabel>
        <Input
          type="text"
          placeholder="Enter Url"
          name="images"
          onChange={handleChange}
        />
        <FormLabel mt={"20px"}>Submitter Name</FormLabel>
        <Input
          type="text"
          placeholder="Enter name"
          name="submitter_name"
          onChange={handleChange}
        />
        <FormLabel mt={"20px"}>Submitter Email</FormLabel>
        <Input
          type="email"
          placeholder="Enter email"
          name="submitter_email"
          onChange={handleChange}
        />
        <Button mt={"20px"} onClick={handleSubmit}>Submit</Button>
      </FormControl>
    </Flex>
  );
};

export default Feedback;
