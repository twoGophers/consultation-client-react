import React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import TitleBlock from '../ui/titleBlock/Titleblock';
import Margin from '../ui/margin/Margin';

interface CurrentQuestions {
    title: string,
    question_block: any
}

interface QuestionBlock {
    _id: any,
    panel: string,
    title: string,
    question: string
}

export default function CurrentQuestion( { title, question_block } : CurrentQuestions ) {
    const [expanded, setExpanded] = React.useState<string | false>(false);
    const handleChange =
      (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
        setExpanded(isExpanded ? panel : false);
      };
  
    return (
      <div id='currentQuestion'>
        <Margin/>
        <TitleBlock title={title} />
        <Margin/>
        { question_block?.map(( {_id, panel, title, question } :QuestionBlock ) => (
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
