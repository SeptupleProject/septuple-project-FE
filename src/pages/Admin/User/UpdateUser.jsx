import React from "react";
import { 
    Center, 
    Card, 
    Text, 
    Input, 
    InputGroup, 
    InputLeftElement,
    Select, 
    Button,
    ButtonGroup } from "@chakra-ui/react";
import Icon from '../../../components/Icon/Icon';
import '../../../assets/scss/main.scss';


const UpdateUser = () => {
    return (
        <>
            <Center>
                <Card className="cardForm">

                        <Text fontSize='4xl' className="heading" colorScheme='blue'>Update user's information</Text>
                        <div className="formBody">
                            <InputGroup className="updateInput" width={'86%'}>
                                <InputLeftElement children={<Icon content='fa-regular fa-envelope' fontSize='15px' />} />
                                <Input size='lg' placeholder="segun.adebayo@domain.com" isDisabled variant='filled' />
                            </InputGroup>
                        
                            <Select size='lg' placeholder="Staff" className="updateInput" width={'86%'}>
                                <option value='coordinator'>QA Coordinator</option>
                                <option value='manager'>QA Manager</option>
                            </Select> 
                        </div>
                        

                        <ButtonGroup className="actionBtn">
                            <Button variant='ghost' colorScheme='red' >Cancel</Button>
                            <Button variant='solid' colorScheme='blue' >Update</Button>
                        </ButtonGroup>

                </Card>
            </Center>
        </>
    )
}

export default UpdateUser;