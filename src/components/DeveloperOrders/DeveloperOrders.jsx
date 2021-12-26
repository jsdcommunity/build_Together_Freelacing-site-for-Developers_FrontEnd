
import React, { useEffect } from 'react'
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Avatar, Button, Chip, InputAdornment, OutlinedInput, Paper, Stack } from '@mui/material';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import EmailIcon from '@mui/icons-material/Email';
import InstagramIcon from '@mui/icons-material/Instagram';


const orderDetails = [
    {
        buyerName:"John smith",
        shortDesription:"This is a short description of project",
        detailedDescription:"This is a descriptive description of project lorThis is a descriptive description of project lor",
        Amount:"250",
        phone:"+91998365478",
        email:"myname@gmail.com",
        insta_id:"iam_Here"
    },
    {
        buyerName:"Hello smith",
        shortDesription:"This is a short description of project",
        detailedDescription:"This is a descriptive description of project",
        Amount:"250",
        phone:"+91998365478",
        email:"myname@gmail.com",
        insta_id:"iam_Here"
    },
    {
        buyerName:"John smith",
        shortDesription:"This is a short description of project",
        detailedDescription:"This is a descriptive description of project",
        Amount:"250",
        phone:"+91998365478",
        email:"myname@gmail.com",
        insta_id:"iam_Here"
    }
]

function DeveloperOrders() {
    
    useEffect(() => {
      //  orders details from the database
        
    }, [])

    return (
        <>
           <Typography variant="h6" sx={{fontWeight:"800",py:1}}>Orders details</Typography>
           <div>
               {
                   orderDetails.map((item) => {
                        return <Accordion sx={{my:1}}>
                        <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        >
                            <Stack direction="row" spacing={1}
                                alignItems="center"
                                spacing={1}
                            >
                                <Avatar alt="Remy Sharp" src="assets/hero-man.png" />
                                <Typography >{item.buyerName}</Typography>
                               
                            <Chip label="Accepted" color="success" />
                            </Stack>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography sx={{border:"1px solid #23eb44",p:1,borderRadius:"5px"}}>
                                {item.shortDesription}
                            </Typography>
                            <Typography sx={{border:"1px solid #23eb44",p:1,mt:1,borderRadius:"5px"}}>
                                {item.detailedDescription}
                            </Typography>

                            <Typography  sx={{ mt: 2 ,fontWeight:"500"}}>
                            Amount :
                            <OutlinedInput value={item.Amount}  disabled sx={{px:2,mx:1}}
                                startAdornment={<InputAdornment position="start">$</InputAdornment>}
                            />
                            </Typography>

                            <Typography sx={{mt:1 , fontWeight:"500"}}>
                                Connect me :
                            </Typography>

                            <Stack direction={{xs:"column",md:"row"}} spacing={2} sx={{p:1}}>
                               <Paper elevation={2} sx={{display:"flex",alignItems:"center",p:1}}>
                                    <WhatsAppIcon color="primary" /> 
                                    <Typography sx={{mx:1}} color="gray">{item.phone}</Typography>
                               </Paper>
                               <Paper elevation={2} sx={{display:"flex",alignItems:"center",p:1}}>
                                    <EmailIcon  color="primary" /> 
                                    <Typography sx={{mx:1}} color="gray">{item.email}</Typography>
                               </Paper>
                               <Paper elevation={2} sx={{display:"flex",alignItems:"center",p:1}}>
                                    <InstagramIcon  color="primary" /> 
                                    <Typography sx={{mx:1}} color="gray">{item.insta_id}</Typography>
                               </Paper>
                            </Stack>

                            <Stack direction="row" spacing={2} sx={{mt:2}}>
                                <Button variant="contained" color="success">Submit order</Button>
                                <Button variant="contained" color="error">Cancel Order</Button>
                            </Stack>
                        </AccordionDetails>
                </Accordion>
                })
               }
                
      
        
            </div>
        </>
    )
}

export default DeveloperOrders
