import React, { useEffect, useState } from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import TitleBlock from '../ui/titleBlock/Titleblock';
import Margin from '../ui/margin/Margin';

import axios from '../../axios';

interface CurrentQuestions {
    title: string
}

interface QuestionBlock {
    _id: string,
    title: string,
    question: string
}

export default function CurrentQuestion( { title } : CurrentQuestions ) {
    const [expanded, setExpanded] = useState<string | boolean>(false);
    const [ fetchQuest, setFetchQuest ] = useState<any>();

    const handleChange =
      (panel: string ) => (event: React.SyntheticEvent, isExpanded: boolean) => {
        setExpanded(isExpanded ? panel : false);
      };

      const fetchQuestion = async () => {
        try {
            const question = await axios.get('/questions/home');
            console.log(question.data);
            if(question.status === 200) {
                setFetchQuest(question.data);
            } 
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        fetchQuestion();
    }, []);
  
    return (
      <div id='currentQuestion'>
        <Margin/>
        <TitleBlock title={title} />
        <Margin/>
        { fetchQuest?.map(( {_id,  title, question } :QuestionBlock ) => (
            <Accordion className='accordion-block' key={_id} expanded={expanded === _id } onChange={handleChange(_id)}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1bh-content"
                    id="panel1bh-header"
                >
                    <Typography className='title-accordion'>
                        { title }
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography className='content'>
                        { question }
                    </Typography>
                </AccordionDetails>
            </Accordion>
        ))}
        
      </div>
    );
}
