import { Avatar, Badge, Button, Chip, Grid, IconButton, Paper, Stack, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'
import PhotoCameraIcon from '@mui/icons-material/PhotoCamera';
import AddIcon from '@mui/icons-material/Add';

const skill = ["html","css","js","react"]

function DeveloperProfile() {

    const [profile, setProfile] = useState("") ;
    const [skills, setSkills] = useState(skill) ;

    const handleChange = e => {
        setProfile(URL.createObjectURL(e.target.files[0]))
    }

    const handleDelete = (item) => {
       setSkills((skills) => skills.filter((data) => data !== item))
    };
    const handleAddSkills = () =>{
        let newSkill = prompt("Add your Skills")
        if(newSkill!=""){

            setSkills([...skills,newSkill])
        }
    }
    return (
        <div>
           <Typography variant="h6" sx={{fontWeight:"500",my:1}} >Edit Profile</Typography>
            <Grid container
                direction="row"
                justifyContent="center"
                alignItems="flex-start"
                spacing={2}
                sx={{maxWidth:"600px",mx:"auto",pr:3}}
            >
                <Grid item xs={4}></Grid>
                <Grid item xs={4}>
                
                <Badge
                    overlap="circular"
                    anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
                    badgeContent={
                        <label htmlFor="icon-button-file">
                        <input style={{display:"none"}} onChange={handleChange} accept="image/*" id="icon-button-file" type="file" />
                        <IconButton color="primary" aria-label="upload picture" component="span">
                        <PhotoCameraIcon />
                        </IconButton>
                    </label>
                    }
                    sx={{cursor:"pointer"}}
                >
                    <Avatar
                        alt="Remy Sharp"
                        src={profile}
                        sx={{ width: 100, height: 100 }}
                    />
                </Badge>
                
                </Grid>
                <Grid item xs={4}></Grid>
                <Grid item xs={6}>
                <TextField fullWidth placeholder="Fullname"   />

                </Grid>
                <Grid item xs={6}>
                <TextField fullWidth placeholder="Email"  />

                </Grid>
                <Grid item xs={12}>
                <TextField fullWidth placeholder="Profile description" multiline maxRows={4}/>
                </Grid>
                <Grid item xs={6}>
                <TextField fullWidth placeholder="Phone no"  />

                </Grid>
                <Grid item xs={6}>
                <TextField fullWidth placeholder="Github"  />
                </Grid>
                <Grid item xs={6}>
                <TextField fullWidth placeholder="Linkedin"  />

                </Grid>
                <Grid item xs={6}>
                <TextField fullWidth placeholder="Instagram"  />
                </Grid>
                
                <Grid item xs={12}>
                        <Stack direction="row" spacing={1} alignItems="center">
                            <Typography sx={{fontWeight:"500"}}>Skills :</Typography>
                            <Paper elevation={2} sx={{p:1}}>
                            {
                                skills.map((item) => {
                                    return  <Chip
                                                label={item}
                                                variant="outlined"
                                                color="primary"
                                                onDelete={() => {handleDelete(item)}}
                                                sx={{mr:1}}
                                            />
                                })
                            }
                            <Chip
                                icon={<AddIcon />}
                                label="Add"
                                color="success"
                                variant="outlined"
                                sx={{cursor:"pointer"}}
                                onClick={handleAddSkills}
                                />
                            </Paper>
                        
                        
                        </Stack>
                </Grid>
                <Grid item xs={12}>
                    <Typography sx={{fontWeight:"500"}}>Do you want to change your password ?</Typography>
                </Grid>
                <Grid item xs={6}>
                    <TextField fullWidth placeholder="Type your password" type="password"  />
                </Grid>
                <Grid item xs={6}>
                    <TextField fullWidth placeholder="Confirm password"  type="password" required/>
                </Grid>
                <Grid item xs={12}>
                     <Button color="success" variant="contained">Save changes</Button>
                     <Button sx={{mx:1}} color="error" variant="contained">reset</Button>
                </Grid>
            </Grid>
        </div>
    )
}

export default DeveloperProfile
