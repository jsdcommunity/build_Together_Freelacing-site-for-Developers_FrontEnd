import React, { useEffect, useState } from 'react' ;
import {Typography,TableRow,Paper,TableHead,TableContainer,TableCell,TableBody,Table,Chip, Button, FormControl, InputLabel, Select, MenuItem} from "@mui/material"
import ViewProposalModel from "../ViewProposalModel/ViewProposalModel"
import { Box } from '@mui/system';

const columnItems = ["Buyer","Date","Status"," "]

const proposalData = [
    {   
        id:1,
        jobTitle:"First project title",
        buyerName:"Buyer name here",
        proposalDate:"20/05/2001",
        status:"pending"
    },
    {   
        id:2,
        jobTitle:"First project title",
        buyerName:"Buyer name here",
        proposalDate:"20/05/2001",
        status:"declined"
    },
    {   
        id:3,
        jobTitle:"First project title",
        buyerName:"Buyer name here",
        proposalDate:"20/05/2001",
        status:"accepted"
    }
]

const statusBtn = (sts) => {
   
    switch (sts) {
        case "pending":
              return ( <Chip label="Pending" color="warning" />)
        case "accepted":
            return ( <Chip label="Accepted" color="success" />)
        case "declined":
            return ( <Chip label="Declined" color="error" />)       
    
        default:
            break;
    }

}




function DeveloperProposals() {
  
    const [viewModel, setviewModel] = useState([]);
    const [proposals, setproposals] = useState([]) ;

    useEffect(() => {


      // proposals from database


      setproposals(proposalData) ;

    }, [])

    const handleProposalModel = id => {
      const proposal = proposals.filter(item => item.id === id )
      setviewModel(proposal);
    }

    const handleChange = e => {
          const selectedItem = e.target.value
          const proposal = proposals.filter(item => item.status === selectedItem )
          setproposals(proposal)
          if(selectedItem === "all"){
            setproposals(proposalData)
          }
     }


    return (
      <>
      <Typography variant="h6" sx={{fontWeight:"800",py:1}}>Proposals Details</Typography>

      <Box sx={{ minWidth: 120 }}>
          <FormControl sx={{minWidth:120}}>
              <InputLabel id="demo-simple-select-label">Status</InputLabel>
              <Select
                label="Status"
                onChange={handleChange}
              >
                <MenuItem value={"pending"}>Pending</MenuItem>
                <MenuItem value={"declined"}>Declined</MenuItem>
                <MenuItem value={"accepted"}>Accepted</MenuItem>
                <MenuItem value={"all"}>All </MenuItem>
              </Select>
          </FormControl>
      </Box>



        <ViewProposalModel 
          isOpen={Boolean(viewModel.length)}
          closeFunc={() => setviewModel([])}
          proposalData={viewModel[0]}
          statusBtn={statusBtn}
        />

        <TableContainer component={Paper} elevation={3} sx={{p:1,my:1}}>
              <Table sx={{ minWidth: 250 }}>
                    <TableHead>
                      <TableRow>
                        <TableCell><Typography sx={{fontSize:"15px",fontWeight:500}}>Title</Typography></TableCell>
                        {
                            columnItems.map((item) => 
                                  <TableCell align="right"><Typography sx={{fontSize:"15px",fontWeight:500}}>{item}</Typography></TableCell>
                            )
                        }
                        
                      </TableRow>
                    </TableHead>
                    <TableBody>
                          { proposals.map((row) => (
                            <TableRow
                              key={row.name}
                              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                              <TableCell component="th" scope="row">
                                {row.jobTitle}
                              </TableCell>
                              <TableCell align="right">{row.buyerName}</TableCell>
                              <TableCell align="right">{row.proposalDate}</TableCell>
                              <TableCell align="right">{
                                    statusBtn(row.status)
                              }</TableCell>
                              <TableCell align="right"><Button size="small" variant="contained" color="info" onClick={ () => handleProposalModel(row.id) }> View</Button></TableCell>
                            </TableRow>
                          ))}
                    </TableBody>
              </Table>
            </TableContainer>

      </>
           )
}

export default DeveloperProposals 
