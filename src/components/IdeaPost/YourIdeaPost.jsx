import {
    Text,
    Tag,
    Button,
    Card,
    CardBody,
    Divider,
    ButtonGroup,
    HStack,
    Input,
    InputGroup,
    InputRightElement,
    IconButton,
    useDisclosure,
    SlideFade,
    Accordion,
    AccordionButton,
    AccordionItem,
    AccordionPanel,
    Editable,
    EditablePreview,
    EditableTextarea,
    EditableInput,
    Alert,
    Switch,
    VStack
} from '@chakra-ui/react';
import React from 'react';
import { useState } from 'react';
import '../../assets/scss/main.scss';
import gwuni from '../../assets/img/gwuni.png'
import Icon from '../Icon/Icon';

const YourIdeaPost = () => {
    const [likeCount, setLikeCount] = useState(0);
    const [dislikeCount, setDislikeCount] = useState(0);
    const [activeBtn, setActiveBtn] = useState("none");

    const [lock, setLock] = useState(false);

    const { isOpen, onToggle } = useDisclosure();

    const [uploadImg, setUploadImg] = useState(gwuni);

    const handleOnChange = () => {
        setLock(!lock);
    };

    const handleUploadImage = (e) => {
        let file = e.target.files[0];
        if (
            file.type === 'image/jpeg' ||
            file.type === 'image/jpg' ||
            file.type === 'image/png'
        ) {
            let reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = (event) => setUploadImg(event.target.result);

        }
    };

    const handleLikeClick = () => {
        if (activeBtn === "none") {
            setLikeCount(likeCount + 1);
            setActiveBtn("like");
            return;
        }

        if (activeBtn === 'like') {
            setLikeCount(likeCount - 1);
            setActiveBtn("none");
            return;
        }

        if (activeBtn === "dislike") {
            setLikeCount(likeCount + 1);
            setDislikeCount(dislikeCount - 1);
            setActiveBtn("like");
        }
    };

    const handleDisikeClick = () => {
        if (activeBtn === "none") {
            setDislikeCount(dislikeCount + 1);
            setActiveBtn("dislike");
            return;
        }

        if (activeBtn === 'dislike') {
            setDislikeCount(dislikeCount - 1);
            setActiveBtn("none");
            return;
        }

        if (activeBtn === "like") {
            setDislikeCount(dislikeCount + 1);
            setLikeCount(likeCount - 1);
            setActiveBtn("dislike");
        }
    };

    return (
        <Accordion allowToggle>
            <Card
                width={'92%'}
                variant='elevated'
            >
                <CardBody className='post'>
                    <HStack spacing='13px' align='center' paddingBottom={'0'}>
                        <Icon
                            content='fa-regular fa-circle-user'
                            fontSize='62px'
                            color='#2b6cb0'
                            className='iconAvatar'
                        ></Icon>
                        <Text
                            fontSize='4xl'
                            className='staffName'
                        >
                            You
                        </Text>
                        <Tag
                            colorScheme='blue'
                            size='lg'
                            className='categoryTag'
                        >
                            CATEGORY 1
                        </Tag>

                    </HStack>
                </CardBody>

                <AccordionItem className='border-0'>
                    {({ isExpanded }) => (
                        <>
                            <HStack>
                                <Editable
                                    fontSize='3xl'
                                    className='ideaTitle'
                                    placeholder='Idea Title'
                                    marginLeft={'1%'}
                                >
                                    <EditablePreview />
                                    <EditableInput />
                                </Editable>

                                {isExpanded ? (
                                    <>
                                        <AccordionButton
                                            width={'10%'}
                                            _hover={{ bgColor: 'none' }}
                                        >
                                            <HStack>
                                                <Button
                                                    variant='solid'
                                                    size='lg'
                                                    colorScheme='linkedin'
                                                >
                                                    Collapse
                                                </Button>
                                            </HStack>
                                        </AccordionButton>
                                        <Button
                                            variant='outline'
                                            size='md'
                                            colorScheme='red'
                                            onClick={onToggle}
                                        >
                                            Delete Post
                                        </Button>

                                        <SlideFade
                                            in={isOpen}
                                            marginLeft={'3%'}>
                                            <HStack>
                                                <Text
                                                    size='md'
                                                    className='deleteBtn'
                                                >
                                                    Are you sure?
                                                </Text>
                                                <ButtonGroup
                                                    variant='ghost'
                                                    size='sm'
                                                >
                                                    <Button
                                                        colorScheme='red'
                                                    >
                                                        Yes
                                                    </Button>
                                                    <Button
                                                        colorScheme='twitter'
                                                    >
                                                        No
                                                    </Button>
                                                </ButtonGroup>
                                            </HStack>

                                        </SlideFade>
                                    </>

                                ) : (
                                    <AccordionButton
                                        width={'10%'}
                                        _hover={{ bgColor: 'none' }}
                                    >
                                        <HStack>
                                            <Button variant='solid'
                                                size='lg'
                                                colorScheme='blue'
                                            >
                                                Reveal
                                            </Button>
                                        </HStack>
                                    </AccordionButton>

                                )}

                            </HStack>

                            <AccordionPanel className='hiddenPanel'>
                                <Editable
                                    className='editablePara'
                                    placeholder='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Potenti nullam ac tortor vitae purus faucibus. Sagittis id consectetur purus ut faucibus. Dolor purus non enim praesent. Amet nisl suscipit adipiscing bibendum est ultricies integer. Cras tincidunt lobortis feugiat vivamus at augue eget. Praesent semper feugiat nibh sed pulvinar proin gravida. Tincidunt ornare massa eget egestas. Tellus at urna condimentum mattis. Condimentum vitae sapien pellentesque habitant morbi. Arcu dictum varius duis at consectetur lorem donec massa. Ante metus dictum at tempor commodo ullamcorper a lacus vestibulum. Porta lorem mollis aliquam ut. Nisl vel pretium lectus quam.'
                                >
                                    <EditablePreview />
                                    <EditableTextarea maxHeight={'max-content'} />
                                </Editable>

                                <HStack>
                                    <img
                                        src={uploadImg}
                                        alt='University of Greenwich'
                                        className='img-fluid image'
                                    /> 

                                    <div className='col-2 px-0 mx-0 text-center'>
                                        <div className='container w-75 '>
                                            <label
                                                className='button-upload-img'
                                                htmlFor='loadImgInput'
                                            >
                                                <div className='d-flex uploadBtn'>
                                                    <HStack className='uploadStack'>
                                                        <Icon content='fa-regular fa-image' color='#3182ce' />
                                                        <p className='ml-1 uploadBtnText'>Change photo</p>
                                                    </HStack>
                                                </div>
                                            </label>
                                            <input
                                                onChange={handleUploadImage}
                                                accept='image/png,image/jpg,image/jpeg'
                                                className='disapear'
                                                id='loadImgInput'
                                                type='file'
                                            />
                                            {uploadImg == null ? (
                                                <Alert
                                                    style={{ borderRadius: '8px' }}
                                                    status='success'
                                                    variant='top-accent'
                                                    className='d-block text-left mt-3'
                                                >
                                                    <div>
                                                        <b>Photo</b>
                                                    </div>
                                                </Alert>
                                            ) : (
                                                <img
                                                    className='img-fluid'
                                                    src={uploadImg}
                                                />
                                            )}
                                        </div>
                                        <div className='my-3'>
                                            <b>Post Anonymously ?</b>
                                        </div>
                                        <div className='d-flex justify-content-center align-middle'>
                                            <Switch
                                                size='sm'
                                                className='p-0 mt-1 mr-3'
                                                onChange={handleOnChange}
                                            />

                                            <Icon
                                                content={lock ? 'fa-solid fa-lock' : 'fa-solid fa-lock-open'}
                                                fontSize='15px'
                                            />
                                        </div>
                                        <VStack>
                                                <Button
                                                    variant='outline'
                                                    size='sm'
                                                    colorScheme='green'
                                                    onClick={() => {setUploadImg()}}
                                                >
                                                    Accept changes
                                                </Button>
                                                <Button
                                                    colorScheme='red'
                                                    variant='outline'
                                                    size='sm'
                                                >
                                                    Cancel changes
                                                </Button>
                                        </VStack>

                                    </div>

                                </HStack>


                                <ButtonGroup variant='ghost' size='lg'>
                                    <Button
                                        colorScheme='blue'
                                        leftIcon={<Icon content='fa-regular fa-thumbs-up' />}
                                        onClick={handleLikeClick}
                                        className={`${activeBtn === "like" ? "like-active" : ""}`}
                                    >
                                        {likeCount}
                                    </Button>
                                    <Button
                                        colorScheme='red'
                                        leftIcon={<Icon content='fa-regular fa-thumbs-down' />}
                                        onClick={handleDisikeClick}
                                        className={`${activeBtn === "dislike" ? "dislike-active" : ""}`}
                                    >
                                        {dislikeCount}
                                    </Button>
                                    <Button
                                        isDisabled
                                        leftIcon={<Icon content='fa-regular fa-comment-dots' />}
                                        colorScheme='black'
                                    >
                                        0
                                    </Button>
                                </ButtonGroup>
                                <Divider />
                                <HStack>
                                    <Icon
                                        content='fa-regular fa-circle-user'
                                        fontSize='34px'
                                        color='#2b6cb0'
                                    ></Icon>
                                    <InputGroup>
                                        <Input
                                            placeholder='What do you think?'
                                            variant='outline'
                                            borderRadius={'20px'} />
                                        <InputRightElement>
                                            <IconButton
                                                icon={<Icon
                                                    content='fa-regular fa-paper-plane'
                                                    fontSize='15px' />}
                                                variant='ghost'
                                                colorScheme='blue'
                                                borderRadius={'20px'} />
                                        </InputRightElement>
                                    </InputGroup>

                                </HStack>


                            </AccordionPanel>
                        </>
                    )}
                </AccordionItem>
            </Card>
        </Accordion>

    );
};

export default YourIdeaPost; 